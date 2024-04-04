import React, { useState } from 'react'

import {books as bookData } from "../constants/mockData"
import BookCards from './BookCards'
import SideCard from './SideCard'
import styles from "./books.module.css"
import SearchBox from './SearchBox'
function Books() {
    const [book,setBook]=useState(bookData)
    const[saveLike ,setSaveLike]=useState([])
    const[search ,setSearch]=useState([])

    const handleLikedList=(book,status)=>{
        if(status){
            const newLikeList=saveLike.filter((i)=>i.id !==book.id);
            setSaveLike(newLikeList);
        }else{
            setSaveLike([...saveLike, book]);
        }
    }
    const searchHandler=()=>{
        if(search){
            const newbook=bookData.filter(book=>book.title.toLowerCase().includes(search));
            setBook(newbook)
        }else{
            setBook(bookData)
        }

    }
    return (
        <>
        <SearchBox search={search}  setSearch={setSearch} searchHandler={searchHandler}/>
        <div className={styles.container}>
            <div className={styles.cards}>
                {book.map(book => (
                    <BookCards key={book.id} data={book} handleLikedList={handleLikedList}/>
                    ))}

            </div>
            <div className={styles.favorite}>
                <h4>favorites</h4>
            {!!saveLike.length&&<div>{saveLike.map((book)=><SideCard key={book.id} data={book}/>)}</div>}
            </div>
        </div>
                    </>
    )
}

export default Books