import { Github, Linkedin, Mail } from "@geist-ui/icons";
import Image from "next/image";
import { FaMedium, FaStackOverflow, FaXTwitter } from "react-icons/fa6";

const iconSize = 24;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center h-full w-full p-6 bg-background">
      <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] border border-gray-100 dark:border-gray-700 rounded-full overflow-hidden p-2">
        <div className="w-full h-full relative">
          <Image
            src="/headshot.jpeg"
            alt="Headshot of Chii"
            fill
            className="rounded-full"
          />
        </div>
      </div>
      <h1 className="text-2xl text-center sm:text-5xl font-semibold mt-10 mb-5">
        Chibuokem T. Onyekwelu
      </h1>
      {/* <h5 className="text-lg text-center sm:text-xl font-light my-4">
        Software Engineer (React, React Native, TypeScript, Next.js)
      </h5> */}
      <p className="font-light text-sm w-full max-w-[700px]">
        I&apos;m a Software Engineer, with extensive experience in building
        applications, primarily using React Native and TypeScript/JavaScript. I
        have worked on, and deployed, more than ten applications to both the
        Apple App Store and Google Play Store, serving more than a hundred
        thousand users.
      </p>
      <div className="flex flex-row items-center justify-center gap-7 flex-wrap mt-10">
        <a
          href="mailto:hello@chibuokem.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={iconSize} />
        </a>
        <a
          href="https://linkedin.com/in/chibuokem-onyekwelu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={iconSize} />
        </a>
        <a
          href="https://github.com/davidteejay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={iconSize} />
        </a>
        <a
          href="https://x.com/lord_chii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={iconSize} />
        </a>
        <a
          href="https://medium.com/@chibuokem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium size={iconSize} />
        </a>
        <a
          href="https://stackoverflow.com/users/10407415/chibuokem-onyekwelu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStackOverflow size={iconSize} />
        </a>
      </div>
    </div>
  );
}
