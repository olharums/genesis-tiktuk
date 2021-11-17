import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import { UserInfo } from "../components/UserInfo";
import { useParams } from "react-router";
const OtherUserProfile = observer(() => {
  const { id } = useParams();

  const { feed } = useContext(Context);
  const user = feed.posts.filter((post) => post.authorMeta.id === id)[0]
    .authorMeta;

  if (!id)
    return (
      <Container>
        <h2>Error</h2>
      </Container>
    );
  return (
    <Container className="d-flex flex-column align-items-center text-center">
      <UserInfo info={user} />
    </Container>
  );
});
export default OtherUserProfile;
