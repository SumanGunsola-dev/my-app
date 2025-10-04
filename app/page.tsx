import { AuroraText } from "@/components/ui/aurora-text"
import { BlurFade } from "@/components/ui/blur-fade"
import { NavButton } from "@/components/NavbarButton"
import PopUpButton from "@/components/PopUpButton"
import { Android } from "@/components/ui/android"

export default function Home() {

  return (


    <BlurFade delay={0.25} >
      <NavButton />
      <div className="nata flex  min-h-full pb-14 flex-col md:flex-row sm:gap-36  justify-center  items-center ">
        <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>

        <div id="header" className="space-y-10 max-w-2xl p-5">
          <h1 className="font-bold text-5xl">
            Call <AuroraText>Ai Receptionist</AuroraText>
          </h1>
          <h2 className="text-5xl font-medium">
            Book your doctor appointment in seconds
          </h2>
          <p className="text-lg font-light">
            No waiting, no hassle. AI Receptionist connects you directly with your doctor&apos;s office,
            helps you schedule calls, and sends reminders — all through a quick, natural conversation.
          </p>

          <div className="space-y-2">
            <PopUpButton />
            <p className="text-sm text-gray-500">
              Try calling the phone number above to schedule call
            </p>
          </div>
        </div>

        <div className="md:min-w-[260px] max-w-[270px]  mt-10">
          <Android className="size-full" videoSrc="/video.mp4" />
        </div>

      </div>
    </BlurFade>

  );
}
