import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

  // test('It must match the snapshot', () => {

  //   const wrapper = shallowMount( Counter )

  //   expect(wrapper.html()).toMatchSnapshot()
  // })

  test('h2 should have the default value counter', () => {

    const wrapper = shallowMount( Counter );

    expect( wrapper.find('h2').exists() ).toBeTruthy()

    const h2Value = wrapper.find('h2').text()

    expect( h2Value ).toBe('Counter')
  })
})