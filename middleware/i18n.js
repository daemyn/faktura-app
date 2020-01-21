export default function ({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) { return }
  // Get locale from params
  const locale = app.i18n.locale || defaultLocale
  if (!store.state.language.locales.find(l => l.code === locale)) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('language/set_lang', locale)
  app.i18n.locale = store.state.locale
}
