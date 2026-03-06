import { FriendData } from "../../types/interfaces";
import { UserData } from "../../types/interfaces";

export const getFriendID = (userID: string, friend: FriendData) => {
  return friend.receivedBy ? friend.requestedBy : friend.receivedBy;
};