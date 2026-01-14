import React, { useEffect, useState } from 'react';
// import { data } from 'react-router';

const Books = () => {
    const [allBooks,setAllBooks]=useState([]);
    useEffect(()=>{
        fetch('booksData.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setAllBooks(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-xl text-center p-6'>ami books </h1>
        </div>
    );
};

export default Books;
