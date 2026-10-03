import { spawnSync } from "node:child_process";

const useWebpack = process.env.VERCEL !== "1";
const args = [
  "node_modules/next/dist/bin/next",
  "build",
  ...(useWebpack ? ["--webpack"] : []),
];

console.log(
  `[build] Running Next.js with ${useWebpack ? "Webpack" : "the platform default builder"}.`,
);

const result = spawnSync(process.execPath, args, {
  stdio: "inherit",
  env: process.env,
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
