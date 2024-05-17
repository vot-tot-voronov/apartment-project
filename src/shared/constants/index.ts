export const USER_INFO_LOCALSTORAGE_KEY = 'userInfo';

export enum ErrorMessagesEnum {
  REQUIRED = 'Это поле обязательно',
  RUSSIAN_ALPHABET = 'Разрешены буквы только русского алфавита',
  CAPITAL_LETTER = 'Первая буква должна быть заглавной',
  NOT_EMPTY = 'Поле не может быть пустым',
  PHONE = 'Введите номер телефона в формате +7|8-XXX-XXX-XX-XX',
  EMAIL = 'Введите email в формате xxx@xxx.xx',
  PASSWORD = 'Пароль должен содержать латинские строчные и заглавные буквы, цифры, спецсимволы',
}

export const RegExps = {
  PHONE: /^(8) \d{3} \d{3}-\d{2}-\d{2}$/g,
  RUSSIAN_ALPHABET: /^[а-яА-ЯЁё]+$/,
  RUSSIAN_ALPHABET_WITH_DASH: /^[а-яА-ЯЁё-]+$/,
  CAPITAL_LETTER: /^[А-ЯЁ]/,
  LATIN_LETTERS: /^[a-zA-Z]+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[^\w\s]).{6,}/,
  DIGITS: /^\d+$/,
};
