export const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
export const PHONE_REGEX = /^9[0-9]{2}[0-9]{3}[0-9]{4}/i
export const INTEGER_REGEX = /^\d+$/
export const NUMBER_REGEX = /^[0-9]*$/
export const JUST_PERSIAN_REGEX = /^[\u0600-\u06FF\s]+$/
export const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
