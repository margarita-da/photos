import * as Yup from 'yup';

// Схема для страницы создания альбома
export const validationSchemaCreareAlbum = Yup.object({
	name: Yup.string().required('Заполните поле')
});

