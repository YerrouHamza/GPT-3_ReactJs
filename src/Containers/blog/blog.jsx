import React from 'react'

/* Get the component */
import {Article} from '../../Components/index';

/* Get style */
import './blog.css'

/* get the blog pictures */
import { ImageBlock_A, ImageBlock_B_1, ImageBlock_B_2, ImageBlock_B_3, ImageBlock_B_4 } from './imports'

const Blog = () => {
    return (
        <div id='blog' className='gpt3__blog section__padding'>
            <div className='gpt3__blog-titel'>
                <h2 className='gradient__text'>
                    <span>A lot is happening,</span> 
                    <span>We are blogging about it.</span>
                </h2>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container__blockA'>
                    <Article imgBlock={ImageBlock_A} date='Sep 26, 2021' titel='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>

                <div className='gpt3__blog-container__blockB'>
                    <Article imgBlock={ImageBlock_B_1} date='Sep 26, 2021' titel='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imgBlock={ImageBlock_B_2} date='Sep 26, 2021' titel='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imgBlock={ImageBlock_B_3} date='Sep 26, 2021' titel='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imgBlock={ImageBlock_B_4} date='Sep 26, 2021' titel='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
            </div>
        </div>
    )
}

export default Blog;
