import type { ModuleDefinition, Nuxt } from 'nuxt/schema'
import type { ModuleOptions } from '../module'

import fs from 'node:fs'
import fsp from 'node:fs/promises'
import { globby } from 'globby'
import { resolve, dirname } from 'pathe'
import { useLogger } from '@nuxt/kit'
import { LOGGER_TAG } from './constants'

function createSequelizeManager(options: ModuleOptions, nuxt: Nuxt) {
  const checkModelFolderExist = async () => {
    if (!options.modelsGlob) throw new Error('nuxt.config.ts > sequelize.modelsGlob: can\'t be empty')

    const resolvedModelsGlob = resolve(nuxt.options.rootDir, options.modelsGlob)
    const modelsDir = dirname(resolvedModelsGlob)
    if (!fs.existsSync(modelsDir)) throw new Error('Models directory should be exist')
  }

  return {
    checkModelFolderExist
  }
}

export const setup: ModuleDefinition<ModuleOptions>['setup'] = async (options, nuxt) => {
  const logger = useLogger(LOGGER_TAG)

  logger.info('Start setup module')

  const sequelizeManager = createSequelizeManager(options, nuxt)

  try {
    await sequelizeManager.checkModelFolderExist()
  } catch (error) {
    logger.error(error)
  }
}
