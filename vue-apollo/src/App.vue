<script setup lang="ts">
import { ref } from "vue";
const books = ref([]);

import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

const fetchBooks = async () => {
  const { result } = useQuery(gql`
  query {
    books {
      title
      author
    }
  `);
}x
//   const resp = await fetch("http://localhost:4000", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query: `query {
//         books {
//           title
//           author
//         }
//       }`,
//     }),
//   });

//   const { data } = await resp.json();
//   books.value = data.books;
// };

// fetchBooks();
</script>

<template>
  <h1>Fetchを利用したGraphQLへのアクセス</h1>
  <ul>
    <li v-for="(book, index) in result.books" :key="index">
      {{ book.title }}/{{ book.author }}
    </li>
  </ul>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
