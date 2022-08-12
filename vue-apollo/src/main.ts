import { createApp, h, provide, render } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import "./style.css";
import App from "./App.vue";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(app),
});

app.mount("#app");
