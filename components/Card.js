import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const Card = ({ post, onFavoriteToggle }) => {
  const {
    id,
    publisher,
    publisherImage,
    image,
    description,
    tags,
    commentsNum,
  } = post;

  const router = useRouter();
  const favoritePosts = JSON.parse(localStorage.getItem("favoritePosts")) || [];

  // State for tracking favorite status and heart click
  const [isFavorite, setIsFavorite] = useState(favoritePosts.includes(id));
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  // Handle heart click
  const handleHeartClick = () => {
    onFavoriteToggle(id);
    setIsHeartClicked(!isHeartClicked);
  };

  // Effect to update favorite status and reset heart click on post change
  useEffect(() => {
    setIsFavorite(favoritePosts.includes(id));
    setIsHeartClicked(false);
  }, [id, favoritePosts]);

  return (
    <div className={styles.card}>
      <div className={styles.userInfo}>
        <img src={publisherImage} alt={description} />
        <p className={styles.publisher}>{publisher}</p>
      </div>
      <img src={image} alt={description} />
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className={styles.actions}>
        {/* Favorite button */}
        <button
          onClick={handleHeartClick}
          className={`${styles.favorite} ${isFavorite ? styles.active : ""}`}
        >
          <FontAwesomeIcon
            icon={faHeart}
            color={isFavorite ? "red" : "#c2e7d9"}
            className={`${styles.favoriteIcon} ${
              isFavorite ? styles.redHeart : styles.whiteHeart
            }`}
          />
        </button>

        {/* Comments */}
        <span className={styles.comments}>
          <i className={styles.commentIcon}>
            <FontAwesomeIcon icon={faComment} />
          </i>{" "}
          {commentsNum}
        </span>
      </div>
    </div>
  );
};

export default Card;
