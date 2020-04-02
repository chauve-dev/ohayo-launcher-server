<template>
  <div id="install" class="has-background-primary">
    <div class="section">
      <h1 class="title is-1 has-text-centered">Install</h1>
      <form>
        <div class="columns">
          <div class="column is-5 is-12-mobile">
            <h3 class="subtitle is-3 has-text-weight-light">Admin account</h3>
            <div class="field">
              <label for="admin_name" class="label">Admin name</label>
              <div class="control has-icons-left">
                <input
                  id="admin_name"
                  type="text"
                  name="admin_name"
                  class="input"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <div class="label" for="admin_password">Admin Password</div>
              <div class="control has-icons-left">
                <input
                  id="admin_password"
                  type="password"
                  name="admin_password"
                  class="input"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <div class="label" for="admin_confirmation">
                Admin Confirmation
              </div>
              <div class="control has-icons-left">
                <input
                  id="admin_confirmation"
                  type="password"
                  name="admin_confirmation"
                  class="input"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
          </div>

          <div class="is-divider-vertical is-hidden-mobile"></div>

          <div class="column is-5 is-12-mobile">
            <h3 class="subtitle is-3 has-text-weight-light">Database</h3>
            <div class="field">
              <label for="db_name" class="label">Database name</label>
              <div class="control has-icons-left">
                <input id="db_name" type="text" name="db_name" class="input" />
                <span class="icon is-small is-left">
                  <i class="fas fa-database"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label for="db_type" class="label">Database Type</label>
              <div class="control has-icons-left">
                <div class="select is-fullwidth">
                  <select id="db_type" v-model="form.db_type" name="db_type">
                    <option value="sqlite">SQLite</option>
                    <option value="mysql">MySQL/MariaDB</option>
                    <option value="psql">PostgreSQL</option>
                    <option value="mssql">Microsoft Server SQL</option>
                  </select>
                  <span class="icon is-small is-left">
                    <i class="fas fa-database"></i>
                  </span>
                </div>
              </div>
            </div>

            <transition-group name="fade">
              <div v-if="form.db_type !== 'sqlite'" key="not_sqlite">
                <div class="field">
                  <label for="db_user" class="label">Database host</label>
                  <div class="control has-icons-left">
                    <input
                      id="db_host"
                      type="text"
                      name="db_host"
                      class="input"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-server"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label for="db_user" class="label">Database user</label>
                  <div class="control has-icons-left">
                    <input
                      id="db_user"
                      type="text"
                      name="db_user"
                      class="input"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <div class="label" for="db_password">
                    Database Password
                  </div>
                  <div class="control has-icons-left">
                    <input
                      id="db_password"
                      type="password"
                      name="db_password"
                      class="input"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
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
              Install
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Install extends Vue {
  form = {
    db_type: 'sqlite',
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
