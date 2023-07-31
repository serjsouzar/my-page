import Presentation from "@/components/Presentation/Presentation";
import RecentPosts from "@/components/RecentPosts/RecentPosts";

async function getRepos() {
  const data = await fetch("https://api.github.com/users/serjsouzar/repos")
  const repos = await data.json()
  
  return repos
}


const Home = async () => {

  const repo = await getRepos()

  return (
    <>
      <Presentation />
      <RecentPosts repo={repo}/>
    </>
  );
};

export default Home;
