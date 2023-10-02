export default async function getPosts() {
    const url=process.env.NEXT_BASE_URL;

    try {
      const response = await fetch(`/api/posts`, {
        cache: "no-store",
      });
      const posts = await response.json();
      return posts.data;
    } catch (error) {
      console.log(error);
    }
  }