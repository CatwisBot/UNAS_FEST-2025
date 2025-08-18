import { missions } from "@/constants/About/VM";
import Slider from "@/components/ui/slider";

export default function VisiMission() {
  return (
    <div className="bg-gradient-to-b from-[#000C29] to-[#0E2C57] pb-5 md:pb-10">
      <h1 className="text-center text-4xl font-semibold uppercase">
        our vision
      </h1>
      <p className="mt-8 px-6 text-center text-base font-medium md:text-xl lg:text-3xl">
        <i>
          &quot;Being a forum for coaching and training as well as a benchmark
          (barometer) in terms of improving the quality of students in committee
          and organizational activities at the Universitas Nasional.&quot;
        </i>
      </p>
      <div className="mt-16">
        <h1 className="text-center text-4xl font-semibold uppercase">
          our missions
        </h1>
      </div>
      <div className="container mt-10 w-full px-4 lg:px-12">
        <Slider props={missions} />
      </div>
    </div>
  );
}