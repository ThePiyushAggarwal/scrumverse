import Button from '../Button'
import Timer from './Timer'

function Content() {
  return (
    <div className='flex flex-col flex-1 text-white items-start'>
      <h4 className='rounded-full bg-white opacity-90 px-5 py-1 mt-16 uppercase font-semibold text-[rgb(153,33,232)]'>
        #Most trusted certifications by the industry
      </h4>
      <h1 className='text-4xl font-semibold text-white capitalize mt-5'>
        Unleash your SCRUM Skills,
        <br /> Grab more attention to résumé
      </h1>
      <Button className='mt-5' border='white'>
        Enroll Now
      </Button>
      <Timer className='mt-20' />
    </div>
  )
}
export default Content
