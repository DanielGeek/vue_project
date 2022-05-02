import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

  test('It must match the snapshot', () => {

    const wrapper = shallowMount( Counter )

    expect(wrapper.html()).toMatchSnapshot()
  })
})