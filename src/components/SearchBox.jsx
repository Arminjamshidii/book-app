import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
 import styles from "./searchbox.module.css"

const SearchBox = ({search,setSearch,searchHandler}) => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="search..." value={search} onChange={event=>setSearch(event.target.value.toLowerCase())}/>
            <button onClick={searchHandler}>
                <IoSearchSharp />
                </button>
        </div>
    );
};

export default SearchBox;