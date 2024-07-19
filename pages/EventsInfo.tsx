import SectionTitle from '@/SectionTitle'
import SubSectionTitle from '@/SubSectionTitle'
import CommentWithIcon from '@/CommentWirthIcon'
import ScrollAnimation from 'react-animate-on-scroll'

const EventsInfo = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-[90%] m-auto py-5">
        {/* Title */}
        <SectionTitle icon="faCalendarDays" name="EventsInfo" />
        <div className="md:flex">
          <div className="md:w-1/2">
            {/* Contents1 */}
            <SubSectionTitle icon="faCalendarDays" name="Schedule" />
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="mt-5 text-center">
                <p className="text-2xl text-black font-bold">
                  2024/10/13 (Sat)
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
                    開始時刻: <span className="text-purple-500">14:30</span>
                  </p>
                </div>
                {/* <div className="w-full text-center">
                  <h3 className="text-2xl">挙式</h3>
                  <p className="text-xl">
                    開始時刻: <span className="text-purple-500">16:15</span>
                  </p>
                </div> */}
                {/*  */}
                <div className="w-full text-center">
                  <h3 className="text-2xl">披露宴</h3>
                  <p className="text-xl">
                    開始時間: <span className="text-purple-500">16:00</span>
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <CommentWithIcon
              type="groom"
              comment="15:15までにはお越しください。披露宴の終了時刻は18:20です。"
              img="/hiroaki.png"
            />
          </div>
          <div className="md:w-1/2">
            {/* Contents2 */}
            <SubSectionTitle icon="faCalendarDays" name="Place" />
            <div className="mt-3 text-center">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <p className="text-2xl text-black">デュクラス大阪</p>
                <p>
                  〒532-0034
                  <br />
                  大阪府大阪市淀川区野中北１丁目５−３４
                </p>
              </ScrollAnimation>
              <div className="w-[80%] h-[300px] m-auto mt-[50px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13115.944518675555!2d135.482407!3d34.730744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e5b67bc4754d%3A0x6eac62519dbf6244!2z44OH44Ol44Kv44Op44K55aSn6Ziq!5e0!3m2!1sja!2sjp!4v1720480609310!5m2!1sja!2sjp"
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
              comment="新大阪駅から直通のバスがありますのでご活用ください。（10分間隔での運行となります。）"
              img="/haruka.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsInfo
