"use client";

import Image from "next/image";
import Border from "@/public/image/About/YB/Border.png";
import Fotbar from "@/public/image/About/YB/Foto Bersama.jpeg";
import { useState } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const yearbooks = [
    {
      year: "2024",
      title: "UNAS FEST 2024",
      link: "https://www.canva.com/design/DAG4pHPwmYQ/6SVzC4TZRy8LXGFHg2UoZg/edit?utm_content=DAG4pHPwmYQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      available: true,
    },
    {
      year: "2025",
      title: "UNAS FEST 2025",
      link: "https://www.canva.com/design/DAG4qZ01CHg/VDkGToLPpeti27xaTl6myg/edit?success=true",
      available: true,
    },
  ];

  const handleYearbookClick = (link: string) => {
    window.open(link, '_blank');
    setIsOpen(false);
  };

  return (
    <main className="bg-gradient-to-b from-[#000022] to-[#1B1369] from-0% to-100%">
      <div className="flex flex-row items-center justify-center text-center w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 py-3 sm:py-5 md:py-10">
        <h2 className="uppercase text-xl sm:text-2xl md:text-6xl font-bold">year book</h2>
      </div>

      <div className="flex items-center justify-center w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4">
        <div className="relative w-full h-[200px] sm:h-[400px]">
          <Image
            src={Border}
            alt="Yearbook Border"
            fill
            className="object-contain z-2"
            priority
            quality={100}
          />
          <Image
            src={Fotbar}
            alt="Fotbar UF 25"
            className="object-cover z-1 h-49 sm:h-95 max-w-[224px] sm:max-w-md mx-auto"
            priority
            quality={100}
          />
          <div className="flex items-center justify-center">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <button
                  className="absolute bottom-5 md:bottom-10 border border-white px-2 py-1 md:px-4 md:py-2 rounded-xl text-white font-semibold hover:scale-110 z-10 bg-white/20 backdrop-blur-md transition"
                >
                  Visit Yearbook
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center">
                    Select Yearbook
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Choose which yearbook you want to view
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {yearbooks.map((yearbook) => (
                    <button
                      key={yearbook.year}
                      onClick={() => handleYearbookClick(yearbook.link)}
                      disabled={!yearbook.available}
                      className="group relative flex items-center justify-between p-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-white">
                            {yearbook.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {yearbook.available ? "Available now" : "Coming soon"}
                          </p>
                        </div>
                      </div>
                      {yearbook.available && (
                        <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                      )}
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 py-10">
        <h2 className="font-bold text-sm sm:text-md sm:text-md md:text-xl px-1">
          250 Members
        </h2>
        <span className="font-bold text-sm sm:text-md md:text-xl px-2">―</span>
        <h2 className="font-bold text-sm sm:text-md md:text-xl px-1 hidden md:flex">
          14 Departements
        </h2>
        <h2 className="font-bold text-sm sm:text-md md:text-xl px-2 flex md:hidden">
          14 Dept
        </h2>
        <span className="font-bold text-sm sm:text-md md:text-xl px-2">―</span>
        <h2 className="font-bold text-sm sm:text-md md:text-xl px-1">
          3 Sectors
        </h2>
      </div>
    </main>
  );
}
