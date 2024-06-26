import Navbar from "./Components/header";
import Main from "./Components/main";
import About from "@/app/Components/about";
import Resume from "./Components/resume";
import Tools from "@/app/Components/tools";
import Contact from "@/app/Components/contact";
export default function Page() {
  return (
    <div id="Home" className="relative scroll-smooth">
      <div
        style={{
          backgroundImage: "url('/bgdaad.webp')",
        }}
        className="absolute sm:w-full w-full min-h-screen object-contain bg-center"
      ></div>
      <div className="min-h-screen w-full bg-black p-[3%]">
        <Navbar />
        <Main />
        <About />
        <Resume />
        <Tools />
        <Contact />
      </div>
    </div>
  );
}
