import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

function TweetInput() {
  const user = useSelector((state) => state.user);
  const [text, setText] = useState("");

  async function sendTweet() {
    const docRef = await addDoc(collection(db, "posts"), {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });
    setText("");
  }

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
          onChange={(e) => setText(e.target.value)}
          value={text}
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
          <button
            onClick={sendTweet}
            disabled={!text}
            className="bg-[#1d9bf0] rounded-full px-4 py-1.5
           disabled:opacity-50"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetInput;
