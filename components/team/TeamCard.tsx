import React from "react";
import Image from "next/image";
import { TeamMember } from "types";

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  const defaultImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzM3NDE1MSIvPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzZCNzI4MCIvPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjE2MCIgcj0iNDAiIGZpbGw9IiM2QjcyODAiLz4KPC9zdmc+";

  return (
    <div className="group relative bg-fun-gray-darker border border-fun-gray rounded-xl p-6 transition-all duration-300 hover:border-fun-pink hover:-translate-y-2 hover:shadow-xl">
      {/* Profile Image */}
      <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-fun-gray group-hover:border-fun-pink transition-colors duration-300">
        <img
          src={defaultImage}
          alt={`${member.name} profile`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = defaultImage;
          }}
        />
      </div>

      {/* Member Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-fun-pink transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-fun-pink text-sm font-medium mb-3">
          {member.position}
        </p>
        <p className="text-fun-gray text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>

      {/* Social Links */}
      {member.socialLinks && (
        <div className="flex justify-center space-x-3 pt-4 border-t border-fun-gray">
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-fun-gray hover:bg-fun-pink transition-colors duration-300 group/social"
            >
              <Image
                src="/static/icons/linkedin-f.svg"
                width={16}
                height={16}
                alt="LinkedIn"
                className="group-hover/social:scale-110 transition-transform duration-300"
              />
            </a>
          )}
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-fun-gray hover:bg-fun-pink transition-colors duration-300 group/social"
            >
              <Image
                src="/static/icons/github-f.svg"
                width={16}
                height={16}
                alt="GitHub"
                className="group-hover/social:scale-110 transition-transform duration-300"
              />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-fun-gray hover:bg-fun-pink transition-colors duration-300 group/social"
            >
              <svg
                className="w-4 h-4 group-hover/social:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
          {member.socialLinks.email && (
            <a
              href={member.socialLinks.email}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-fun-gray hover:bg-fun-pink transition-colors duration-300 group/social"
            >
              <Image
                src="/static/icons/mail-f.svg"
                width={16}
                height={16}
                alt="Email"
                className="group-hover/social:scale-110 transition-transform duration-300"
              />
            </a>
          )}
          {member.socialLinks.website && (
            <a
              href={member.socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-fun-gray hover:bg-fun-pink transition-colors duration-300 group/social"
            >
              <Image
                src="/static/icons/external-link.svg"
                width={16}
                height={16}
                alt="Website"
                className="group-hover/social:scale-110 transition-transform duration-300"
              />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default TeamCard;