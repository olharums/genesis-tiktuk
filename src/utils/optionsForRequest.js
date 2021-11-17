const rapidapiKey = "b5686cec39msh3836917bb9e97b8p1f83b9jsn7a36a435dd53";

export const optionUserFeed = {
  method: "GET",
  url: "https://tiktok33.p.rapidapi.com/user/feed/dave.xp",
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": rapidapiKey,
  },
};
export const optionUserInfo = {
  method: "GET",
  url: "https://tiktok33.p.rapidapi.com/user/info/dave.xp",
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": rapidapiKey,
  },
};
export const optionTrendingFeed = {
  method: "GET",
  url: "https://tiktok33.p.rapidapi.com/trending/feed",
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": rapidapiKey,
  },
};
export const optionVideoInfo = {
  method: "GET",
  url: "https://tiktok33.p.rapidapi.com/video/info",
  params: { video_url: "https://vm.tiktok.com/ZMeb45Cv2/" },
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": rapidapiKey,
  },
};
