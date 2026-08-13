import mysql from 'mysql2/promise';
import fs from 'fs';

const env = fs.readFileSync('.env', 'utf8').split('\n').reduce((acc, line) => {
  const [key, ...val] = line.split('=');
  if (key) acc[key.trim()] = val.join('=').trim().replace(/['"]/g, '');
  return acc;
}, {});

const pool = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
});

async function run() {
  try {
    await pool.query("ALTER TABLE vacancies ADD keywords TEXT NULL AFTER meta_description, ADD canonical_url VARCHAR(255) NULL AFTER keywords;");
    console.log("Success");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
}
run();
