export default async function getSinglePost(id:string) {
    const url=process.env.NEXT_BASE_URL;
    try {
      const response = await fetch(`/api/posts/${id}`, {
        cache: "no-store",
      });
      const post = await response.json();
      console.log("post",post.data);
      return post.data;
    } catch (error) {
      console.log(error);
    }
  }