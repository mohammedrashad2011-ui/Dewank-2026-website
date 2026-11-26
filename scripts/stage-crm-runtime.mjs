import { cpSync, existsSync, mkdirSync, readFileSync, lstatSync } from "node:fs";
import { dirname, join, resolve, relative, basename } from "node:path";

const root=resolve(".");
const artifact=join(root,".next","standalone");
const json=p=>JSON.parse(readFileSync(p,"utf8"));
const inside=(path,base)=>{const r=relative(base,path);return r!==""&&!r.startsWith("..")&&!r.startsWith("/");};
export function stageCrmRuntime(){
  if(!existsSync(join(artifact,"server.js")))throw Error("Expected standalone server artifact");
  // Only explicit non-secret source files; never copy .env, logs or the whole repository.
  const sources=["scripts/crm-admin.mjs","scripts/crm-notify.mjs","app/lib/crm/mysql-pool.mjs","app/lib/crm/notification-worker.mjs","app/lib/crm/smtp-notifier.mjs","db/mysql/001-crm-leads.sql"];
  for(const file of sources){
    const dest=join(artifact,file);mkdirSync(dirname(dest),{recursive:true});cpSync(join(root,file),dest);
  }
  // Copy only the installed runtime dependency closure, keeping npm's nested package layout.
  // Next can bundle mysql2 into a route or omit worker-only dependencies from tracing;
  // the standalone CLI must resolve both directly without the build workspace.
  const seen=new Set();
  const nodeModules=join(root,"node_modules");
  function locate(name,from){
    let dir=from;
    for(;;){
      const candidate=join(dir,"node_modules",name);
      if(inside(candidate,nodeModules)&&existsSync(join(candidate,"package.json")))return candidate;
      if(dir===root)break;
      const parent=dirname(dir);if(parent===dir||(!inside(parent,root)&&parent!==root))break;dir=parent;
    }
    return null;
  }
  function visit(name,from,optional=false){
    const source=locate(name,from);
    if(!source){if(optional)return;throw Error("Missing CRM runtime dependency: "+name);}
    if(seen.has(source))return;
    if(lstatSync(source).isSymbolicLink())throw Error("Unexpected symlink in CRM dependencies");
    seen.add(source);
    const dest=join(artifact,relative(root,source));
    mkdirSync(dirname(dest),{recursive:true});
    cpSync(source,dest,{recursive:true,force:true,filter:p=>p===source||basename(p)!=="node_modules"});
    const pkg=json(join(source,"package.json"));
    const optionalDeps=pkg.optionalDependencies||{};
    for(const dep of Object.keys(pkg.dependencies||{}))if(!Object.hasOwn(optionalDeps,dep))visit(dep,source);
    for(const dep of Object.keys(optionalDeps))visit(dep,source,true);
  }
  for(const name of ["mysql2","nodemailer"])visit(name,root);
  console.log("[build] CRM runtime staged: "+sources.length+" source files, "+seen.size+" dependency packages");
}
