"use client";

import { User } from "@prisma/client";
import { useActionState, useState } from "react";
import Image from "next/image";
import { updateProfile } from "@/lib/action";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);

  const [state, formAction] = useActionState(updateProfile, { success: false, error: false });
  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
    state.success && router.refresh();
  };
  return (
    <div className="">
      <span className="text-blue-500 text-xs cursor-pointer" onClick={() => setOpen(true)}>
        Update
      </span>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form action={(formData) => formAction({ formData, cover: cover?.secure_url || "" })} className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-4 w-full max-w-lg relative">
            {/* TITLE */}
            <h1 className="text-xl font-semibold">Update Profile</h1>
            <div className="mt-2 text-xs text-gray-500">Use the navbar to change the avatar or username.</div>
            {/* COVER PIC UPLOAD */}
            <CldUploadWidget uploadPreset="jiivee" onSuccess={(result) => setCover(result.info)}>
              {({ open }) => {
                return (
                  <div className="flex flex-col gap-2 my-4" onClick={() => open()}>
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image src={user.cover || "/noCover.png"} alt="" width={48} height={32} className="w-12 h-8 rounded-md object-cover"></Image>
                      <span className="text-xs underline text-gray-600">Change</span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>
            {/* WRAPPER */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* INPUT */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-xs text-gray-500">
                  First Name
                </label>
                <input type="text" placeholder={user.name || "John"} className="ring-1 ring-gray-200 p-2 rounded-md text-sm" name="name" />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-xs text-gray-500">
                  Surname
                </label>
                <input type="text" placeholder={user.surname || "Smith"} className="ring-1 ring-gray-200 p-2 rounded-md text-sm" name="surname" />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-xs text-gray-500">
                  Description
                </label>
                <input type="text" placeholder={user.description || "Life is beautiful..."} className="ring-1 ring-gray-200 p-2 rounded-md text-sm" name="description" />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-xs text-gray-500">
                  City
                </label>
                <input type="text" placeholder={user.city || "New York"} className="ring-1 ring-gray-200 p-2 rounded-md text-sm" name="city" />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-xs text-gray-500">
                  School
                </label>
                <input type="text" placeholder={user.school || "MIT"} className="ring-1 ring-gray-200 p-2 rounded-md text-sm" name="school" />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-xs text-gray-500">
                  Work
                </label>
                <input type="text" placeholder={user.work || "NASA"} className="ring-1 ring-gray-200 p-2 rounded-md text-sm" name="work" />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-xs text-gray-500">
                  Website
                </label>
                <input type="text" placeholder={user.website || "example.com"} className="ring-1 ring-gray-200 p-2 rounded-md text-sm" name="website" />
              </div>
            </div>
            <button className="bg-blue-500 p-2 mt-4 rounded-md text-white">Update</button>
            {state.success && <span className="text-green-500">Profile has been updated!</span>}
            {state.error && <span className="text-red-500">Something has gone wrong!</span>}
            <div className="absolute text-xl right-2 top-2 cursor-pointer" onClick={handleClose}>
              X
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
