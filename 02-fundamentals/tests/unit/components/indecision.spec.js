import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'

describe('Indecision component', () => {

  let wrapper
  let clgSpy

  global.fetch = jest.fn()

  beforeEach( () => {
    wrapper = shallowMount( Indecision )

    clgSpy = jest.spyOn( console, 'log' )

    jest.clearAllMocks()

  })

  test('must match the snapshot', () => {
    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('Writing to input should not trigger anything (console.log)', async() => {

    const getAndswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')

    const input = wrapper.find('input')
    await input.setValue('Hello World')

    expect( clgSpy ).toHaveBeenCalledTimes(1)
    expect( getAndswerSpy ).not.toHaveBeenCalled()

  })

  test('write the symbol of "?" must trigger the getAnswer', async() => {

    const getAndswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')

    const input = wrapper.find('input')
    await input.setValue('Hello World?')

    expect( clgSpy ).toHaveBeenCalledTimes(3)
    expect( getAndswerSpy ).toHaveBeenCalled()
  })

  test('tests in getAnswer failed in the api', () => {

  })

})