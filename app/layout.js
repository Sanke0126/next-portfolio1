import "./globals.css";
import Navbar from "../Components/header";
import Main from "../Components/main";
import About from "@/Components/about";
import Resume from "../Components/resume";
import Tools from "@/Components/tools";
import Contact from "@/Components/contact";
export const metadata = {
  title: "Naranbaatar | Personal Portfolio",
  description: "Full Stack Developer - 6 months experience",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body id="Home" className="relative scroll-smooth">
        <div
          style={{
            backgroundImage: "url('/bgdaad.webp')",
          }}
          className="absolute w-full h-[120vh] object-contain bg-center"
        ></div>
        <div className="min-h-screen min-w-screen bg-black p-[3%]">
          <Navbar />
          <Main />
          <About />
          <Resume />
          <Tools />
          <Contact />
        </div>
      </body>
    </html>
  );
}
