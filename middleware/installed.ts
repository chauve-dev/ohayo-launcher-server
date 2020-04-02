import { Middleware } from '@nuxt/types'

const installedMiddleware: Middleware = async ({ store, redirect }) => {
  if (store.getters['settings/getServerConfig'] === null) {
    await store.dispatch('settings/fetchServerConfig')
  }

  if (!store.getters['settings/getServerConfig']?.installed) {
    return redirect('/install')
  }
}

export default installedMiddleware
