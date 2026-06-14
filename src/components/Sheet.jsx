/** DLDS 바텀시트. open + onClose(배경 클릭). */
export function Sheet({ open, onClose, className = '', children }) {
  if (!open) return null
  return (
    <div className="dlds-sheet-mask" onClick={onClose}>
      <div className={['dlds-sheet', className].filter(Boolean).join(' ')} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
