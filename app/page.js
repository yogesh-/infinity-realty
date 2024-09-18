import Image from "next/image";
import headerImg from "../assets/downtown-header.webp"

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageGallery from "./components/ImageGallery";

export default function Home() {
  return <>
  <Navbar/>
  <Hero/>
  <ImageGallery/>
  </>
}
