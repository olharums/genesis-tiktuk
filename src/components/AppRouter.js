import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "..";
import { appRoutes } from "../routes";
import { PROFILE_ROUTE } from "../utils/consts";
const AppRouter = observer(() => {
  const { user } = useContext(Context);
  return (
    <Switch>
      {user.isAuth &&
        appRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} component={Component} exact />;
        })}
      <Redirect to={PROFILE_ROUTE} />
    </Switch>
  );
});
export default AppRouter;
