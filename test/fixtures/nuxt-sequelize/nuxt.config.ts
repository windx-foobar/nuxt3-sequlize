import NuxtSequelizeModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    // @ts-ignore
    NuxtSequelizeModule
  ],
  sequelize: {
    modelsGlob: './server/models/*'
  }
})
