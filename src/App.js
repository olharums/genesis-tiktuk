import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import "./App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import axios from "axios";
import {
  optionUserFeed,
  optionUserInfo,
  optionVideoInfo,
  optionTrendingFeed,
} from "./utils/optionsForRequest";
import { userFeed } from "./user-feed";
import { ProfileSkeleton } from "./components/ProfileSkeleton";
const App = observer(() => {
  const [loading, setLoading] = useState(true);
  const { feed, user } = useContext(Context);
  useEffect(() => {
    // axios
    //   .request(optionUserFeed)
    //   .then((response) => {
    //     localStorage.setItem("UserFeed", JSON.stringify(response.data));
    // user.setUserFeed(JSON.parse(localStorage.getItem("UserFeed")));
    user.setUserFeed(userFeed);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // axios
    //   .request(optionUserInfo)
    //   .then((response) => {
    //     localStorage.setItem("UserInfo", JSON.stringify(response.data));
    user.setUserInfo(JSON.parse(localStorage.getItem("UserInfo")));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // .finally(() => setLoading(false));

    feed.setPosts(JSON.parse(localStorage.getItem("TrendingFeed"))); // shouldn't be here but the profile page requires this data

    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (loading) {
    return <ProfileSkeleton />;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
