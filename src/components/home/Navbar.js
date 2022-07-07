function Navbar() {
  return (
    <div className='h-1/6 flex justify-around'>
      {/* Logo & Brand Name */}
      <div className='flex justify-center items-center'>
        <img src='./logo.png' alt='brand logo' className='h-12 w-12' />
        <h3 className='text-xl text-white font-bold pl-2'>SCRUMVERSE</h3>
      </div>
      <div className='flex justify-center items-center'>
        <button className='uppercase'>Home</button>
        <button className='uppercase'>About</button>
        <button className='uppercase'>Courses</button>
        <button className='uppercase'>Blogs</button>
      </div>

      {/* Navigation Bar */}
      {/* Sign In */}
    </div>
  )
}
export default Navbar
