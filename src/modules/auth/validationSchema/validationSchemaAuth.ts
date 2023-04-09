import * as Yup from 'yup';

import { strongRegexForPassword } from '../consts';

// Схема для страницы авторизации
export const validationSchemaAuth = Yup.object({
	username: Yup.string()
		.required('Заполните поле')
		.email('Некорректный email')
		.nullable(),
	password: Yup.string()
		.required('Заполните поле')
		.min(8, 'Некорректный пароль: используйте не менее 8 символов')
		.max(50, 'Слишком длинный пароль: используйте менее 50 символов')
		.matches(strongRegexForPassword, 'Некорректный пароль: используйте буквы (a-z, A-Z), цифры и символы')
});
