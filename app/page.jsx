"use client";

import Presentation from "@/components/Presentation/Presentation";
import RecentPosts from "@/components/RecentPosts/RecentPosts";
import { useEffect, useState } from "react";

const Home = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/serjsouzar/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);

  return (
    <>
      {repos !== null ? (
      <>
      <Presentation />
      <RecentPosts repo={repos} />
      </>
    ) : (
      <>
      </>
    )};
      </>
)};

export default Home;
