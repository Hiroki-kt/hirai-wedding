import { useEffect, useState } from 'react'
import ShowCounter from './ShowCountDown'
import ExpiredNotice from './ExpiredNotice'

const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownDate])

  return getReturnValues(countDown)
}

const getReturnValues = (countDown: any) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  return [days, hours, minutes, seconds]
}

const CountdownTimer = () => {
  const [days, hours, minutes, seconds] = useCountdown('2024-10-13T16:00:00')

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    )
  }
}

export default CountdownTimer
