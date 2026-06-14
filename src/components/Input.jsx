/** DLDS 입력. 표준 <input> props 그대로 전달. */
export function Input({ className = '', ...rest }) {
  return <input className={['dlds-input', className].filter(Boolean).join(' ')} {...rest} />
}
