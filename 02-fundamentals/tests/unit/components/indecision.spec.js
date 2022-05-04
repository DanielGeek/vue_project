import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'

describe('Indecision component', () => {

  let wrapper;

  beforeEach( () => {
    wrapper = shallowMount( Indecision )
  })

  test('must match the snapshot', () => {
    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('Writing to input should not trigger anything (console.log)', () => {

  })

  test('write the symbol of "?" must trigger the fetch', () => {

  })

  test('tests in getAnswer failed in the api', () => {

  })

})