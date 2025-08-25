<template>
  <div class="counter">
    <h2>Counter Component</h2>
    <p>Count: {{ count }}</p>
    <div class="buttons">
      <button @click="increment" data-test="increment">+</button>
      <button @click="decrement" data-test="decrement">-</button>
      <button @click="reset" data-test="reset">Reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '../composables/useCounter'

interface Props {
  initialValue?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialValue: 0
})

const { count, increment, decrement, reset } = useCounter(props.initialValue)
</script>

<style scoped>
.counter {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
}

.buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #42b883;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background: #369870;
}
</style>