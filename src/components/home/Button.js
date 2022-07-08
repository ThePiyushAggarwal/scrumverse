function Button({ children, className }) {
  return (
    <div
      className={`uppercase px-3 py-1 border-4 border-transparent rounded-full hover:border-inherit hover:cursor-pointer ${className}`}
    >
      {children}
    </div>
  )
}
export default Button
