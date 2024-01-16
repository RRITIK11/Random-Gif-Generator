import React, { useEffect, useState } from 'react'
import axios from 'axios';
const API_KEY = '01uHKEyA8WqCC1eSdZjeKaJMUmgREGWg';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useGif(){
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(true);

    async function fetchData(title){ 
        setLoading(true);
        const {data} = await axios.get(title ? `${url}&tag=${title}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    
    useEffect(()=>{
        fetchData();
    },[])

    return {gif , loading , fetchData};
}