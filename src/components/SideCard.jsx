import React from 'react';

import Styles from "./sidecard.module.css"

const SideCard = ({data:{title,image}}) => {
    return (
        <div className={Styles.card}>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default SideCard;