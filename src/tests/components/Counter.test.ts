import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '../../components/Counter.vue'

describe('Counter', () => {
  it('renders with initial value', () => {
    const wrapper = mount(Counter, {
      props: { initialValue: 5 }
    })
    expect(wrapper.text()).toContain('Count: 5')
  })

  it('increments count when plus button clicked', async () => {
    const wrapper = mount(Counter, {
      props: { initialValue: 0 }
    })
    
    await wrapper.find('[data-test="increment"]').trigger('click')
    expect(wrapper.text()).toContain('Count: 1')
  })

  it('decrements count when minus button clicked', async () => {
    const wrapper = mount(Counter, {
      props: { initialValue: 5 }
    })
    
    await wrapper.find('[data-test="decrement"]').trigger('click')
    expect(wrapper.text()).toContain('Count: 4')
  })

  it('resets count when reset button clicked', async () => {
    const wrapper = mount(Counter, {
      props: { initialValue: 10 }
    })
    
    // Change the count first
    await wrapper.find('[data-test="increment"]').trigger('click')
    expect(wrapper.text()).toContain('Count: 11')
    
    // Then reset
    await wrapper.find('[data-test="reset"]').trigger('click')
    expect(wrapper.text()).toContain('Count: 10')
  })
})