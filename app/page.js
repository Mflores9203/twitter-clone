import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-[#E7E9EA] 
    max-w-[1400px] mx-auto">
      <Sidebar />
      {/* <PostsFeed /> */}
      {/* <Trending /> */}
    </div>
  );
}
