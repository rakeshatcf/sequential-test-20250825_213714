import { describe, it, expect } from 'vitest'
import { useCounter } from '../../composables/useCounter'

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { count } = useCounter()
    expect(count.value).toBe(0)
  })

  it('initializes with custom value', () => {
    const { count } = useCounter(10)
    expect(count.value).toBe(10)
  })

  it('increments count', () => {
    const { count, increment } = useCounter(5)
    increment()
    expect(count.value).toBe(6)
  })

  it('decrements count', () => {
    const { count, decrement } = useCounter(5)
    decrement()
    expect(count.value).toBe(4)
  })

  it('resets count to initial value', () => {
    const { count, increment, reset } = useCounter(8)
    increment()
    increment()
    expect(count.value).toBe(10)
    
    reset()
    expect(count.value).toBe(8)
  })
})