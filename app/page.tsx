import Intro from "@/components/intro"
import About from "@/components/remaked/about"
import { Hero } from "@/components/remaked/hero"
import { Showcase } from "@/components/remaked/showcase"

export default function Home() {
  return (
    <main
      // className="space-y-40 mb-40"
      className={`relative flex min-h-screen flex-col items-center justify-start overflow-x-hidden leading-normal space-y-[1.5rem] pt-16 mb-32`}
    >
      <Intro />
      <About />
      <Showcase />
      {/* <Hero /> */}
    </main>
  )
}
