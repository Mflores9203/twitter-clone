import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function Tweet({data}) {
  return (
    <div className="border-b border-gray-700">
      <TweetHeader
        username={data?.username}
        name={data?.user}
        text={data?.tweet}
        photoUrl={data?.photoUrl}
        // timestamp={data.timestamp}
      />

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

export function TweetHeader({ username, name, timestamp, text, photoUrl}) {
  return (
    <div className="flex space-x-3 p-3 border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src={photoUrl}
        alt=""
      />
      <div>
        <div className="flex text-gray-500 items-center space-x-2 mb-1">
          <h1 className="text-white font-bold">{name}</h1>
          <span>@{username}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>{timestamp}</span>
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}
