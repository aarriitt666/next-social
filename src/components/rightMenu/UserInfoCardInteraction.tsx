"use client";

import { switchBlock, switchFollow, unfriend } from "@/lib/action"; // Import the unfriend function
import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({ userId, isUserBlocked, isFollowing, isFollowingSent, isMutualFriend }: { userId: string; isUserBlocked: boolean; isFollowing: boolean; isFollowingSent: boolean; isMutualFriend: boolean }) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
    mutualFriend: isMutualFriend,
  });

  const follow = async () => {
    if (userState.mutualFriend) return; // Disable follow button if users are mutual friends
    switchOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => ({ ...prev, following: prev.following && false, followingRequestSent: !prev.following && !prev.followingRequestSent ? true : false }));
    } catch (err) {
      console.log(err);
    }
  };

  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({ ...prev, blocked: !prev.blocked }));
    } catch (err) {
      console.log(err);
    }
  };

  const unfriendUser = async () => {
    switchOptimisticState("unfriend");
    try {
      await unfriend(userId);
      setUserState((prev) => ({ ...prev, mutualFriend: false, following: false }));
    } catch (err) {
      console.log(err);
    }
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(userState, (state, value: "follow" | "block" | "unfriend") =>
    value === "follow"
      ? {
          ...state,
          following: state.following && false,
          followingRequestSent: !state.following && !state.followingRequestSent ? true : false,
        }
      : value === "block"
      ? { ...state, blocked: !state.blocked }
      : { ...state, mutualFriend: false, following: false }
  );

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2" disabled={optimisticState.mutualFriend}>
          {optimisticState.mutualFriend ? "Friends" : optimisticState.following ? "Following" : optimisticState.followingRequestSent ? "Friend Request Sent" : "Follow"}
        </button>
      </form>
      <div className="flex gap-2 self-end">
        <form action={block}>
          <button>
            <span className="text-red-400 text-xs cursor-pointer transition-transform transform hover:scale-105 hover:text-red-700">{optimisticState.blocked ? "Unblock User" : "Block User"}</span>
          </button>
        </form>
        {optimisticState.mutualFriend && (
          <form action={unfriendUser}>
            <button>
              <span className="text-blue-500 text-xs cursor-pointer transition-transform transform hover:scale-105 hover:text-green-500">Unfriend</span>
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default UserInfoCardInteraction;
