import React from 'react'
import "./MenuItem.scss";

export default function MenuItem({ title, id, imageUrl, size })
{

    return (
        <div className={`${size} menu-item`}>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image"></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

