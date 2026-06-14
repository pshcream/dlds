/** DLDS 혜택 콜아웃 — 앰버 강조 숫자 + 라벨. (혜택/지원금 전용) */
export function Callout({ value, label, className = '', children, ...rest }) {
  return (
    <div className={['dlds-callout', className].filter(Boolean).join(' ')} {...rest}>
      {value != null && <div className="dlds-callout__num">{value}</div>}
      {label && <div className="dlds-callout__label">{label}</div>}
      {children}
    </div>
  )
}
