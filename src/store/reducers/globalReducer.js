const initialState = {
  memes: [
    {
      id: 1,
      title: 'Wróbel sąsiada',
      upvotes: 6,
      downvotes: 0,
      img: 'images/memes/image1.webp',
      value: 2,
    },
    {
      id: 2,
      title: 'Budowlańcy',
      upvotes: 1,
      downvotes: 2,
      img: 'images/memes/image2.webp',
      value: 2,
    },
    {
      id: 3,
      title: 'Za co $?',
      upvotes: 6,
      downvotes: 0,
      img: 'images/memes/image3.webp',
      value: 2,
    },
    {
      id: 4,
      title: 'Yoda',
      upvotes: 6,
      downvotes: 0,
      img: 'images/memes/image4.webp',
      value: 2,
    },
  ],
};

export const memeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPVOTE': {
      const index = state.memes.findIndex(
        (mem) => mem.title === action.payload
      );
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
    case 'DOWNVOTE': {
      const index = state.memes.findIndex(
        (mem) => mem.title === action.payload
      );
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
    case 'CHANGE_RATING': {
      const index = state.memes.findIndex(
        (mem) => mem.title === action.payload.title
      );
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
    case 'ADD_MEME': {
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
