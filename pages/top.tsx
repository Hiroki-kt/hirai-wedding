import Hero from './Hero'
import Message from './Message'
import CountDown from './CountDown'
import EventsInfo from './EventsInfo'
import RVSP from './RSVP'
import Footer from './Footer'

const Top = () => {
  return (
    <div className="w-screen h-screen">
      <Hero></Hero>
      <Message></Message>
      <EventsInfo></EventsInfo>
      <RVSP></RVSP>
      <Footer></Footer>
      <CountDown></CountDown>
    </div>
  )
}

export default Top
