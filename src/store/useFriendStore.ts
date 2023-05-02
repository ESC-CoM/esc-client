import { create } from 'zustand';

type MeetingFriendStoreState = {
  addedFriends: number[];
  handleAddedFriends: (id: number) => void;
};

export const useFriendStore = create<MeetingFriendStoreState>((set) => ({
  addedFriends: [],
  handleAddedFriends: (id: number) => {
    set((state) => {
      const isFriendExist = !!state.addedFriends.find((x) => x === id);
      if (!isFriendExist)
        return { ...state, addedFriends: [...state.addedFriends, id] };
      return {
        ...state,
        addedFriends: state.addedFriends.filter((x) => x !== id),
      };
    });
  },
}));
