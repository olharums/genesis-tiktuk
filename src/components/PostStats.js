import { BsHeartFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { handleNumber } from "../utils/handleNumber";
import { useState } from "react";
import { Container } from "react-bootstrap";

const PostStats = ({ post, RefToOtherUser }) => {
  const [liked, setLiked] = useState(false);
  const handleLike = (e) => {
    e.stopPropagation();
    if (liked) {
      post.diggCount--;
    } else {
      post.diggCount++;
    }
    setLiked(!liked);
  };
  return (
    <Container className="d-flex flex-column" style={{ width: "fit-content" }}>
      <a href="#" className="mb-5" onClick={RefToOtherUser}>
        <img
          width="55px"
          height="55px"
          className="userIcon"
          alt="userIcon"
          src={
            (post.authorMeta && post.authorMeta.avatar) ||
            "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
          }
        />
      </a>

      <BsHeartFill
        size={"3em"}
        style={{
          color: liked ? "red" : "white",
          cursor: "pointer",
        }}
        onClick={handleLike}
      />
      <h5 className="mb-5" style={{ color: "white" }}>
        {handleNumber(post.diggCount)}
      </h5>
      <AiOutlineComment
        size={"3em"}
        style={{ color: "white", cursor: "pointer" }}
      />
      <h5 className="mb-5" style={{ color: "white" }}>
        {handleNumber(post.commentCount)}
      </h5>
      <FaShare size="3em" style={{ color: "white", cursor: "pointer" }} />
      <h5 className="mb-5" style={{ color: "white" }}>
        {handleNumber(post.shareCount)}
      </h5>
    </Container>
  );
};
export default PostStats;
