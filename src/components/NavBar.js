import { useContext } from "react";
import { Context } from "..";
import { useLocation } from "react-router";
import { Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FEED_ROUTE, PROFILE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
const NavBar = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex justify-content-between px-5"
    >
      {user.isAuth && <NavLink to={FEED_ROUTE}>Новини</NavLink>}
      {location.pathname === PROFILE_ROUTE && user.isAuth ? (
        <h3 style={{ color: "white" }}>
          {user.userInfo.user && user.userInfo.user.nickname}
        </h3>
      ) : (
        <Container className="justify-content-center">
          <img
            src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-tiktok-logo-app-trend-1.png"
            width="45"
            height="45"
            alt="App logo"
          />
          <NavLink to={FEED_ROUTE} className="logo">
            TikTuk
          </NavLink>
        </Container>
      )}

      {location.pathname === PROFILE_ROUTE ? (
        user.isAuth ? (
          <Button
            size={"lg"}
            variant="outline-light"
            onClick={() => user.setIsAuth(false)}
          >
            Вийти
          </Button>
        ) : (
          <Button
            size={"lg"}
            variant="outline-light"
            onClick={() => user.setIsAuth(true)}
          >
            Авторизація
          </Button>
        )
      ) : (
        <NavLink to={PROFILE_ROUTE}>Профіль</NavLink>
      )}
    </Navbar>
  );
});
export default NavBar;
