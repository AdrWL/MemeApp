const initialState = {
  memes: [
    {
      id: 1,
      title: "Mem 1",
      upvotes: 6,
      downvotes: 0,
      img: "path/to/image1.png",
      value: 2,
    },
    {
      id: 2,
      title: "Mem 2",
      upvotes: 1,
      downvotes: 2,
      img: "path/to/image2.png",
      value: 2,
    },
    {
      id: 3,
      title: "Mem 3",
      upvotes: 6,
      downvotes: 0,
      img: "path/to/image3.png",
      value: 2,
    },
    {
      id: 4,
      title: "Mem 4",
      upvotes: 6,
      downvotes: 0,
      img: "path/to/image4.png",
      value: 2,
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
    case "CHANGE_RATING": {
      const index = state.memes.findIndex((mem) => mem.title === action.payload.title);
      if (index === -1) return state;

      const newMemes = [...state.memes];
      newMemes[index] = {
        ...newMemes[index],
        value: action.payload.value,
      };
      return {
        ...state,
        memes: newMemes,
      };
    }
    case "ADD_MEME": {
      const newMeme = { ...action.payload, id: state.memes.length + 1 };
      return {
        ...state,
        memes: [...state.memes, newMeme],
      };
    }
    default:
      return state;
  }
};
