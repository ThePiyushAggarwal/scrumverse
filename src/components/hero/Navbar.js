import Button from '../Button'

function Navbar() {
  return (
    <div className='container min-h-1/5 flex flex-1 justify-between text-white font-semibold'>
      {/* Logo & Brand Name */}
      <div className='flex justify-center items-center hover:cursor-pointer'>
        <img src='./logo.png' alt='brand logo' className='h-12 w-12' />
        <h3 className='text-lg pl-2 uppercase'>Scrumverse</h3>
      </div>

      {/* Navigation Bar */}
      <div className='flex justify-center items-center gap-8'>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Courses</Button>
        <Button>Blogs</Button>
      </div>

      {/* Sign In */}
      <div className='flex justify-center items-center gap-8'>
        <Button>Login</Button>
        <Button border='white'>Sign Up</Button>
      </div>
    </div>
  )
}
export default Navbar
