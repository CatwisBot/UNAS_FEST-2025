import { missions } from "@/constants/About/VM";
import Slider from "@/components/ui/slider";

export default function VisiMission() {
  return (
    <main className="bg-gradient-to-b from-[#040D30] to-[#000022] from-0% to-100%">
      <div className="pt-10 sm:pt-15 md:pt-30 pb-20 w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4">
        <h1 className="text-center text-xl sm:text-2xl md:text-6xl font-bold uppercase">
          our vision
        </h1>
        <p className="mt-2 sm:mt-4 md:mt-8 px-6 text-center text-base font-medium md:text-xl lg:text-3xl">
          <i>
            &quot;Being a forum for coaching and training as well as a benchmark
            (barometer) in terms of improving the quality of students in committee
            and organizational activities at the Universitas Nasional.&quot;
          </i>
        </p>
        <div className="mt-16">
          <h1 className="text-center text-xl sm:text-2xl md:text-6xl font-bold uppercase">
            our missions
          </h1>
        </div>
        <div className="pt-3 sm:pt-5 md:pt-10 pb-10 overflow-hidden">
          <Slider props={missions} />
        </div>
      </div>
    </main>
  );
}