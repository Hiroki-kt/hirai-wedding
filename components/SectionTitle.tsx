import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMessage,
  faCalendarDays,
  faClipboardUser,
} from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll'

class SectionTitleProps {
  icon?: string
  color?: string
  name?: string
}

const SectionTitle = (props: SectionTitleProps) => {
  let titleIcon, iconColor
  switch (props.icon) {
    default:
      titleIcon = faMessage
      iconColor = 'text-green-500'
      break
    case 'faMessage':
      titleIcon = faMessage
      iconColor = 'text-yellow-500'
      break
    case 'faCalendarDays':
      titleIcon = faCalendarDays
      iconColor = 'text-purple-500'
      break
    case 'faClipboardUser':
      titleIcon = faClipboardUser
      iconColor = 'text-green-500'
      break
  }

  return (
    <ScrollAnimation
      animateIn="flipInY"
      animateOut="flipOutY"
      animateOnce={true}
    >
      <div className="pt-[100px] flex flex-col justify-center">
        <FontAwesomeIcon
          icon={titleIcon}
          className={`h-[60px] ${iconColor}`}
          style={{ height: '60px' }}
        />
        <h1 className="text-center text-[48px] text-black font-extrabold">
          {props.name}
        </h1>
      </div>
    </ScrollAnimation>
  )
}
export default SectionTitle
