const TOKEN_NAME = 'token';

export class TokenProvider {
  public static get = () => localStorage.getItem(TOKEN_NAME) || '';
  public static set = (token: string) =>
    localStorage.setItem(TOKEN_NAME, token || '');
  public static remove = () => localStorage.removeItem(TOKEN_NAME);
}