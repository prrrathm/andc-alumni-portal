// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


// require('dotenv').config();
// const mysql = require('mysql2');
// const connection = mysql.createConnection(process.env.DATABASE_URL);
// console.log('Connected to PlanetScale!');
// connection.end();