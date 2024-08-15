"use server"
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Link from "next/link";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Curved from "../components/Curved";

export default async function Home() {
  return (
    <div className="h-[600vh] relative">
      <Curved/>
      <Hero/>
        <Features />
       <Footer/>
      


    </div>
 
  );
}
