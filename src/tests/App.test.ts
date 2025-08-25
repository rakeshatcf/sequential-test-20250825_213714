import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Vue 3 SPA')
  })

  it('contains HelloWorld component', () => {
    const wrapper = mount(App)
    expect(wrapper.findComponent({ name: 'HelloWorld' })).toBeTruthy()
  })

  it('contains Counter component', () => {
    const wrapper = mount(App)
    expect(wrapper.findComponent({ name: 'Counter' })).toBeTruthy()
  })
})