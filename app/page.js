import Image from "next/image";
import headerImg from "../assets/downtown-header.webp"

import Navbar from "./components/Navbar";
export default function Home() {
  return <>
  <Navbar/>
  <Image src={headerImg} alt="Downtown Header" className="w-full" />
  </>
}
