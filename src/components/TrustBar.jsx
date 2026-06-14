/** DLDS 신뢰바 — items: string[] (각 항목 앞에 브랜드 체크). */
export function TrustBar({ items = [], className = '', ...rest }) {
  return (
    <div className={['dlds-trustbar', className].filter(Boolean).join(' ')} {...rest}>
      {items.map((t, i) => (
        <div key={i} className="dlds-trustbar__item">
          <span className="dlds-trustbar__check">✓</span>{t}
        </div>
      ))}
    </div>
  )
}
