import SectionTitle from '@/SectionTitle'
import SubSectionTitle from '@/SubSectionTitle'
import CommentWithIcon from '@/CommentWirthIcon'
import ScrollAnimation from 'react-animate-on-scroll'

const EventsInfo = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-[80%] m-auto py-5">
        {/* Title */}
        <SectionTitle icon="faCalendarDays" name="EventsInfo" />
        <div className="md:flex">
          <div className="md:w-1/2">
            {/* Contents1 */}
            <SubSectionTitle icon="faCalendarDays" name="Schedule" />
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="mt-5 text-center">
                <p className="text-2xl text-black font-bold">
                  2023/10/07 (Sat)
                </p>
                <div className="bg-purple-500 mt-1 h-[2px] w-full"></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="mt-5 flex flex-col gap-y-3">
                {/*  */}
                <div className="w-full text-center">
                  <h3 className="text-2xl">受付</h3>
                  <p className="text-xl">
                    開始時刻: <span className="text-purple-500">15:15</span>
                  </p>
                </div>
                <div className="w-full text-center">
                  <h3 className="text-2xl">挙式</h3>
                  <p className="text-xl">
                    開始時刻: <span className="text-purple-500">16:15</span>
                  </p>
                </div>
                {/*  */}
                <div className="w-full text-center">
                  <h3 className="text-2xl">披露宴</h3>
                  <p className="text-xl">
                    開始時間: <span className="text-purple-500">17:00</span>
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <CommentWithIcon
              type="groom"
              comment="挙式開始の15分前にはお越しください。披露宴の終了予定は、19:30です。"
              img="/hiroki-1.png"
            />
          </div>
          <div className="md:w-1/2">
            {/* Contents2 */}
            <SubSectionTitle icon="faCalendarDays" name="Place" />
            <div className="mt-3 text-center">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <p className="text-2xl text-black">アンジュールハウス熊本</p>
                <p>
                  〒861-8002
                  <br />
                  熊本県熊本市北区弓削２丁目１２−１１
                </p>
              </ScrollAnimation>
              <div className="w-[80%] h-[300px] m-auto mt-[50px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.6985306899055!2d130.77509461172983!3d32.853232879976275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f0135eb22fd5%3A0x5d8064501baa7a39!2z44Ki44Oz44K444Ol44O844Or44OP44Km44K5!5e0!3m2!1sja!2sjp!4v1687540993790!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  // style="border:0;"
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <CommentWithIcon
              type="bride"
              comment="式場はJR豊肥本線 武蔵塚駅から徒歩5分になります。本数はあまり多くありませんので、ご注意ください。"
              img="/nao-1.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsInfo
