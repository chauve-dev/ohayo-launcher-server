<template>
  <div id="install" class="has-background-primary">
    <div class="section">
      <h1 class="title is-1 has-text-centered">
        {{ $t('pages.install.install') }}
      </h1>
      <form @submit.prevent="install">
        <div class="field is-grouped is-grouped-centered">
          <div class="field">
            <label for="language" class="label">
              {{ $t('pages.install.languages') }}
            </label>
            <div class="control">
              <div class="select is-primary is-rounded is-inverted is-outlined">
                <select
                  id="language"
                  v-model="form.language"
                  name="language"
                  @change="$i18n.setLocale($event.target.value)"
                >
                  <option
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    :value="locale.code"
                  >
                    {{ locale.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-5 is-12-mobile">
            <h3 class="subtitle is-3 has-text-weight-light">
              {{ $t('pages.install.account_name') }}
            </h3>
            <div class="field">
              <label for="admin_name" class="label">
                {{ $t('pages.install.account_name') }}
              </label>
              <div class="control has-icons-left">
                <input
                  id="admin_name"
                  v-model="form.admin_name"
                  type="text"
                  name="admin_name"
                  class="input"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <p v-if="errors.admin_name" class="help">
                {{ errors.admin_name.errorKey }}
              </p>
            </div>

            <div class="field">
              <div class="label" for="admin_password">
                {{ $t('pages.install.account_password') }}
              </div>
              <div class="control has-icons-left">
                <input
                  id="admin_password"
                  v-model="form.admin_password"
                  type="password"
                  name="admin_password"
                  class="input"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
              <p v-if="errors.admin_password" class="help">
                {{ errors.admin_password.errorKey }}
              </p>
            </div>

            <div class="field">
              <div class="label" for="admin_confirmation">
                {{ $t('pages.install.admin_confirmation') }}
              </div>
              <div class="control has-icons-left">
                <input
                  id="admin_confirmation"
                  v-model="form.admin_confirmation"
                  type="password"
                  name="admin_confirmation"
                  class="input"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
              <p v-if="errors.admin_confirmation" class="help">
                {{ errors.admin_confirmation.errorKey }}
              </p>
            </div>
          </div>

          <div class="is-divider-vertical is-hidden-mobile"></div>

          <div class="column is-5 is-12-mobile">
            <h3 class="subtitle is-3 has-text-weight-light">
              {{ $t('pages.install.database') }}
            </h3>
            <div class="field">
              <label for="db_name" class="label">
                {{ $t('pages.install.database') }}
              </label>
              <div class="control has-icons-left">
                <input
                  id="db_name"
                  v-model="form.db_name"
                  type="text"
                  name="db_name"
                  class="input"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-database"></i>
                </span>
              </div>
              <p v-if="errors.db_name" class="help">
                {{ errors.db_name.errorKey }}
              </p>
            </div>

            <div class="field">
              <label for="db_type" class="label">
                {{ $t('pages.install.db_type') }}
              </label>
              <div class="control has-icons-left">
                <div class="select is-fullwidth">
                  <select id="db_type" v-model="form.db_type" name="db_type">
                    {{ /* eslint-disable vue-i18n/no-raw-text */ }}
                    <option value="sqlite">SQLite</option>
                    <option value="mysql">MySQL/MariaDB</option>
                    <option value="psql">PostgreSQL</option>
                    <option value="mssql">Microsoft Server SQL</option>
                    {{ /* eslint-enable vue-i18n/no-raw-text */ }}
                  </select>
                  <span class="icon is-small is-left">
                    <i class="fas fa-database"></i>
                  </span>
                </div>
              </div>
              <p v-if="errors.db_type" class="help">
                {{ errors.db_type.errorKey }}
              </p>
            </div>

            <transition-group name="fade">
              <div v-if="form.db_type !== 'sqlite'" key="not_sqlite">
                <div class="field">
                  <label for="db_user" class="label">
                    {{ $t('pages.install.db_host') }}
                  </label>
                  <div class="control has-icons-left">
                    <input
                      id="db_host"
                      v-model="form.db_host"
                      type="text"
                      name="db_host"
                      class="input"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-server"></i>
                    </span>
                  </div>
                  <p v-if="errors.db_host" class="help">
                    {{ errors.db_host.errorKey }}
                  </p>
                </div>

                <div class="field">
                  <label for="db_user" class="label">
                    {{ $t('pages.install.db_user') }}
                  </label>
                  <div class="control has-icons-left">
                    <input
                      id="db_user"
                      v-model="form.db_user"
                      type="text"
                      name="db_user"
                      class="input"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <p v-if="errors.db_user" class="help">
                    {{ errors.db_user.errorKey }}
                  </p>
                </div>

                <div class="field">
                  <div class="label" for="db_password">
                    {{ $t('pages.install.db_password') }}
                  </div>
                  <div class="control has-icons-left">
                    <input
                      id="db_password"
                      v-model="form.db_password"
                      type="password"
                      name="db_password"
                      class="input"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
                  <p v-if="errors.db_password" class="help">
                    {{ errors.db_password.errorKey }}
                  </p>
                </div>
              </div>
            </transition-group>
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <button
            type="submit"
            class="button is-primary is-rounded is-inverted is-outlined"
          >
            <span class="icon is-left">
              <i class="fas fa-cogs"></i>
            </span>
            <span>
              {{ $t('pages.install.install_btn') }}
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

interface ValidationError {
  [keys: string]: {
    message: string
    errorKey: string
  }
}

@Component
export default class Install extends Vue {
  loading() {
    return {
      color: 'white',
    }
  }

  asyncData({ app }: Context) {
    return {
      availableLocales: app.i18n.locales,
      currentLocale: app.i18n.locale,
    }
  }

  form = {
    admin_name: '',
    admin_password: '',
    admin_confirmation: '',
    db_name: '',
    db_type: 'sqlite',
    db_host: '',
    db_user: '',
    db_password: '',
    language: 'en',
  }

  errors: ValidationError = {}

  install() {
    this.$axios
      .post('/api/config/install', this.form)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('test', error, error.response)

        switch (error.response.status) {
          case 400:
            this.errors = Object.assign(
              {},
              this.errors,
              error.response.data.errors
            )
        }
      })
  }
}
</script>

<style lang="scss" scoped>
#install {
  height: 100vh;
  overflow-y: auto;

  .title,
  .subtitle,
  .label,
  p {
    color: white;
  }

  .section .columns {
    justify-content: center;
  }
}
</style>

<style lang="scss">
html,
body {
  overflow: auto;
}
</style>
