import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calc', () => {
  const display = ref("0")
  const appendNumber = (num) => {
    display.value = display.value === "0" ? String(num) : display.value + String(num)
  }
  const calculate = () => {
    display.value = String(eval(display.value))
  }
  
  const clearInput = () => {
    display.value = "0"
  }

  return { display, appendNumber, calculate, clearInput }
})
