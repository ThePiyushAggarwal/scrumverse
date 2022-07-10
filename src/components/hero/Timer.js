import Countdown from 'react-countdown'

function TimerDiv({ entity, entityName }) {
  return (
    <div className='bg-[rgba(255,255,255,0.1)] w-28 h-32 text-7xl rounded-3xl font-semibold flex flex-col justify-center items-center'>
      <div>
        {entity.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </div>
      <div className='text-base text-[rgba(255,255,255,0.7)]'>{entityName}</div>
    </div>
  )
}

function Timer({ className }) {
  // Takes out the values from the countdown component for modification
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <>
        <TimerDiv entity={hours} entityName='Hrs.' />
        <TimerDiv entity={minutes} entityName='Mins.' />
        <TimerDiv entity={seconds} entityName='Secs.' />
      </>
    )
  }

  return (
    <div className={`${className} w-96`}>
      <h6 className='text-sm text-center'>
        <span className='font-semibold'>10% OFF on all courses* |</span> Offer
        Valid For
      </h6>
      <div className='w-full'>
        <div className='w-1/5 inline-block'></div>
        <div className='w-1/5 inline-block'></div>
        <div className='border-t-2 w-1/5 inline-block'></div>
        <div className='w-1/5 inline-block'></div>
        <div className='w-1/5 inline-block'></div>
      </div>
      <div className='w-full flex justify-between mt-4'>
        <Countdown date={Date.now() + 10722000} renderer={renderer} />
      </div>
    </div>
  )
}
export default Timer
