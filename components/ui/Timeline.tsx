import { TimelineItem } from "@/lib/types/Activities/Timeline";

interface InfoCardProps extends TimelineItem {
  index: number;
}

export default function InfoCard({
  month,
  day,
  year,
  title,
  index,
}: InfoCardProps) {
  const isEven = index % 2 === 0;

  const borderClasses = isEven
    ? "border-l border-white pl-3 md:border-r md:border-l-0 md:pl-0 md:pr-3"
    : "border-l border-white pl-3 md:border-l md:pr-0 md:pl-3";

  return (
    <div
      className={`
        relative rounded-xl p-3 bg-[#40298A] border border-[#54279E] shadow-lg flex
        flex-row
        w-full max-w-[90%] mx-auto      
        sm:max-w-[320px] lg:max-w-[400px]              
        md:w-[300px] md:h-[110px]       
        lg:w-[600px] lg:h-[120px]      
        md:${isEven ? "flex-row-reverse" : "flex-row"}
      `}
    >
      <div
        className={`
          flex flex-col justify-center w-1/3 text-center
          ${isEven ? "md:pl-3" : "md:pr-3"}
        `}
      >
        <span className="text-[9px] md:text-[11px] font-bold tracking-widest text-white">
          {month}
        </span>
        <span className="text-xl md:text-2xl font-extrabold text-white leading-none">
          {day}
        </span>
        <span className="text-xs md:text-sm font-medium text-white">
          {year}
        </span>
      </div>

      <div
        className={`flex items-center justify-center w-2/3 ${borderClasses}`}
      >
        <p className="text-xs md:text-sm font-semibold text-white text-center leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
}
