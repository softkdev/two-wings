import { Container } from "@/components/ui";
import Image from "next/image";
import { TEAM_MEMBERS, MEET_OUR_TEAM_INTRO } from "@/data/about";

export function MeetOurTeamSection() {
  const desktopMembers = TEAM_MEMBERS;
  const mobileMembers = TEAM_MEMBERS.slice(0, 4);

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-sans font-bold text-text-title">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans">
            {MEET_OUR_TEAM_INTRO}
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {desktopMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-white/10 shrink-0">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                  unoptimized={member.imageSrc.endsWith(".svg")}
                />
              </div>
              <h3 className="mt-4 text-[18px] font-sans font-semibold text-text-title">
                {member.name}
              </h3>
              <p className="mt-1 text-[16px] text-text-body font-sans">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 md:hidden">
          {mobileMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/10 shrink-0">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                  unoptimized={member.imageSrc.endsWith(".svg")}
                />
              </div>
              <h3 className="mt-3 text-[16px] font-sans font-semibold text-text-title">
                {member.name}
              </h3>
              <p className="mt-0.5 text-[14px] text-text-body font-sans">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
