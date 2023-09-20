export default async function getSinglePost(id:string) {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
      });
      const post = await response.json();
      console.log("post",post.data);
      return post.data;
    } catch (error) {
      console.log(error);
    }
  }