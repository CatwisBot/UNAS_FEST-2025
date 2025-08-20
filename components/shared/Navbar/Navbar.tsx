"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navMenu } from "@/constants/navMenu";
import { usePathname, useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigationMenu";
import unasfestLogo from "@/public/icons/Navbar/Logo_UF25.png";
import { AnimatePresence, motion } from "framer-motion";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSubMenu = (title: string) => {
    setExpandedMenu(expandedMenu === title ? null : title);
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions: ISourceOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out" as const
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        }
      }
    }
  };

  return (
    <header className="sticky z-[99] top-0 w-full bg-[#441F7E]">
      <div className="h-[80px] w-full border-b-2 border-[rgba(0,0,0,0.10)]">
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={unasfestLogo}
              alt="unasfest logo"
              width={133}
              height={70}
              className="h-[40px] w-[120px] object-contain md:h-[56px] md:w-[190px]"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex mr-8">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row gap-8">
                {navMenu.map(({ title, path, child, isExternal, isSpecial }) => {
                  if (child) {
                    return (
                      <NestedNav
                        key={title}
                        path={path}
                        title={title}
                        menu={child}
                        closeMenu={() => setMenuOpen(false)}
                      />
                    );
                  }
                  return (
                    <NavigationMenuItem
                      key={title}
                      className={`relative flex items-center ${isSpecial ? "group" : ""}`}
                    >
                      {isExternal ? (
                        <a
                          href={path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            relative px-2 py-1 text-white transition-colors duration-150 bg-[#000138] rounded-md
                            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300
                            hover:after:w-full
                            ${pathname === path ? "after:w-full" : ""}
                            font-bold
                            ${isSpecial ? "group-hover:text-white" : ""}
                          `}
                        >
                          {title}
                          {isSpecial && (
                            <span className="absolute -top-1 -right-3 flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                            </span>
                          )}
                        </a>
                      ) : (
                        <Link href={path} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={`
                              relative px-2 py-1 text-white transition-colors duration-150
                              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300
                              hover:after:w-full
                              ${pathname === path ? "after:w-full" : ""}
                              font-bold
                            `}
                          >
                            {title}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              className="p-2"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <div className="rotate-90 duration-300">
                  <X size={32} color="#fff" />
                </div>
              ) : (
                <div className="duration-300">
                  <Menu size={32} color="#fff" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Particles */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -32, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -32, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="lg:hidden bg-gradient-to-b from-[#441F7E] to-[#000000] px-4 pb-4 flex justify-center absolute left-0 right-0 top-20 backdrop-blur-sm"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Particles
                    id="menu-particles"
                    init={particlesInit}
                    options={particlesOptions}
                  />
                </div>
                
                <div className="w-full max-w-xs mx-auto flex flex-col items-center relative z-10">
                  <NavigationMenu>
                    <NavigationMenuList className="flex flex-col gap-4 items-center w-full">
                      {navMenu.map(({ title, path, child, isExternal, isSpecial }) => (
                        <div key={title} className="w-full flex flex-col items-center">
                          {child ? (
                            <div className="w-full flex flex-col items-center">
                              <button
                                className={`relative px-2 py-1 text-white font-semibold text-center whitespace-nowrap
                                  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300 after:-translate-x-1/2
                                  hover:after:w-full
                                  ${expandedMenu === title || pathname === path ? "after:w-full" : ""}
                                `}
                                onClick={() => toggleSubMenu(title)}
                              >
                                {title}
                              </button>
                              
                              <AnimatePresence>
                                {expandedMenu === title && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full flex flex-col items-center gap-1 mt-1 overflow-hidden"
                                  >
                                    {child.map(({ name, href }) => (
                                      <button
                                        key={name}
                                        className={`w-full px-2 py-1 text-white text-sm text-center whitespace-nowrap
                                          relative
                                          after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300 after:-translate-x-1/2
                                          hover:after:w-full
                                          ${pathname === href ? "after:w-full font-bold" : "opacity-90 hover:opacity-100"}
                                        `}
                                        onClick={() => {
                                          setMenuOpen(false);
                                          setTimeout(() => router.push(href), 300);
                                        }}
                                      >
                                        {name}
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : isExternal ? (
                            <a
                              href={path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`relative px-2 py-1 font-semibold text-center whitespace-nowrap
                                after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300 after:-translate-x-1/2
                                hover:after:w-full
                                ${isSpecial ? "text-white" : "text-white"}
                              `}
                            >
                              {title}
                              {isSpecial && (
                                <span className="absolute -top-1 -right-3 flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                                </span>
                              )}
                            </a>
                          ) : (
                            <button
                              className={`relative px-2 py-1 text-white font-semibold text-center whitespace-nowrap
                                after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300 after:-translate-x-1/2
                                hover:after:w-full
                                ${pathname === path ? "after:w-full" : "opacity-90 hover:opacity-100"}
                              `}
                              onClick={() => {
                                setMenuOpen(false);
                                setTimeout(() => router.push(path), 300);
                              }}
                            >
                              {title}
                            </button>
                          )}
                        </div>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

interface NestedNavProps {
  title: string;
  path: string;
  menu: { name: string; href: string; desc?: string }[];
  closeMenu: React.MouseEventHandler;
}

function NestedNav({ title, path, menu, closeMenu }: NestedNavProps) {
  const pathname = usePathname();

  return (
    <NavigationMenuItem
      className={`z-50 ${pathname.includes(path) ? "nav-active" : "nav"}`}
    >
      <NavigationMenuTrigger className="relative px-2 py-1 text-white font-bold text-base transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-full data-[state=open]:after:w-full">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[300px] text-left">
          {menu.map(({ name, href }, index) => (
            <NavigationMenuLink key={index} onClick={closeMenu}>
              <Link
                href={href}
                className="block w-[300px] rounded-md p-3 text-sm leading-snug text-muted-foreground hover:bg-white hover:text-black"
              >
                {name}
              </Link>
            </NavigationMenuLink>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}