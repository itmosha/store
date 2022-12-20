import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';


const HeroBanner = ({ heroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="hero-banner-small-text">{ heroBanner.smallText }</p>
                <h3 className="hero-banner-mid-text">{ heroBanner.midText }</h3>
                <h1 className="hero-banner-large-text">{ heroBanner.largeText1 }</h1>
                <img src={ urlFor(heroBanner.image) } alt="" className="hero-banner-image" />

                <div>
                    <Link href="/product/item-1">
                        <button type="button">{ heroBanner.buttonText }</button>
                    </Link>
                    <div className="hero-banner-desc">
                        <h5>ОПИСАНИЕ</h5>
                        <p>{ heroBanner.desc }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner