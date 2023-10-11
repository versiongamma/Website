import { BiLogoYoutube, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";

const ICON_STYLE = "w-[32px] h-[32px] 2xl:w-[64px] 2xl:h-[64px]";
const LINK_STYLE =
  "hover-bg p-1 rounded-full w-[48px] h-[48px] flex items-center justify-center";

const SocialLinks = () => (
  <div className="flex flex-col items-center w-[200px] 2xl:w-[300px] space-y-2 2xl:space-y-4">
    <p className="font-mono text-xs 2xl:text-xl">YOU CAN FIND ME AT</p>
    <a
      className={LINK_STYLE}
      href="https://youtube.com/c/VersionGamma"
      target="_blank"
    >
      <BiLogoYoutube className={ICON_STYLE} />
    </a>
    <a
      className={LINK_STYLE}
      href="https://github.com/versiongamma"
      target="_blank"
    >
      <BiLogoGithub className={ICON_STYLE} />
    </a>
    <a
      className={LINK_STYLE}
      href="https://instagram.com/matthewsphotosnz"
      target="_blank"
    >
      <BiLogoInstagram className={ICON_STYLE} />
    </a>
  </div>
);

const InfoPageContents = () => (
  <div className="flex w-[1300px] 2xl:w-[1500px] space-x-20">
    <span className="flex items-center justify-end min-w-[300px]">
      <img
        src="/static/me.webp"
        className="max-w-[250px] self-center 2xl:max-w-[350px] rounded-full"
      />
    </span>
    <span className="space-y-4 2xl:text-2xl flex-grow">
      <p>
        So you want to know more about who am I then, other than just a "maker
        of stuff". Understandable, cause there's a lot on offer.
      </p>
      <p>
        My main gig is as a software developer. Most of my experience is in web
        dev with TypeScript, React and Node, but I've done some stuff in Java,
        C#, C, and C++. It's what I studied, what I've been working the past
        years, and so one might say I am a professional developer.
      </p>
      <p>
        I also make videos for the YouTube channel Version Gamma, where I mostly
        discuss game design (although I occasionally branch out into other
        topics I'm passionate about). It's a fun time, I wouldn't recommend it
        but apparently 2,110 people would, so there's that.
      </p>
      <p>
        You might also notice I'm a little bit of an appreciator of things
        involving cameras, from the personal photography I do, to the
        videography that goes into the videos I produce. It's been a hobby of
        mine for many years, and I use it as an excuse to visit interesting and
        beautiful places, which we have in great abundance here in my home of
        Aotearoa.
      </p>
    </span>
    <span className="flex items-center justify-start min-w-[300px]">
      <SocialLinks />
    </span>
  </div>
);

export default InfoPageContents;
