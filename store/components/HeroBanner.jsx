import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';


const HeroBanner = ({ heroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="banner-small-text">{ heroBanner.smallText }</p>
                <h3>{ heroBanner.midText }</h3>
                <h1>{ heroBanner.largeText1 }</h1>
                <img src={urlFor(heroBanner.image)} alt="" className="hero-banner-image" />

                <div>
                    <Link href="/product/item-1">
                        <button type="button">{ heroBanner.buttonText }</button>
                    </Link>
                    <div className="hero-banner-desc">
                        <h5>* ОПИСАНИЕ *</h5>
                        <p>{ heroBanner.desc }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner