import { Fragment, useEffect, useState } from 'react';

import screenHome from './index.module.scss';

import ScreenNav from './ScreenNav';

function Screen(){

    const dummyImages= [
        {
            image: 'https://img.freepik.com/free-photo/beautiful-scenery-pathway-forest-with-trees-covered-with-frost_181624-42376.jpg?w=1380&t=st=1660550393~exp=1660550993~hmac=0a756bf9cb023485a3676e6e04358d1e0d1f1eef3a742a5d98deaec89e518359', 
            alt: 'forest', 
            title: 'Russia',
            text: 'Over 100km of vehicle roads. Get your Jeep ready!' 
        },
        {
            image: 'https://img.freepik.com/premium-photo/suspension-bridge-top-mountain-squamish_645882-556.jpg?w=1380',
            alt:'bridge',
            title: 'Thailand',
            text: 'Explore the nature you only seen in TV!'
        },
        {
            image: 'https://img.freepik.com/free-photo/beautiful-shot-crystal-clear-lake-snowy-mountain-base-during-sunny-day_181624-5459.jpg?w=1380&t=st=1660550354~exp=1660550954~hmac=e855c3f9086d9deae8fb9c344f1ff2a753ff061fe254d9219d9bba92f5abab6f',
            alt: 'lake',
            title: 'Greece',
            text: 'Beautiful lakes like you have never seen before!'
        }
    ];

    const [currentImage,setCurrentImage] = useState(null);
    const [index,setIndex] = useState(0);

    useEffect( ()=>{ setCurrentImage(dummyImages[0]);},[]);

    useEffect( ()=> {
        setTimeout(() => {
            if( index === 2 ){ setCurrentImage(dummyImages[0]); setIndex(0);} 
            else{ setCurrentImage(dummyImages[index+1]); setIndex(index + 1);}
        }, 5000);
    },[dummyImages,index]);

    return (
        <Fragment>
            <ScreenNav />
            <section className={screenHome.screenContainer}>
                <div className={screenHome.screen}>
                    <img alt={currentImage?.alt} src={currentImage?.image}/>
                    <div>
                        <h1>{currentImage?.title}</h1>
                        <p>{currentImage?.text}</p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Screen;