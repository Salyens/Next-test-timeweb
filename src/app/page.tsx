import MainPage from "@/components/MainPage";

const Home = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return (
    <MainPage posts={posts} />
  );
};

export default Home;
