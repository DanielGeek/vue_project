import { shallowMount } from '@vue/test-utils'
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

  test('value by default should have 100 in p', () => {
    const wrapper = shallowMount( Counter );

    // const pTags = wrapper.findAll('p')
    const value = wrapper.find('[data-testid="counter"]').text()

    // expect( pTags[1].text() ).toBe('100')
    expect( value ).toBe('100')
  })
})