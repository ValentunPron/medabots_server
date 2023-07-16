import express from 'express';
import mongoose from 'mongoose';

import { UserController } from './controllers/index.js';
import { registerValidation, loginValidation } from './validation.js';
import handleValidationErrors from './utils/handleValidationErrors.js';

mongoose.connect('mongodb+srv://admin:admin123@cluster0.ovflhbn.mongodb.net/medabots?retryWrites=true&w=majority')
	.then(() => console.log('DB OK'))
	.catch((err) => console.log('DB Error:', err))

const app = express();

app.use(express.json());

app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);

app.listen(4444, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log('Server OK');
})