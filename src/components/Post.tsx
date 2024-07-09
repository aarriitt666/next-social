import Image from "next/image";
import Comments from "./Comments";
const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="https://images.pexels.com/photos/21582198/pexels-photo-21582198/free-photo-of-woman-drawing-on-the-sand-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" width={40} height={40} alt="" className="w-10 h-10 rounded-full" />
          <span className="font-medium">Jack Smith</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="" />
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image src="https://images.pexels.com/photos/18344320/pexels-photo-18344320/free-photo-of-woman-holding-camera-standing-on-stairs.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" fill className="object-cover rounded-md" alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim. Donec et odio pellentesque diam volutpat commodo sed egestas. Id diam maecenas ultricies mi eget mauris pharetra. Diam phasellus vestibulum lorem sed risus ultricies tristique. Sit amet purus gravida quis blandit. Tempor id eu nisl nunc mi ipsum. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. In hac habitasse platea dictumst. Vel eros donec ac odio tempor orci dapibus.</p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/like.png" width={16} height={16} className="cursor-pointer" alt="" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/comment.png" width={16} height={16} className="cursor-pointer" alt="" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/share.png" width={16} height={16} className="cursor-pointer" alt="" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
      {/* COMMENTS */}
      <Comments />
    </div>
  );
};

export default Post;
