import { createWebHistory, createRouter } from "vue-router";

import HomePage from "./components/page/HomePage.vue";
import ExplorePage from "./components/page/Explore.vue";
import ProfilePage from "./components/page/Profile.vue";
import ExploreRelease from "./components/page/ExploreRelease.vue";

import PostContent from "./components/content/PostContent.vue";
import ViewPost from "./components/content/ViewPost.vue";

import ReleaseContent from "./components/content/ReleaseContent.vue";
import ViewRelease from "./components/content/ViewRelease.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "HomePage", component: HomePage },
  { path: "/explore", name: "ExplorePage", component: ExplorePage },
  { path: "/releases", name: "ExploreRelease", component: ExploreRelease },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
    children: [
      {
        path: "posts",
        name: "PostContent",
        component: PostContent,
        children: [{ path: "post", name: "ViewPost", component: ViewPost }],
      },
      {
        path: "releases",
        name: "ReleaseContent",
        component: ReleaseContent,
        children: [
          { path: "release", name: "ViewRelease", component: ViewRelease },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
