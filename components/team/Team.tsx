import React from "react";
import TeamCard from "./TeamCard";
import SectionTitle from "../global/SectionTitle";
import team from "@/data/content/team";
import { TeamMember } from "types";

interface TeamProps {
  overwriteTeam?: TeamMember[];
}

function Team({ overwriteTeam }: TeamProps) {
  const teamMembers = overwriteTeam || team;

  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="Meet Our Team" />
      <div className="max-w-6xl m-auto grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

export default Team;