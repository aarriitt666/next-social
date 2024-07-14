import Image from "next/image";
const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/26655592/pexels-photo-26655592/free-photo-of-two-sea-lions-swimming-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width={32} height={32} className="w-8 h-8 rounded-full" />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input type="text" placeholder="Write a comment..." className="w-full bg-transparent outline-none flex-1" />
          <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer" />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image src="https://images.pexels.com/photos/26655592/pexels-photo-26655592/free-photo-of-two-sea-lions-swimming-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Alan King</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image src="/like.png" alt="" width={12} height={12} className="cursor-pointer w-3 h-3" />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Like</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Comments;
