class DateTimeDisplayProps {
  value?: number
  type?: string
  isDanger?: boolean
}

const DateTimeDisplay = (props: DateTimeDisplayProps) => {
  return (
    <div className={props.isDanger ? 'countdown danger' : 'countdown'}>
      <p>{props.value}</p>
      <span>{props.type}</span>
    </div>
  )
}

class ShowCounterProps {
  days = 0
  hours?: number
  minutes?: number
  seconds?: number
}

const ShowCounter = (props: ShowCounterProps) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay
          value={props.days}
          type={'Days'}
          isDanger={props.days <= 3}
        />
        <p>:</p>
        <DateTimeDisplay value={props.hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={props.minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay
          value={props.seconds}
          type={'Seconds'}
          isDanger={false}
        />
      </a>
    </div>
  )
}

export default ShowCounter
