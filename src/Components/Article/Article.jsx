import React from 'react'

/* Get style */
import './article.css'


const Article = ({ imgBlock, titel, date }) => {
    return (
        <div className='gpt3__blog-article'>
            <div className='gpt3__blog-article__image'>
                <img src={imgBlock} alt="" />
            </div>

            <div className='gpt3__blog-article__content'>
                <p>{date}</p>
                <h3>{titel}</h3>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}


export default Article;
