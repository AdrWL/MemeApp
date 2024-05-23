const initialState = {
  memes: [
    {
      title: "Mem 1",
      upvotes: 6,
      downvotes: 0,
      img: "path/to/image1.png",
    },
    {
      title: "Mem 2",
      upvotes: 1,
      downvotes: 2,
      img: "path/to/image2.png",
    },
    {
      title: "Mem 3",
      upvotes: 6,
      downvotes: 0,
      img: "path/to/image3.png",
    },
    {
      title: "Mem 4",
      upvotes: 6,
      downvotes: 0,
      img: "path/to/image4.png",
    },
  ],
};

export const memeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPVOTE": {
      const index = state.memes.findIndex((mem) => mem.title === action.payload);
      if (index === -1) return state;

      const newMemes = [...state.memes];
      newMemes[index] = {
        ...newMemes[index],
        upvotes: newMemes[index].upvotes + 1,
      };
      return {
        ...state,
        memes: newMemes,
      };
    }
    case "DOWNVOTE": {
      const index = state.memes.findIndex((mem) => mem.title === action.payload);
      if (index === -1) return state;

      const newMemes = [...state.memes];
      newMemes[index] = {
        ...newMemes[index],
        downvotes: newMemes[index].downvotes + 1,
      };
      return {
        ...state,
        memes: newMemes,
      };
    }
    default:
      return state;
  }
};
