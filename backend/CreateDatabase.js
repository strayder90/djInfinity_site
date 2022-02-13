import { connection } from './ConnectionToDatabase.js';

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