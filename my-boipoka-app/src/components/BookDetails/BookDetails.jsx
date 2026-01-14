import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const {id}=useParams();
// console.log(id) 
const bookId=parseInt(id);
    const data=useLoaderData();
    // console.log(data);
    const singleBook=data.find(book=>book.bookId===bookId);
    // console.log(singleBook);
    // console.log(typeof id,data);
   const {bookName,image} =singleBook || {};
    const handleMarkAsRead=id=>{
        //store with id
        //where to store
        //array or collection
        //if book already exist then show a alert
        // if book not exist then push in the collection or array
          addToStoredDB(id)
    }
    return (
        <div className=' w-2/3 mx-auto'>
         <img className='w-48' src={image} alt="" />
         <h4>{bookName}</h4>
         <button onClick={()=>handleMarkAsRead(id)} className='btn btn-accent m-2'>Mar as Read</button>
         <button className='btn btn-info m-2'>Add To WishList</button>
        </div>
    );
};

export default BookDetails;
