import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

export default function Tag() {
    const [title, setTitle] = useState("");
    const {gif ,  loading , fetchData} = useGif(title);

    function changeHandler(e){
        e.preventDefault();
        setTitle(e.target.value);
    }

    return (
        <div className='border-2 border-black bg-blue-400 rounded-xl flex flex-col items-center w-1/2 min-h-[200px] justify-between p-6 gap-3'>
            <h1 className='underline font-bold text-[24px] uppercase'>Random {title} Gif</h1>
            {   
                loading? (<Spinner/>)
                : (<img className='rounded-xl' src={gif} width={450} loading='lazy'/>)

            }
            <input
                placeholder='Search Giphy'
                className='w-10/12 rounded-lg bg-blue-100 p-2 text-[18px] text-center'
                onChange={changeHandler}/>
            <button onClick={()=> fetchData(title)}
                className='w-10/12 rounded-lg bg-blue-100 p-2 text-[18px] font-semibold uppercase'>Generate</button>
        </div>
    )
}