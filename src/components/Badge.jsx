/** DLDS 배지(상태/라벨 pill, 비클릭). */
export function Badge({ className = '', children, ...rest }) {
  return <span className={['dlds-badge', className].filter(Boolean).join(' ')} {...rest}>{children}</span>
}
