import { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "..";
import { handleNumber } from "../utils/handleNumber";
import { BiLink } from "react-icons/bi";
import { useLocation } from "react-router";
import { PROFILE_ROUTE } from "../utils/consts";

export const UserInfo = ({ info }) => {
  const { user } = useContext(Context);
  const [subsribed, setSubscribed] = useState(false);
  const location = useLocation();
  return (
    <Container className="d-flex flex-column align-items-center text-center">
      <Row className="m-3 p-2">
        <Col>
          <img
            style={{ borderRadius: "10em" }}
            width="25%"
            src={(info && info.avatar) || user.userInfo.user.avatarLarger}
            alt="userAvatar"
          />
          <h2>@{(info && info.name) || user.userInfo.user.uniqueId}</h2>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h3>
            {handleNumber(
              (info && info.following) || user.userInfo.stats.followingCount
            )}
          </h3>
          <h4 style={{ color: "grey" }}>Підписки</h4>
        </Col>
        <Col
          style={{
            borderLeft: "1px solid grey",
            borderRight: "1px solid grey",
          }}
          className="mx-3"
        >
          <h3>
            {handleNumber(
              (info && info.fans) || user.userInfo.stats.followerCount
            )}
          </h3>
          <h4 style={{ color: "grey" }}>Підписники</h4>
        </Col>
        <Col>
          <h3>
            {handleNumber(
              (info && info.heart) || user.userInfo.stats.heartCount
            )}
          </h3>
          <h4 style={{ color: "grey" }}>Вподобання</h4>
        </Col>
      </Row>
      {!(location.pathname === PROFILE_ROUTE) && (
        <Row>
          <button
            onClick={() => setSubscribed(!subsribed)}
            style={{ width: "25em", height: "5em" }}
            className={"m-4 " + (subsribed ? "unsubsrButton" : "subsrButton")}
          >
            <h3> {subsribed ? "Відписатися" : "Підписатися"}</h3>
          </button>
        </Row>
      )}
      <Row>
        <h4>{(info && info.signature) || user.userInfo.user.signature}</h4>
        <div
          className="bioLink"
          hidden={!(location.pathname === PROFILE_ROUTE)}
        >
          <a
            href={"https://www." + user.userInfo.user.bioLink.link}
            target="_blank"
          >
            {" "}
            <h4>
              <BiLink size="1.5em" />
              {user.userInfo.user.bioLink.link}
            </h4>
          </a>
        </div>
      </Row>
    </Container>
  );
};
