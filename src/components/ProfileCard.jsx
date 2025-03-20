import { useState } from "react";

const ProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-100 h-100 bg-white rounded-3xl p-1 shadow-lg transition-all duration-500 ease-in-out ${
        isHovered ? "rounded-tl-[55px]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mail Button */}
      <button className="absolute right-8 top-6 bg-transparent border-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isHovered ? "#f55d56" : "#fbb9b6"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </button>

      {/* Profile Picture */}
      <div
        className={`absolute ${
          isHovered
            ? "w-35 h-35 top-2.5 left-2.5 border-[7px] scale-125 z-1"
            : "w-[calc(100%-6px)] h-[calc(100%-6px)] top-[3px] left-[3px]"
        } border-pink-300 rounded-full overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="Profile"
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Bottom Card Content */}
      <div
        className={`absolute bottom-1 left-1 right-1 bg-pink-300 rounded-[29px] shadow-inner transition-all duration-500 ease-in-out ${
          isHovered ? "top-20 rounded-[80px_29px_29px_29px]" : "top-[80%]"
        }`}
      >
        <div className="absolute bottom-0 left-6 right-6 h-40">
          <span className="block text-lg font-bold text-white">My Name</span>
          <span className="block text-sm text-white mt-4">
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>

        {/* Social Links & Contact Button */}
        <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
          <div className="flex gap-4">
            {/* Instagram */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              className="fill-white transition-all duration-300 hover:fill-red-400 hover:scale-110"
            >
              <path d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582Z" />
            </svg>

            {/* Twitter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-white transition-all duration-300 hover:fill-red-400 hover:scale-110"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48z" />
            </svg>

            {/* GitHub */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="w-5 h-5 fill-white transition-all duration-300 hover:fill-red-400 hover:scale-110"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
            </svg>
          </div>

          {/* Contact Button */}
          <button className="bg-white text-pink-300 rounded-xl px-3 py-1 text-xs shadow-sm transition-all duration-300 hover:bg-red-400 hover:text-white">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
