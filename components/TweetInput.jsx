import { CalendarIcon, ChartBarIcon, FaceSmileIcon,  MapPinIcon, PhotoIcon } from "@heroicons/react/24/outline";

function TweetInput() {
  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src="/assets/kylie.png"
        alt=""
      />
      <div className="w-full">
        <textarea
          placeholder="What's on your mind?"
          className="bg-transparent outline-none resize-none w-full
         min-h-[50px] text-lg"
        />
        <div className="flex justify-between border-t border-gray-700 pt-4">
          <div className="flex space-x-0">
            <div className="iconAnimation">
              <PhotoIcon className=" h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <ChartBarIcon className=" h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <FaceSmileIcon className=" h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <CalendarIcon className=" h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <MapPinIcon className=" h-[22px] text-[#1d9bf0]" />
            </div>
            
          </div>
          <button className="bg-[#1d9bf0] rounded-full px-4 py-1.5">Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default TweetInput;
