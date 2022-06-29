import React from 'react'

/* Get style */
import './brand.css'

/* get the brand's pictures */
import { googleBrand, slackBrand, atlassianBrand, dropboxBrand, shopifyBrand } from './imports'

const Brand = () => {
    return (
        <div className='gpt3__brand section__padding'>
           <div>
                <img src={googleBrand} alt="Google" />
           </div>
           <div>
                <img src={slackBrand} alt="Slack" />
           </div>
           <div>
                <img src={atlassianBrand} alt="Atlassian" />
           </div>
           <div>
                <img src={dropboxBrand} alt="Dropbox" />
           </div>
           <div>
                <img src={shopifyBrand} alt="Shopify" />
           </div>
        </div>
    )
}

export default Brand
