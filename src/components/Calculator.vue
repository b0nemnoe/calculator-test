<template>
    <h1>Számológép</h1>
    <div class="calculator">
    <div class="display">
      <input v-model="calc.display" class="input-field" placeholder="0" type="text" disabled />
    </div>
    <div class="buttons">
      <button @click="calc.appendNumber(1)">1</button>
      <button @click="calc.appendNumber(2)">2</button>
      <button class="harom" @click="calc.appendNumber(3)">3</button>
      <button @click="calc.appendNumber('+')">+</button>

      <button @click="calc.appendNumber(4)">4</button>
      <button @click="calc.appendNumber(5)">5</button>
      <button @click="calc.appendNumber(6)">6</button>
      <button @click="calc.appendNumber('-')">-</button>

      <button @click="calc.appendNumber(7)">7</button>
      <button @click="calc.appendNumber(8)">8</button>
      <button @click="calc.appendNumber(9)">9</button>
      <button @click="calc.appendNumber('*')">*</button>

      <button @click="calc.appendNumber(0)">0</button>
      <button @click="calc.clearInput()">C</button>
      <button @click="calc.calculate()">=</button>
      <button @click="calc.appendNumber('/')">/</button>
    </div>
  </div>
</template>
<script setup>
import {useCalculatorStore} from '@/stores/calculator'
import {ref} from 'vue'

const calc = useCalculatorStore()

</script>

<style scoped>
h1{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
.calculator {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.display {
  margin-bottom: 20px;
  margin-right: 20px;
}

.input-field {
  width: 100%;
  padding: 10px;
  text-align: right;
  font-size: 2rem;
  border: none;
  background-color: #e0e0e0;
  border-radius: 5px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 20px;
  font-size: 1.5rem;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e0e0e0;
}
</style>