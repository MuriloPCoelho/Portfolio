import type { Route } from "./+types/Post";

export async function loader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  return {
    postId,
  };
}

export async function action({ params }: Route.ActionArgs) {}

const Post = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div>
      post
      <p>Post Id: {loaderData.postId}</p>
    </div>
  );
};

export default Post;
