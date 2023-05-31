import type { NuxtSequelizeOptions } from './types'

import { defineNuxtModule } from '@nuxt/kit'
import { MODULE_NAME, NUXT_CONFIG_NAME, setup } from './nuxtSequelize'

// Module options TypeScript interface definition
export interface ModuleOptions extends NuxtSequelizeOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: MODULE_NAME,
    configKey: NUXT_CONFIG_NAME
  },
  // Default configuration options of the Nuxt module
  defaults: {
    logging: false,
    modelsGlob: ''
  },
  setup
})
