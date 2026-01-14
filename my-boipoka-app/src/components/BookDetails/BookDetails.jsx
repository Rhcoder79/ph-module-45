import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id}=useParams();
// console.log(id) 
const bookId=parseInt(id);
    const data=useLoaderData();
    // console.log(data);
    const singleBook=data.find(book=>book.bookId===bookId);
    // console.log(singleBook);
    // console.log(typeof id,data);
   const {bookName,image} =singleBook;
    return (
        <div>
         <img className='w-48' src={image} alt="" />
         <h4>{bookName}</h4>
        </div>
    );
};

export default BookDetails;