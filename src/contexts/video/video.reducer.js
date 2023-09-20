export const initialState = {
  isOpen: false,
  url: "",
  imgUrl: "",
  imgUrls: [],
  startIndex: 0,
};

export function reducer(state, { type, url, imgUrls, startIndex, imgUrl }) {
  switch (type) {
    case "SET_OPEN":
      return {
        ...state,
        isOpen: true,
        url,
      };
    case "SET_OPEN_IMAGE":
      return {
        ...state,
        isOpen: true,
        imgUrl,
      };
    case "SET_OPEN_LIGHTBOX":
      return {
        ...state,
        isOpen: true,
        imgUrls,
        startIndex,
      };
    case "SET_CLOSE":
      return {
        ...state,
        isOpen: false,
        url: "",
        urls: [],
        startIndex: 0,
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
