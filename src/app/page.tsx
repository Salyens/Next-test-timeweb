import MainPage from "@/components/MainPage";

const Home = () => {
  const posts = [
    { id: 1, title: "Post 1", body: "Body 999" },
    { id: 2, title: "Post 2", body: "Body 5" },
    { id: 3, title: "Post 3", body: "Body 6" },
  ];
  return <MainPage posts={posts} />;
};

export default Home;
