import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/nuxt-sequelize', import.meta.url)),
  })

  it('stub', () => {
    expect(1).toBe(1)
  })
})
