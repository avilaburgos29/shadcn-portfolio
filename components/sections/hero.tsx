import { WavyBackground } from "../ui/wavy-background";

const title = "Shaping the Future with Code, AI, and Data";
const subtitle = "Hi, I'm Marvin, a Data engineer and AI enthusiast.";

export default function Hero() {
  return (
    <section id="home">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          {title}
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          {subtitle}
        </p>
      </WavyBackground>
    </section>
  );
}
