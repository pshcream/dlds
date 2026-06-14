import { forwardRef } from 'react'

/** DLDS 입력. 표준 <input> props + ref 전달. */
export const Input = forwardRef(function Input({ className = '', ...rest }, ref) {
  return <input ref={ref} className={['dlds-input', className].filter(Boolean).join(' ')} {...rest} />
})
