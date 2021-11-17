import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import PostStats from "./PostStats";
import PostMusicInfo from "./PostMusicInfo";
import { useHistory } from "react-router";
import { FEED_ROUTE } from "../utils/consts";
const Post = observer(({ post }) => {
  const date = new Date(post.createTime);

  const [toPlay, setToPlay] = useState(false);
  const [display, setDisplay] = useState("");

  const history = useHistory();

  const heightDesc = post.text
    ? post.text.length === 0
      ? 30
      : post.text.length <= 40
      ? 80
      : post.text.length <= 70
      ? 80
      : 130
    : 30;

  const RefToOtherUser = () => {
    history.push(FEED_ROUTE + "/" + post.authorMeta.id);
  };
  return (
    <div
      className="row d-flex flex-column justify-content-center"
      style={{ display: { display } }}
      onMouseEnter={(e) => {
        setToPlay(true);
      }}
      onMouseLeave={(e) => {
        setToPlay(false);
      }}
      onClick={(e) => {
        setToPlay(!toPlay);
      }}
    >
      <Col
        className="align-items-center"
        style={{ width: "fit-content", marginBottom: "-35em" }}
      >
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <ReactPlayer
            id={"player" + post.id}
            name="media"
            height={"45em"}
            playing={toPlay}
            onEnded={() => {
              window.scrollBy(0, window.innerHeight + 40);
            }}
            onError={(e) => {
              setDisplay("none");
            }}
            url={post.videoUrl}
            poster={
              post.covers
                ? post.covers.dynamic ||
                  post.covers.origin ||
                  post.covers.default
                : ""
            }
          ></ReactPlayer>
        </Row>
        <Row
          style={{
            width: "420px",
            position: "relative",
            top: -heightDesc - 70 + "px",
            left: "7rem",
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          <h5>
            <a className="userName" href="#" onClick={RefToOtherUser}>
              @{post.authorMeta && post.authorMeta.name}
            </a>{" "}
            &nbsp;&bull; {date.toLocaleDateString()}
          </h5>
          <h5
            style={{
              width: (post.videoMeta ? post.videoMeta.width - 30 : 930) + "px",
            }}
          >
            {post.text}
          </h5>
          <PostMusicInfo musicMeta={post.musicMeta} />
          <Container
            className="position-relative"
            style={{
              top: "-40em",
              left: "10em",
            }}
          >
            <PostStats post={post} RefToOtherUser={RefToOtherUser} />
          </Container>
        </Row>
      </Col>
    </div>
  );
});
export default Post;
