"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import Instagram from "@/public/icons/Footer/Instagram.png";
import Youtube from "@/public/icons/Footer/Youtube.png";
import Tiktok from "@/public/icons/Footer/Tiktok.png";
import Linkedin from "@/public/icons/Footer/LinkedIn.png";
import UF from "@/public/icons/Navbar/UNAS FEST 2025.png";

export default function Footer() {
  const [showActivities, setShowActivities] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedUF");

    if (!hasVisited) {
      fetch("/api/visitor", { method: "POST" })
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch(() => setCount(null));

      sessionStorage.setItem("hasVisitedUF", "true");
    } else {
      fetch("/api/visitor")
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch(() => setCount(null));
    }
  }, []);

  return (
    <footer
      className="bg-[#000138] text-white py-10"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 md:items-start">
        <div className="flex flex-col items-center space-y-4 pl-0">
          <Image
            src={UF}
            alt="UNAS FEST"
            width={50}
            height={25}
            className="mb-4"
          />
          <div className="flex space-x-4 justify-center md:justify-start">
            <Link
              href="https://www.instagram.com/unasfest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Instagram} alt="Instagram" className="w-6 h-6" />
            </Link>
            <Link
              href="https://youtube.com/@unasfest?si=7sXp541G21RHWMRH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Youtube} alt="Youtube" className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.tiktok.com/@unasfest?_t=ZS-8zDpScbWF73&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Tiktok} alt="Tiktok" className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/unas-fest-universitas-nasional-festival-6b6287301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowActivities(!showActivities)}
                className="flex items-center hover:text-gray-300 cursor-pointer"
              >
                Activities
                <FaCaretDown
                  className={`ml-2 transition-transform duration-300 ${showActivities ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  showActivities ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="/activities/KDBI"
                      className="hover:text-gray-300"
                    >
                      Kompetisi Debat Bahasa Indonesia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/activities/EDC"
                      className="hover:text-gray-300"
                    >
                      English Debate Competition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/activities/SPC"
                      className="hover:text-gray-300"
                    >
                      Scientific Paper Competition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/activities/Infographic"
                      className="hover:text-gray-300"
                    >
                      Infographic Competition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/activities/ShortVideo"
                      className="hover:text-gray-300"
                    >
                      Short Video Competition
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                onClick={() => setShowGallery(!showGallery)}
                className="flex items-center hover:text-gray-300 cursor-pointer"
              >
                Gallery
                <FaCaretDown
                  className={`ml-2 transition-transform duration-300 ${showGallery ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  showGallery ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="/gallery/KDBI"
                      className="hover:text-gray-300"
                    >
                      Kompetisi Debat Bahasa Indonesia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery/EDC"
                      className="hover:text-gray-300"
                    >
                      English Debate Competition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery/SPC"
                      className="hover:text-gray-300"
                    >
                      Scientific Paper Competition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery/Infographic"
                      className="hover:text-gray-300"
                    >
                      Infographic Competition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery/ShortVideo"
                      className="hover:text-gray-300"
                    >
                      Short Video Competition
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/partnership" className="hover:text-gray-300">
                Partnership
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Activities</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/activities/KDBI" className="hover:text-gray-300">
                Kompetisi Debat Bahasa Indonesia
              </Link>
            </li>
            <li>
              <Link href="/activities/EDC" className="hover:text-gray-300">
                English Debate Competition
              </Link>
            </li>
            <li>
              <Link href="/activities/SPC" className="hover:text-gray-300">
                Scientific Paper Competition
              </Link>
            </li>
            <li>
              <Link
                href="/activities/Infographic"
                className="hover:text-gray-300"
              >
                Infographic Competition
              </Link>
            </li>
            <li>
              <Link
                href="/activities/ShortVideo"
                className="hover:text-gray-300"
              >
                Short Video Competition
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="mb-4">unasfest@gmail.com</p>
          <p>
            Jl. Sawo Manila No.61, RT.14/RW.7,
            <br />
            Pejaten Barat, Ps. Minggu, Kota Jakarta Selatan,
            <br />
            Daerah Khusus Ibukota Jakarta 12520
          </p>
        </div>
      </div>

      <div className="container mx-auto px-10 mt-8">
        <div className="border-t-2 border-white/50 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-semibold gap-2 pt-4">
          <p>© Copyright UNAS FEST 2025</p>
          <p>
            Visitor Count:{" "}
            {count !== null ? count.toLocaleString() : "Memuat..."}
          </p>
        </div>
      </div>
    </footer>
  );
}