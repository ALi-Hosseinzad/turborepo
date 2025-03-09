import en from '../../messages/en.json'
import fa from '../../messages/fa.json'
import { LANGUAGESCONFIG } from './languagesConfig'

const t = (key: string): string => {
  let lang
  switch (LANGUAGESCONFIG.LANGUAGE) {
    case 'en':
      lang = en
      break
    case 'fa':
    default:
      lang = fa
  }

  let translatedString
  if (lang[key]) {
    translatedString = lang[key]
  } else if (LANGUAGESCONFIG.LANGUAGE !== 'fa') {
    const fallbackLang = fa
    if (fallbackLang[key]) {
      translatedString = fallbackLang[key]
    }
  } else {
    translatedString = ''
  }
  return translatedString
}

export { t }
