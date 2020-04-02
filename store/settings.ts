import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

interface ServerConfigState {
  installed: boolean
}

@Module({
  name: 'settings',
  stateFactory: true,
  namespaced: true,
})
export class Settings extends VuexModule {
  serverConfig: ServerConfigState | null = null

  @Mutation
  setServerConfig(config: ServerConfigState) {
    this.serverConfig = config
  }

  @Action
  async fetchServerConfig() {
    const config = await $axios.$get('/config')
    // eslint-disable-next-line no-console
    console.log('config', config)
    this.context.commit('setServerConfig', config)
  }

  get getServerConfig() {
    return this.serverConfig
  }
}
