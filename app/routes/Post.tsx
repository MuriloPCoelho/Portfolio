import axios from "axios";
import { useFetcher } from "react-router";
import type { Route } from "./+types/Post";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const postId = params.postId;
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + postId,
  );
  console.log("Post", response);

  return response.data;
}

export async function clientAction({ params }: Route.ClientLoaderArgs) {
  try {
    await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/" + params.postId,
    );

    return { isDeleted: true };
  } catch (_) {
    return { isDeleted: false };
  }
}

const Post = ({ loaderData }: Route.ComponentProps) => {
  const fetcher = useFetcher();
  const idDeleted = fetcher.data?.isDeleted;

  return (
    <div>
      post
      <p>Title: {loaderData.title}</p>
      <p>Body: {loaderData.body}</p>
      <fetcher.Form method="delete">
        <button type="submit">Delete Post</button>
      </fetcher.Form>
    </div>
  );
};

export default Post;
