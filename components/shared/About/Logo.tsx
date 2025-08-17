import LogoUnasFest from "@/public/icons/About/unasfest-icon-logo.png";
import Image from "next/image";

const ourLogo = () => {
  return (
    <section className="bg-gradient-to-b from-[#000F2D] to-[#061431] text-white w-full px-4 py-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 mb-5">
        <div className="text-center leading-tight">
          <h2 className="text-4xl font-extrabold text-white tracking-widest uppercase mb-1">
            Our Logo
          </h2>
          <p className="font-normal text-white mt-0">Our Logo Definition</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <div className="flex-shrink-0">
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
              SAWO MANILA FRUIT AND LEAVES
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
      </div>
    </section>
  );
};

export default ourLogo;