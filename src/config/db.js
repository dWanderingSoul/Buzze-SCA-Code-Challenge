import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: process.env.DATABASE
});

pool.on("connect", () => {
    console.log("Connected pool established with database");
});

export default pool;