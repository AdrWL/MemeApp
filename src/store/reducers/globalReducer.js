const memes = {
  memes: [
    {
      id: 1,
      title: "Mem 1",
      upvotes: 6,
      downvotes: 0,
      img: "path/to/image1.png",
    },
    {
      id: 2,
      title: "Mem 2",
      upvotes: 6,
      downvotes: 0,
      img: "path/to/image2.png",
    },
    {
      id: 3,
      title: "Mem 3",
      upvotes: 6,
      downvotes: 0,
      img: "path/to/image3.png",
    },
    {
      id: 4,
      title: "Mem 4",
      upvotes: 6,
      downvotes: 0,
      img: "path/to/image4.png",
    },
  ],
};

export const memeReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_UPVOTE": {
      const index = state.memes.findIndex((mem) => mem.id === action.payload);
      const newMemes = [...state.memes];
      newMemes[index].upvotes + 1;
      return {
        ...state,
        memes: newMemes,
      };
    }
    case "ADD_DOWNVOTE": {
      const index = state.memes.findIndex((mem) => mem.id === action.payload);
      const newMemes = [...state.memes];
      newMemes[index].downvotes + 1;
      return {
        ...state,
        memes: newMemes,
      };
    }
    default:
      return state;
  }
};
