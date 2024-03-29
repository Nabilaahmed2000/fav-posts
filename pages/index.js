import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import styles from "../styles/Pages.module.scss";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [favoritePosts, setFavoritePosts] = useState([]);

  useEffect(() => {
    fetchData();
    loadFavoritePostsFromStorage();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/posts");
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadFavoritePostsFromStorage = () => {
    if (typeof window !== "undefined") {
      const storedFavoritePosts =
        JSON.parse(localStorage.getItem("favoritePosts")) || [];
      setFavoritePosts(storedFavoritePosts);
    }
  };

  const handleFavoriteToggle = (postId) => {
    const updatedFavoritePosts = favoritePosts.includes(postId)
      ? favoritePosts.filter((id) => id !== postId)
      : [...favoritePosts, postId];

    setFavoritePosts(updatedFavoritePosts);
    localStorage.setItem("favoritePosts", JSON.stringify(updatedFavoritePosts));
  };

  return (
    <div className={styles.container}>
      <h1>Posts Listing</h1>
      <div className={styles.cardContainer}>
        {posts.map((post) => (
          <Card
            key={post.id}
            post={post}
            isFavorite={favoritePosts.includes(post.id)}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

