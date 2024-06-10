import SectionTitle from '@/SectionTitle'
import IntroPerson from '@/IntroPerson'
import ScrollAnimation from 'react-animate-on-scroll'

const Message = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-[80%] m-auto py-5">
        {/* Title */}
        <SectionTitle icon="faMessage" name="Message" />
        {/* Contents1 */}
        <div className="mt-[30px] md:w-1/2 m-auto">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <p className="text-[18px] text-black">
              皆様いかがお過ごしでしょうか?
              <br />
              <br />
              このたび結婚式を執り行うこととなりました <br />
              日頃お世話になっておりますみなさまに
              私どもの門出をお見守りいただきたくささやかながら小宴を催したく存じます
              <br />
              <br />
              ご多用中誠に恐縮ではございますが
              ぜひご出席いただきたくご案内申し上げます
            </p>
          </ScrollAnimation>
        </div>
        {/* Contents2 */}
        <div className="mt-[40px] flex flex-col md:flex-row">
          {/*  */}
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <IntroPerson type="groom" name="Hiroki" />
          </ScrollAnimation>
          {/*  */}
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <IntroPerson type="bride" name="Nao" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default Message
