import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetected from 'i18next-browser-languagedetector'

export default i18n
	.use(Backend)
	.use(LanguageDetected)
	.use(initReactI18next)
	.init({
		fallbackLng: 'ru',
		debug: __IS_DEV__ ? true : false,

		interpolation: {
			escapeValue: false,
		},

		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
	})
