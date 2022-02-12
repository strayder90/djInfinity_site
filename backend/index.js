import express from 'express';
import cors from 'cors';
const port = 5500;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
	try {
		res.status(200).json({ status_code: 200, status_message: 'Success!' });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});

app.listen(port, err => {
	if (err) throw err;
	console.log('Server is running...');
});