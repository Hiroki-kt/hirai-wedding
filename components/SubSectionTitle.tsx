import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

class SubSectionTitleProps {
  icon?: string
  color?: string
  name?: string
}

const SubSectionTitle = (props: SubSectionTitleProps) => {
  let titleIcon, iconColor
  console.log(props.icon)
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
  }

  return (
    <div className="pt-[100px] flex justify-center">
      <FontAwesomeIcon
        icon={titleIcon}
        className={`h-[42px] ${iconColor}`}
        style={{ height: '42px' }}
      />
      <h1 className="text-center text-[30px] text-black font-extrabold ml-2">
        {props.name}
      </h1>
    </div>
  )
}
export default SubSectionTitle
