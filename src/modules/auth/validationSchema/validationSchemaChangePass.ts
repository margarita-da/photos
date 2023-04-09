import * as Yup from 'yup';

import { strongRegexForPassword } from '../consts';

// Схема для страницы смены пароля
export const validationSchemaChangePass = Yup.object({
	oldPassword: Yup.string()
		.required('Заполните поле')
		.min(8, 'Некорректный пароль: используйте не менее 8 символов')
		.max(50, 'Слишком длинный пароль: используйте менее 50 символов')
		.matches(strongRegexForPassword, 'Некорректный пароль: используйте буквы (a-z, A-Z), цифры и символы'),
	newPassword: Yup.string()
		.required('Заполните поле')
		.min(8, 'Некорректный пароль: используйте не менее 8 символов')
		.max(50, 'Слишком длинный пароль: используйте менее 50 символов')
		.matches(strongRegexForPassword, 'Некорректный пароль: используйте буквы (a-z, A-Z), цифры и символы'),
	repeatPassword: Yup.string()
		.required('Заполните поле')
		.min(8, 'Некорректный пароль: используйте не менее 8 символов')
		.max(50, 'Слишком длинный пароль: используйте менее 50 символов')
		.matches(strongRegexForPassword, 'Некорректный пароль: используйте буквы (a-z, A-Z), цифры и символы')
		.oneOf([Yup.ref('newPassword')], 'Пароли не совпадают'),

});
