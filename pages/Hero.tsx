import HeroFaceImage from '@/HeroFaceImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll'

const Hero = () => {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center">
      <div className="w-full">
        <div className="md:flex md:w-4/5 md:m-auto md:space-x-2">
          <HeroFaceImage heroFace="/hiroki-1.png" name="Hiroki" type="Groom" />
          <h1 className="text-[60px] text-center font-extrabold">&</h1>
          <HeroFaceImage heroFace="/nao-1.png" name="Nao" type="Bride" />
        </div>
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          animateOnce={true}
        >
          <h1 className="text-[60px] text-black text-center font-extrabold lg:text-[96px]">
            Wedding
            <br />
            Invitation
            <br />
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" />
          </h1>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Hero
