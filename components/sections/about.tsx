import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `I believe in clean code, powerful data, and the future of intelligent systems. Every project I build is an opportunity to blend creativity with technology to make things that truly work.`;

export default function About() {
  return (
    <section
      id="about"
      className="bg-black flex flex-col justify-center items-center px-10 md:px-40"
    >
      <h2 className="text-white text-4xl font-bold">About Me</h2>
      <div className="h-[50rem] w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TextGenerateEffect words={words} />
      </div>
    </section>
  );
}
