export default async function getPosts() {
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
      });
      const posts = await response.json();
      return posts.data;
    } catch (error) {
      console.log(error);
    }
  }