import React, { useState } from 'react';
import styles from "./bookCards.module.css"
import { AiFillHeart } from "react-icons/ai";
const BookCards = ({ data,handleLikedList }) => {
    const { title, author, image, language, pages,discription }=data;
    const [like, setLike] = useState(false);
    const likeHandler = () => {setLike(like => !like);
    handleLikedList(data,like)
    }
    return (
        <div className={styles.book_card}>
            <div className={styles.book}>
                <div className={styles.inbook}>
                    <h4 className={styles.title_book}>{title}</h4>
                    <p>author:{author}</p>
                    <div>
                        <p>Language: {language}</p>
                        <p>Pages:{pages}</p>
                    </div>
                </div>
                <div className={styles.cover}>
                    <img src={image} alt={title} />
                </div>
            </div>
            <div className={styles.discript}>
            <h4 className={styles.title}>{title}</h4>
            <p>{discription}</p>
            </div>
            <AiFillHeart fontSize="1.8rem" color={like ? "red" : "#e0e0e0"} onClick={likeHandler} />
        </div>
    );
};

export default BookCards;