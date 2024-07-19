import SectionTitle from '@/SectionTitle'
import IntroPerson from '@/IntroPerson'
import ScrollAnimation from 'react-animate-on-scroll'

const Message = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-[90%] m-auto py-5">
        {/* Title */}
        <SectionTitle icon="faMessage" name="Message" />
        {/* Contents1 */}
        <div className="mt-[30px] md:w-1/2 m-auto">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <p className="text-[18px] text-black">
              謹啓 盛夏の候 皆様には益々ご清祥のことと お慶び申し上げます
              <br />
              <br />
              私たちは2023年8月21日に入籍し
              <br />
              ふたりで新生活を始めております
              <br />
              つきましては日頃よりお世話になっている皆様に
              <br />
              ご挨拶およびささやかな披露宴を催したいと存じます
              <br />
              <br />
              ご多用のところ誠に恐縮ではございますが
              <br />
              ぜひご出席くださいますよう心よりご案内申し上げます
            </p>
          </ScrollAnimation>
        </div>
        {/* Contents2 */}
        <div className="mt-[40px] flex flex-col md:flex-row">
          {/*  */}
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <IntroPerson type="groom" name="Hiroaki" />
          </ScrollAnimation>
          {/*  */}
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <IntroPerson type="bride" name="Haruka" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default Message
