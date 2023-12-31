import express from 'express';
import mongoose from 'mongoose';

import { CardController, CartController, UserController } from './controllers/index.js';
import { registerValidation, loginValidation } from './validation.js';
import handleValidationErrors from './utils/handleValidationErrors.js';
import checkAuth from './utils/checkAuth.js';
import cors from 'cors';

mongoose.connect('mongodb+srv://admin:admin123@cluster0.ovflhbn.mongodb.net/medabots?retryWrites=true&w=majority')
	.then(() => console.log('DB OK'))
	.catch((err) => console.log('DB Error:', err))

const app = express();
app.use(cors());

app.use(express.json());

app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/card', CardController.getAll);

app.post('/cart/:id', checkAuth, handleValidationErrors, CartController.buyCard);
app.delete('/cart/:id', checkAuth, CartController.remove);
app.get('/cart', checkAuth, CartController.getBuyCard);

app.listen(process.env.PORT || 4444, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log('Server OK');
})