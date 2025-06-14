import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/Login.tsx"),
  route("about", "routes/About.tsx"),
  route("post/:postId?", "routes/Post.tsx"),

  //Nested routes
  layout("routes/layouts/Dashboard.tsx", [
    ...prefix("pedro", [
      route("finances", "routes/Finances.tsx"),
      route("personal-info", "routes/PersonalInfo.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
