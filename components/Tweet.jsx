import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function Tweet() {
  return (
    <div className="border-b border-gray-700">
      <TweetHeader />

      <div className="p-3 ml-16 text-gray-500 flex space-x-14">
        <ChatBubbleOvalLeftEllipsisIcon className="w-5 cursor-pointer hover:text-green-400" />
        <HeartIcon className="w-5 cursor-pointer hover:text-pink-500" />
        <ChartBarIcon className="w-5 cursor-not-allowed" />
        <ArrowUpTrayIcon className="w-5 cursor-not-allowed" />
      </div>
    </div>
  );
}

export default Tweet;

export function TweetHeader() {
  return (
    <div className="flex space-x-3 p-3 border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src="/assets/kylie.png"
        alt=""
      />
      <div>
        <div className="flex text-gray-500 items-center space-x-2 mb-1">
          <span>Kylie</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>2 hours ago</span>
        </div>
        <span>Text</span>
      </div>
    </div>
  );
}
