import Image from 'next/image'

class CommentWithIconProps {
  type?: string
  comment?: string
  img = ''
}

const CommentWithIcon = (props: CommentWithIconProps) => {
  const bgColor = props.type === 'groom' ? 'bg-blue-200' : 'bg-pink-200'
  return (
    <div className="w-full flex my-8">
      <div className={`w-2/3 ${bgColor} rounded-2xl p-2`}>
        <p className="text-[18px] text-black xl:p-3">{props.comment}</p>
      </div>
      <div className="w-1/3 max-w-xs">
        <Image src={props.img} width={500} height={500} alt="Icon image" />
      </div>
    </div>
  )
}

export default CommentWithIcon
