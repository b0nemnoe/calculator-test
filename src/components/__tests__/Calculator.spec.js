import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import Calculator from '../Calculator.vue'
import { useCalculatorStore } from '@/stores/calculator'
import { createPinia, setActivePinia } from 'pinia'

describe('Számológép', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Tartalom ellenőrzése', () => {
    const wrapper = mount(Calculator)
    expect(wrapper.text()).toContain('Számológép')
  })

  it('Kijelző kezdetben 0', () =>{
    const calc = useCalculatorStore()
    expect(calc.display).toBe("0")
  })

  it('Jól számol?', () => {
    const calc = useCalculatorStore()
    calc.display = "3+3"
    calc.calculate()
    expect(calc.display).toBe("6")
  })

  it('Jól írja a számokat?', async () => {
    
    /*const wrapper = mount(Calculator)
    const calc = useCalculatorStore()
    await wrapper.find('.harom').trigger('click')
    expect(calc.display).toBe("3")*/

    //jól irja a számokat

    const calc = useCalculatorStore()
    calc.appendNumber(1)
    expect(calc.display).toBe("1")
    calc.appendNumber(3)
    expect(calc.display).toBe("13")
  })

  it('Bevitel kattintásra', () => {
    const calc = useCalculatorStore()
    const wrapper = mount(Calculator)
    const btns = wrapper.findAll('button')
    let res = ""
    btns.forEach(b => {
      let text = b.element.innerHTML
      if(text != "=" && text != "C"){
        b.trigger('click')
        res += text
        expect(calc.display).toBe(res)}
    })
  })
  it('Törlés', () => {
    const calc = useCalculatorStore()
    const wrapper = mount(Calculator)
    calc.display = "123"
    //calc.clearInput()
    const clearBtn = wrapper.findAll('button').find(b => b.element.innerHTML == "C")
    clearBtn.trigger('click')
    expect(calc.display).toBe("0")
  })
})
