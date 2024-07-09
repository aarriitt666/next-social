import Link from "next/link";
import Image from "next/image";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image src="https://images.pexels.com/photos/14272949/pexels-photo-14272949.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://images.pexels.com/photos/14272947/pexels-photo-14272947.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://images.pexels.com/photos/14272948/pexels-photo-14272948.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://images.pexels.com/photos/14272946/pexels-photo-14272946.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://images.pexels.com/photos/14272945/pexels-photo-14272945.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://images.pexels.com/photos/14272944/pexels-photo-14272944.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://images.pexels.com/photos/14272943/pexels-photo-14272943.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://images.pexels.com/photos/14272942/pexels-photo-14272942.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
