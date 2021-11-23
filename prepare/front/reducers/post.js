export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "김씨",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://lh3.googleusercontent.com/proxy/g6-DGALK3QDB-WjJIoriTwm0RqxjqbpKBq1gFCUxSgAo2Yo6qAgk3NlMQTlhJPT_-xa6-piS-W82f0jfk-T8AJziKiGb1kdAjTHTGoP3EE4913ks-F8b1C1A",
        },
        {
          src: "http://image.kmib.co.kr/online_image/2021/0816/2021061319234233848_1623579822_0016172524.jpg",
        },
        {
          src: "https://cdn.gamemeca.com/data_center/149/747/20181212172310.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "이씨",
          },
          content: "우와 쩐당",
        },
        {
          User: {
            nickname: "박씨",
          },
          content: "우와 멋져",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    }

    default:
      return state;
  }
};

export default reducer;
