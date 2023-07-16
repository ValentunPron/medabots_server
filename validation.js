import { body } from 'express-validator';

export const loginValidation = [
	body('email', "Неправильний формат почти").isEmail(),
	body('password', "Пароль повинен містити мінімум 5 символів").isLength({min: 5}),
];

export const registerValidation = [
	body('email', "Неправильний формат почти").isEmail(),
	body('password', "Пароль повинен містити мінімум 5 символів").isLength({min: 5}),
	body('fullName', "Ім'я повинно містити мінімум 3 символа").isLength({min: 3}),
];