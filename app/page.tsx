import Image from "next/image";
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"



export default function Home() {
  return (
    <main className="">
      <div className="max-w-[60rem] mx-auto min-h-screen flex flex-col items-center justify-center">
      
        <Hero />
        <Features />
        <HowItWorks />
        <Contact />
        <Footer />
        </div> 
    </main>
  );
}
