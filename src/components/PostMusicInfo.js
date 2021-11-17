import { Container } from "react-bootstrap";
import { BsMusicNoteBeamed } from "react-icons/bs";
import Marquee from "react-double-marquee";

const PostMusicInfo = ({ musicMeta }) => {
  return (
    <Container className="d-flex flex-row align-items-center">
      <BsMusicNoteBeamed
        size={"1em"}
        style={{
          color: "white",
        }}
      />
      <div
        style={{
          width: "50%",
          whiteSpace: "nowrap",
          marginLeft: "1em",
          marginRight: "6em",
        }}
      >
        <Marquee direction="left">
          {musicMeta && musicMeta.musicName} -{" "}
          {musicMeta && musicMeta.musicAuthor}
        </Marquee>
      </div>

      <img
        className="musicIcon"
        alt="musicIcon"
        src={
          (musicMeta && musicMeta.coverThumb) ||
          "https://img.icons8.com/color/48/000000/music-record--v1.png"
        }
      />
    </Container>
  );
};
export default PostMusicInfo;
