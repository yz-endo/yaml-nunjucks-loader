const path = require('path')
const { compile, sleep } = require('./helpers')

jest.setTimeout(5000)

describe('[integration] loader', () => {
  afterAll(async () => {
    await sleep(1000) // wait until webpack releases handles (avoid jest warning)
  })

  test('works with sample1.js', async () => {
    const sample1Path = path.resolve(__dirname, 'sample1.js')
    await compile(sample1Path, 'node', 'development', false)

    const sample1 = require('./output/sample1.js')
    const result = sample1({ name: 'example' })
    expect(result).toEqual({ test: { result: 'example' } })
  })

  test('works with sample2.js', async () => {
    const sample2Path = path.resolve(__dirname, 'sample2.js')
    await compile(sample2Path, 'node', 'development', false)

    const sample2 = require('./output/sample2.js')
    const result = sample2({ items: [{ name: 'foo', value: 1 }, { name: 'bar', value: 2 }] })
    expect(result).toEqual({ resultItems: [{ name: 'foo', value: 1 }, { name: 'bar', value: 2 }] })
  })
})
