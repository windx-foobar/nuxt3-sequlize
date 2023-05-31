import type { Options } from 'sequelize'

export interface NuxtSequelizeOptions extends Options {
  logging?: boolean
  modelsGlob: string
}
