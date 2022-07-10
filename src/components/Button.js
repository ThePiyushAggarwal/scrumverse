function Button({ children, className, border }) {
  return (
    <div
      className={`uppercase px-3 py-1 border-4 rounded-full border-${
        border || 'transparent'
      } hover:cursor-pointer hover:border-white ${className}`}
    >
      {children}
    </div>
  )
}
export default Button
