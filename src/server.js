import * as dotenv from 'dotenv';

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import productRouter from './routers/products';

const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan('tiny'));

/* connect mongoose */
mongoose
	.connect(`mongodb://localhost:27017/demo1`)
	.then(() => console.log('connnection successfully!'))
	.catch(() => console.log('failed!'));

app.use('/api', productRouter);

app.listen(8080, () => {
	console.log('server running port 8080');
});
