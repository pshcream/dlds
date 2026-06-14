/** DLDS 칩(선택형 pill). selected=true 면 브랜드 보더 강조. */
export function Chip({ selected = false, className = '', children, ...rest }) {
  const cls = ['dlds-chip', selected && 'dlds-chip--on', className].filter(Boolean).join(' ')
  return <button type="button" className={cls} {...rest}>{children}</button>
}
