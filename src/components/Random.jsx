import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = '01uHKEyA8WqCC1eSdZjeKaJMUmgREGWg';

export default function Random() {

    const {gif , loading , fetchData} = useGif('');
    return (
        <div className='border-2 border-black bg-green-500 rounded-xl flex flex-col items-center w-1/2 min-h-[200px] justify-between p-6 gap-3'>
            <h1 className='underline font-bold text-[24px] uppercase'>A Random Gif</h1>
            {   
                loading? (<Spinner/>)
                : (<img className='rounded-xl' src={gif} width={450} loading='lazy'/>)

            }
            <button onClick={() => fetchData()}
                className='w-11/12 rounded-lg bg-green-100 p-2 text-[18px] font-semibold uppercase'>Generate</button>
        </div>
    )
}