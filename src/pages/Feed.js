import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import Post from "../components/Post";
import { Skeleton } from "@mui/material";
import axios from "axios";
const Feed = observer(() => {
  const { feed } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // axios
    // .request(optionTrendingFeed)
    // .then((response) => {
    //   feed.setPosts(response.data);
    //   localStorage.setItem("TrendingFeed", JSON.stringify(response.data));
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    // .finally(() => setLoading(false));
    //-----------------
    feed.setPosts(JSON.parse(localStorage.getItem("TrendingFeed")));
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (loading)
    return (
      <Skeleton
        className="m-auto"
        variant="rectangular"
        width={"30em"}
        height={"45em"}
      />
    );
  if (!feed.posts.length)
    return (
      <Container>
        <h2>Error</h2>
      </Container>
    );
  return (
    <Container className="d-flex flex-column align-items-center">
      {feed.posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </Container>
  );
});

export default Feed;
