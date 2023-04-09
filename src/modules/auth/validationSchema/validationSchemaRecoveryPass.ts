import * as Yup from 'yup';

// Схема для страницы сброса пароля
export const validationSchemaRecoveryPass = Yup.object({
	email: Yup.string()
		.required('Заполните поле')
		.email('Некорректный email')
		.nullable(),
});