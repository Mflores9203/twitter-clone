import Banner from "@/components/Banner";
import Postfeed from "@/components/Postfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Image from "next/image";

export default function Home() {
  return (

    <div>
      <div className="bg-black min-h-screen text-[#E7E9EA] 
    max-w-[1400px] mx-auto flex">
      <Sidebar />
      <Postfeed />
      <Trending />
    </div>
    <Banner />
    </div>
  );
}
