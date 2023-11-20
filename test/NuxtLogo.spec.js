import { mount } from '@vue/test-utils'
import VuetifyLogo from '@/components/VuetifyLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(VuetifyLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
