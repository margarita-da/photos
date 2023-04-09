import { Registration, ChangePassword, RecoveryPassword, Auth } from 'pages/auth';
import { AlbumList } from 'pages/albums';

export const routes = [
	{
		path: `registration`,
		element: Registration
	},
	{
		path: `auth`,
		element: Auth
	},

	{
		path: `change-password`,
		element: ChangePassword
	},
	{
		path: `recovery-password`,
		element: RecoveryPassword
	},
	{
		path: `/`,
		element: AlbumList
	},

]