import mysql from "mysql2/promise";
let pool;
export function getCrmPool() {
  if (pool) return pool;
  const {DB_HOST,DB_PORT,DB_NAME,DB_USER,DB_PASSWORD}=process.env;
  const port=Number(DB_PORT||3306);
  if (!DB_HOST || !DB_NAME || !DB_USER || !DB_PASSWORD || !Number.isInteger(port) || port<1 || port>65535)
    throw new Error("CRM database configuration missing");
  pool=mysql.createPool({
    host:DB_HOST,port,database:DB_NAME,user:DB_USER,password:DB_PASSWORD,
    connectionLimit:4,waitForConnections:true,queueLimit:20,connectTimeout:5000,
    charset:"utf8mb4",timezone:"Z",multipleStatements:false,
    ...(process.env.DB_TLS==="true"?{ssl:{rejectUnauthorized:true}}:{})
  });
  return pool;
}
export async function closeCrmPool() {if(pool){const old=pool;pool=undefined;await old.end();}}
