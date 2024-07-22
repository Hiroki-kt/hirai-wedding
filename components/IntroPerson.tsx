import Profile from 'public/data.json'
import CommentWithIcon from '@/CommentWirthIcon'

class IntroPersonProps {
  name?: string
  age?: number
  type?: string
}

const IntroPerson = (props: IntroPersonProps) => {
  const color = props.type === 'groom' ? 'text-blue-500' : 'text-pink-500'
  const person =
    props.type === 'groom' ? Profile.Profile.Hiroki : Profile.Profile.Nao
  return (
    <div className="w-full my-6">
      <div className="text-center">
        <p className={`text-[24px] ${color} leading-3 font-semibold`}>
          {props.type}
        </p>
        <h2 className="text-[48px] text-black font-extrabold">{props.name} </h2>
      </div>
      <ul className="w-[90%] mt-2">
        <li>{person.BirthDay} 生まれ</li>
        <li>{person.Country} 出身</li>
        <li>{person.BradType}</li>
        <li>好きなお酒：{person.Myboom}</li>
      </ul>
      <CommentWithIcon
        type={props.type}
        comment={person.Comment}
        img={person.Img}
      />
    </div>
  )
}

export default IntroPerson
