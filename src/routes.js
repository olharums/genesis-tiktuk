import Feed from "./pages/Feed";
import OtherUserProfile from "./pages/OtherUserProfile";
import UserProfile from "./pages/UserProfile";
import { FEED_ROUTE, PROFILE_ROUTE } from "./utils/consts";

export const appRoutes = [
  {
    path: FEED_ROUTE,
    Component: Feed,
  },
  {
    path: PROFILE_ROUTE,
    Component: UserProfile,
  },
  {
    path: FEED_ROUTE + "/:id",
    Component: OtherUserProfile,
  },
];
