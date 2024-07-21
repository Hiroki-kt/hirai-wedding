import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll'

class HeroFaceImageProps {
  heroFace = ''
  type?: string
  name?: string
}

const HeroFaceImage = (props: HeroFaceImageProps) => {
  const color = props.type === 'Groom' ? 'text-blue-500' : 'text-pink-500'
  return (
    <div className="w-4/5 flex m-auto">
      <div className="w-1/2 animate__animated animate__shakeX">
        <Image
          src={props.heroFace}
          width={500}
          height={500}
          alt="Hero Face image"
        />
      </div>
      <div className="w-1/2 relative flex justify-center items-center md:justify-start">
        <h1
          className={`absolute text-[60px] ${color} text-right right-0 top-0 font-extrabold md:left-0 md:right-auto`}
        >
          {props.type}
        </h1>
        <h2 className="text-[32px] leading-loose pt-[30px] font-extrabold">
          {props.name}
        </h2>
      </div>
    </div>
  )
}

export default HeroFaceImage
