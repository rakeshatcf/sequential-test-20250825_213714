// Common type definitions

export interface User {
  id: string
  name: string
  email: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  error?: string
}

export type Theme = 'light' | 'dark'
export type Status = 'idle' | 'loading' | 'success' | 'error'
