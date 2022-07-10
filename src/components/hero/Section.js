import Content from './Content'
import Navbar from './Navbar'
import PhotoGrid from './PhotoGrid'

function Section() {
  return (
    <div className='min-h-screen flex flex-col main-gradient'>
      <Navbar />
      <div className='container flex flex-1 relative'>
        <Content />
        <PhotoGrid />
      </div>
    </div>
  )
}
export default Section
