import LogoUnasFest from "@/public/icons/About/unasfest-icon-logo.png";
import Image from "next/image";

const ourLogo = () => {
  return (
    <section className="bg-gradient-to-b from-[#1A1268] to-[#1B1368] from-0% to-100% text-white w-full pt-12">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 items-center justify-center gap-6 md:gap-8">
          <div className="flex-shrink-0 border-1 border-[#B9B9B9]/20 bg-gradient-to-br from-[#474747]/20 via-[#FFFFFF]/20 to-[#474747]/20 from-0% via-49% to-100% px-3 py-3 rounded-xl">
            <Image
              src={LogoUnasFest}
              alt="UNASFEST Logo"
              width={200}
              height={200}
              className="w-48 h-48 object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-white font-extrabold text-xl sm:text-2xl text-center md:text-left mb-2">
              LOGO DEFINITION & DETAILS
            </h3>
            <p className="text-white-100 text-sm leading-relaxed text-justify [text-justify:inter-word] [word-spacing:-0.1em]">
              Sawo Manila fruit and leaves represent the location of UNAS FEST.
              Sawo manila is also a tree of 1000 benefits, where every part of
              the tree can be utilized. This illustrates that the UNAS FEST
              committee consists of students from all study programs at the
              Universitas Nasional. The placement of 3 leaves and 1 sawo manila
              fruit forms a star formation in the center, depicting high hopes
              and shine.
            </p>
          </div>
        </div>
    </section>
  );
};

export default ourLogo;