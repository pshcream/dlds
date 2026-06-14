/** DLDS 카드(박스). elevation: 'flat'(기본) | 'soft'. */
export function Card({ elevation = 'flat', className = '', children, ...rest }) {
  const cls = ['dlds-card', elevation === 'soft' && 'dlds-card--soft', className]
    .filter(Boolean).join(' ')
  return <div className={cls} {...rest}>{children}</div>
}
