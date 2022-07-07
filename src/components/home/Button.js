function Button({ children, className }) {
  return (
    <div
      className={`uppercase px-3 py-1 mx-3 border-4 border-transparent rounded-full hover:border-white hover:cursor-pointer ${className}`}
    >
      {children}
    </div>
  )
}
export default Button
