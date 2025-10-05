import { BlurFade } from "@/components/ui/blur-fade"
import { NavButton } from "@/components/NavbarButton"
import PopUpButton from "@/components/PopUpButton"
import user from "../public/images(3).jpg"
import battery from '../public/battery.svg'
import network from '../public/network.svg'
import Image from "next/image"
import { AnimatedList } from "@/components/ui/animated-list"
import { BorderBeam } from "@/components/ui/border-beam"
import robott from "../public/robot.svg"
import signal1 from "../public/wifi-svgrepo-com.svg"
export default function Home() {

  return (


    <BlurFade delay={0.25} >
      <NavButton />
      <div className="nata flex  min-h-fit  flex-col md:flex-row sm:gap-36  justify-center  items-center border-purple-200 border-[2px] rounded-xl sm:m-4 m-1  pt-10 px-10">
        <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>

        <div id="header" className="space-y-10 max-w-2xl p-5">
          <h1 className="font-bold text-5xl">
            Meet Cally AI
          </h1>
          <h2 className="text-5xl font-medium">
            Book your doctor appointment in seconds
          </h2>
          <p className="text-lg font-medium">
            {` No waiting, no hassle. AI Receptionist connects you directly with your doctor's office,
            helps you schedule calls, and sends reminders — all through a quick, natural conversation.`}
          </p>

          <div className="space-y-2">
            <PopUpButton />
            <p className="text-sm text-gray-500 font-medium">
              Try calling the phone number above to schedule call
            </p>
          </div>
        </div>

        <div className="flex justify-center  max-h-[580px] max-w-[320px] overflow-hidden sm:mt-3 mt-12">
          <div className="rounded-4xl min-h-[600px] border mt-4 min-w-[318px]  bg-black/1 backdrop-blur-md relative">
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-blue-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-blue-500 to-transparent"
            />
            <div className="w-full flex flex-row items-center justify-around pt-2 px-3 mt-0.5 ">
              <span className="font-medium ml-2">9:41</span>
              <span className="w-[74px] h-5  rounded-2xl bg-gray-800/90 ml-12"></span>
              <div className="flex  items-center gap-2 justify-end ml-4">

                <span>
                  <Image src={network} alt="network" className="w-4" />
                </span>
                <span> <Image src={signal1} alt="wifi" className="w-5" /> </span>
                <span className="">
                  <Image src={battery} alt="battery" className="w-7" />
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-24 space-y-3">
              <span className="font-semibold text-gray-600">+1 (864) 479-8961</span>
              <span className="text-3xl font-extrabold">Cally AI</span>
            </div>

            <div className="flex flex-col  items-center justify-center mt-16 space-y-3 px-5 font-bold text-sm ">
              <AnimatedList delay={1000} className="max-w-64 flex flex-col-reverse space-y-2 ">
                <div className=" shadow-sm px-2 py-1 mr-4 rounded-lg bg-gray-50/90 shadow-gray-300">
                  <div className="flex gap-2">
                    <Image src={robott} alt="robot1" className="w-4" /><span className="font-extrabold">Cally Ai Agent</span>
                  </div>
                  <span className="text-gray-600">
                    Hey there ,This is Cally How may i help you ?
                  </span>
                </div>
                <div className="ml-7 shadow-sm px-2 py-1 rounded-xl bg-purple-400/50 shadow-pink-300 ">
                  <Image src={user} alt="user" className="w-5 h-5 rounded-3xl" />

                  <span className="text-gray-800">I would like to schedule an appointment with Dr. Smith for next week.
                  </span>
                </div>
                <div className="shadow-sm px-2 py-1 mr-4 rounded-lg bg-gray-50/90 shadow-gray-300">
                  <div className="flex gap-2">
                    <Image src={robott} alt="robot1" className="w-4" /><span className="font-extrabold">Cally Ai Agent</span>
                  </div>
                  <span className="text-gray-600">Sure! What day and time works best for you?</span>
                </div>
              </AnimatedList>
            </div>
          </div>

        </div>
      </div>
    </BlurFade>

  );
}
