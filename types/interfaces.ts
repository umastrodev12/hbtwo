export interface UserData {
  id: string;
  name: string;
  nickname?: string;
  bio: string;
  groups: boolean;
  friendsAmount: number;
  createdAt: string;
  avatar: {
    name: string;
    url: string;
  };
}

export interface FriendData {
  id: string;
  requestedBy: UserData;
  receivedBy: UserData;
}

export interface Status {
  doNotDisturb: string;
  invisible: string;
}
