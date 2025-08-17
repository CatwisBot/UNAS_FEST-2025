import Image from "next/image";
import Fotbar from "@/public/image/About/YB/FotoBersama.png";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white bg-gradient-to-b from-[#0E2C57] to-[#000F2D] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-8xl h-[65vh] md:h-[80vh] lg:h-[95vh]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[95%] md:w-[90%] lg:w-[95%] h-[65%] md:h-[80%] lg:h-[95%] rounded-xl md:rounded-2xl bg-black opacity-50" />
            </div>
          </div>
        </div>
        
        <div 
          className="relative w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto my-4 sm:my-6 md:my-8 rounded-xl md:rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${Fotbar.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            aspectRatio: '16/9' 
          }}
        >
          <div className="sr-only">
            <Image
              src={Fotbar}
              alt="Foto Bersama"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="absolute inset-0 bg-black opacity-20 rounded-xl md:rounded-2xl" />
          
          <div className="absolute inset-0 z-10 flex flex-col justify-between items-center p-4 sm:p-6 md:p-8">
            <div className="text-center w-full">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase mb-2 sm:mb-3 md:mb-4">
                Dive into the stories in our yearbook
              </h1>
            </div>
            
            <div className="text-center w-full">
              <p className="text-sm sm:text-md md:text-lg lg:text-xl leading-relaxed font-semibold text-white">
                245 Member • 4 Sectors • 12 Departements
              </p>
            </div>
            
            <div className="text-center w-full">
              <button className="rounded-lg sm:rounded-xl cursor-pointer border border-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-md font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black">
                Visit Yearbook
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}