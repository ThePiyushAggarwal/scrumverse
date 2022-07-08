import Advertisement from './Advertisement'
import Navbar from './Navbar'
import PhotoGrid from './PhotoGrid'

function MainSection() {
  return (
    <div className='min-h-screen flex flex-col main-gradient'>
      <Navbar />
      <div className='container flex flex-1'>
        <Advertisement />
        <PhotoGrid />
      </div>
    </div>
  )
}
export default MainSection
