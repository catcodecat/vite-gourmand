import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'vite_gourmand',
  waitForConnections: true,
  connectionLimit: 10
})

export async function query(sql, params = []) {
  const [rows] = await pool.execute(sql, params)
  return rows
}
