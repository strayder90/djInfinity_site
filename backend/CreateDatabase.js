import mysql from 'mysql2';

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
});

const createDatabase = () => {
	connection.connect(error => {
		if (error) {
      throw error;
    } else {
      connection.query('CREATE DATABASE simple_app', error => {
        if (error) {
          throw error;
        }
        console.log('Database created');
      });
    }
	});
};

createDatabase();