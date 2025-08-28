"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import {
  COMMITTEE_MEMBERS,
  COMMITTEE_TABS,
  CommitteeMember,
  CommitteeData,
} from "@/constants/About/About";
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Fragment } from "react";

interface MemberCardProps {
  name: string;
  role: string;
  photoUrl?: string;
  description?: string;
  member?: string[];
  position?: string[];
  isAPM?: boolean;
  onOpen: () => void;
  isHovered: boolean;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  photoUrl,
  onOpen,
  isHovered,
}) => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[350px] relative group">
      <div className="relative w-48 h-72 md:w-72 md:h-96 rounded-lg mb-1 overflow-hidden">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-600 text-gray-300 text-sm">
            No Photo
          </div>
        )}

        {!isHovered && (
          <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2 rounded-b-lg transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-md text-white">{role}</p>
          </div>
        )}

        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300">
            <Button
              onClick={onOpen}
              className="bg-[#1F3D76] hover:bg-[#012A52] text-white cursor-pointer font-bold py-2 px-4 rounded-lg transition-all duration-300"
            >
              Read More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const MainCommittee: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("PM");
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(
    null
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const committeeMembers: CommitteeData = COMMITTEE_MEMBERS;
  const tabs: string[] = COMMITTEE_TABS;

  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenDrawer = (member: CommitteeMember) => {
    setSelectedMember(member);
    setIsDrawerOpen(true);
  };

  return (
    <section className="bg-[#000022] text-white min-h-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-[15%] left-[18%] w-[350px] h-[350px] rounded-full blur-circle bg-[radial-gradient(circle_at_center,_rgba(81,124,255,0.6)_0%,_rgba(81,124,255,0)_70%)]"></div>
      <div className="absolute top-[55%] left-[62%] w-[350px] h-[350px] rounded-full blur-circle bg-[radial-gradient(circle_at_center,_rgba(81,124,255,0.6)_0%,_rgba(81,124,255,0)_70%)]"></div>

      <div className="max-w-7xl mx-auto mt-4">
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-wide text-center sm:text-center">
            MAIN COMMITTEE
          </h1>
          <p className="font-semibold text-xl text-center">
            Meet our Committee Events
          </p>
        </div>

        <div className="flex overflow-x-auto justify-center space-x-6 mb-6 sm:mb-8 md:mb-12 custom-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-lg font-semibold cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400 hover:text-white"
              } transition duration-300 ease-in-out focus:outline-none flex-shrink-0`}
            >
              {tab}
            </button>
          ))}
        </div>

        {(() => {
          const members = committeeMembers[activeTab] || [];
          const count = members.length;
          const isAPM = activeTab === "APM";

          if (count === 1) {
            return (
              <div className="flex justify-center">
                <div
                  onMouseEnter={() => setHoveredCard(members[0].id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <MemberCard
                    key={members[0].id}
                    name={members[0].name}
                    role={members[0].role}
                    photoUrl={members[0].photoUrl}
                    description={members[0].description}
                    member={members[0].member}
                    position={members[0].position}
                    isAPM={isAPM}
                    onOpen={() => handleOpenDrawer(members[0])}
                    isHovered={hoveredCard === members[0].id}
                  />
                </div>
              </div>
            );
          }

          if (count <= 4 && isDesktop) {
            return (
              <div className="flex flex-wrap justify-center gap-6 z-99">
                {members.map((member) => (
                  <div
                    key={member.id}
                    onMouseEnter={() => setHoveredCard(member.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <MemberCard
                      name={member.name}
                      role={member.role}
                      photoUrl={member.photoUrl}
                      description={member.description}
                      member={member.member}
                      position={member.position}
                      isAPM={isAPM}
                      onOpen={() => handleOpenDrawer(member)}
                      isHovered={hoveredCard === member.id}
                    />
                  </div>
                ))}
              </div>
            );
          }

          return (
            <Swiper
              spaceBetween={10}
              breakpoints={{
                1440: {
                  slidesPerView: 4.2,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 3.8,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3.2,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2.3,
                  centeredSlides: count === 1,
                },
                640: {
                  slidesPerView: 2.5,
                  centeredSlides: count === 1,
                },
                520: {
                  slidesPerView: 2.3,
                  centeredSlides: count === 1,
                },
                425: {
                  slidesPerView: 1.8,
                  centeredSlides: count === 1,
                },
                0: {
                  slidesPerView: 1.5,
                  centeredSlides: count === 1,
                },
              }}
              className="!overflow-hidden"
            >
              {members.map((member) => (
                <SwiperSlide key={member.id}>
                  <div
                    className="flex justify-center"
                    onMouseEnter={() => setHoveredCard(member.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <MemberCard
                      name={member.name}
                      role={member.role}
                      photoUrl={member.photoUrl}
                      description={member.description}
                      member={member.member}
                      position={member.position}
                      isAPM={isAPM}
                      onOpen={() => handleOpenDrawer(member)}
                      isHovered={hoveredCard === member.id}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          );
        })()}

        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerContent className="bg-[#012A52] border-none text-white h-[90vh]">
            <div className="mx-auto w-full max-w-4xl h-full flex flex-col">
              <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-hide">
                {selectedMember &&
                  (activeTab === "PM" || activeTab === "DPM") && (
                    <div className="space-y-6 pb-6">
                      {" "}
                      <div className="bg-[#1F3D76] rounded-2xl px-6 py-4 text-left">
                        <h2 className="text-2xl font-bold">
                          {selectedMember.role}
                        </h2>
                        <p className="text-lg font-medium text-white mt-1">
                          {selectedMember.name}
                        </p>
                      </div>
                      <div className="bg-[#1F3D76] rounded-2xl px-6 py-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                        {selectedMember.photoUrl && (
                          <div className="relative w-48 h-72 md:w-72 md:h-96 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={selectedMember.photoUrl}
                              alt={selectedMember.name}
                              fill
                              style={{ objectFit: "cover" }}
                              className="rounded-lg"
                            />
                          </div>
                        )}
                        <p className="text-white text-justify">
                          {selectedMember.description}
                        </p>
                      </div>
                    </div>
                  )}

                {selectedMember && activeTab === "APM" && (
                  <div className="space-y-6 pb-6">
                    {" "}
                    <div className="bg-[#1F3D76] rounded-2xl px-6 py-6">
                      <h2 className="text-2xl font-bold mb-2">
                        {selectedMember.role}
                      </h2>
                      <p className="text-white">{selectedMember.description}</p>
                    </div>
                    <div className="border-t border-black px-6 py-6">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        <div className="col-span-1">
                          <h3 className="text-lg font-semibold text-white uppercase">
                            MEMBER LIST
                          </h3>
                        </div>

                        <div className="col-span-4">
                          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                            <div className="font-bold">Full Name</div>
                            <div className="font-bold">Position</div>
                            {selectedMember.member?.map((member, index) => (
                              <Fragment key={index}>
                                <div>{member}</div>
                                <div className="text-gray-300">
                                  {selectedMember.position?.[index]}
                                </div>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="h-16 bg-[#012A52]"></div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default MainCommittee;