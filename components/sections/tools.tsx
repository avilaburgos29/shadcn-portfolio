"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";

export function Tools() {
  return (
    <section
      id="tools"
      className="bg-black flex flex-col justify-center items-center gap-10 p-10"
    >
      <h2 className="text-white text-4xl font-bold">Tools</h2>
      <ParallaxScroll projects={tools} />
    </section>
  );
}

const tools = [
  {
    image:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    link: "https://orcdev.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    link: "https://orcdev.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    link: "https://orcdev.com",
  },
];
