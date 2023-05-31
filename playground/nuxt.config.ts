import type { NuxtConfig } from '@nuxt/schema'
import type { NuxtConfig as _NuxtConfig } from 'nuxt/schema'


export default defineNuxtConfig(<NuxtConfig & _NuxtConfig>{
  modules: ['../src/module'],
  sequelize: {
    modelsGlob: './server/models/*.ts'
  },
  nitro: {
    devServer: {
      watch: ['../src/module']
    },
    unenv: {
      alias: {
        consola: 'consola'
      }
    }
  }
})
