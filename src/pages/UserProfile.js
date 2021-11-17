import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Context } from "..";
import { handleNumber } from "../utils/handleNumber";
import { FiPlay } from "react-icons/fi";
import { UserInfo } from "../components/UserInfo";
const UserProfile = observer(() => {
  const { user, feed } = useContext(Context);

  if (!user.userInfo.user)
    return (
      <Container>
        <h2>Error</h2>
      </Container>
    );
  return (
    <Container className="d-flex flex-column align-items-center text-center">
      <UserInfo />

      <Row style={{ borderTop: "1px solid grey" }} className="p-5">
        {feed.posts.map((post) => {
          return (
            <Col md={4} key={post.id}>
              <Container style={{ backgroundColor: "black" }}>
                <ReactPlayer
                  width={"100%"}
                  name="media"
                  url={post.videoUrl}
                  poster={
                    post.covers.dynamic ||
                    post.covers.origin ||
                    post.covers.default
                  }
                ></ReactPlayer>
              </Container>
              <Container
                className="d-flex flex-row justify-content-center position-relative bottom-50"
                style={{ color: "white" }}
              >
                <FiPlay size="2em" />
                <h3>{handleNumber(post.playCount)}</h3>
              </Container>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
});
export default UserProfile;
