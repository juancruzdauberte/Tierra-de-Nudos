import { AiFillTikTok } from "react-icons/ai";

export const TikTokWiget = () => {
  return (
    <div>
      <a
        href="https://www.tiktok.com/@tierradenudos"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center border border-black rounded-full p-1 md:p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white transition"
      >
        <AiFillTikTok />
      </a>
    </div>
  );
};
