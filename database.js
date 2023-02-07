// const mysql = require('mysql2');

// class Database {
//   constructor() {
//     this.connection = mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: 'password',
//       database: 'tracker_db'
//     });
//   }

//   query(sql, args) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(sql, args, (err, result) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(result);
//       });
//     });
//   }

//   close() {
//     return new Promise((resolve, reject) => {
//       this.connection.end((err) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve();
//       });
//     });
//   }
// }

// module.exports = Database;
