import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import styles from "../styles/Pages.module.scss";
import axios from "axios";

const Favorites = () => {
  // State for favorite posts and post details
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [favoritePostDetails, setFavoritePostDetails] = useState([]);

  // Fetch stored favorite posts on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFavoritePosts =
        JSON.parse(localStorage.getItem("favoritePosts")) || [];
      setFavoritePosts(storedFavoritePosts);
    }
  }, []);

  // Fetch post details on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        setFavoritePostDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Handle favorite toggle
  const handleFavoriteToggle = (postId) => {
    const updatedFavoritePosts = favoritePosts.includes(postId)
      ? favoritePosts.filter((id) => id !== postId)
      : [...favoritePosts, postId];

    setFavoritePosts(updatedFavoritePosts);
    localStorage.setItem("favoritePosts", JSON.stringify(updatedFavoritePosts));
  };

  // Filter and display favorite posts
  const favoritePostIds = new Set(favoritePosts);
  const favoritePostsToDisplay = favoritePostDetails.filter((post) =>
    favoritePostIds.has(post.id)
  );

  return (
    <div className={styles.container}>
      <h1>Favorites</h1>
      <div className={styles.cardContainer}>
        {favoritePostsToDisplay.map((post) => (
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

export default Favorites;
