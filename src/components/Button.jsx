/** DLDS 버튼. variant: primary | ghost | kakao. size: 'sm' 이면 pill 작은 버튼. */
export function Button({ variant = 'primary', size, className = '', children, ...rest }) {
  const cls = ['dlds-btn', `dlds-btn--${variant}`, size === 'sm' && 'dlds-btn--sm', className]
    .filter(Boolean).join(' ')
  return <button className={cls} {...rest}>{children}</button>
}
