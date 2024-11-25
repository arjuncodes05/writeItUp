import React from 'react'
import PostInDB from '../Appwrite/posts';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import noImg from "../assets/noImg.png"

function BlogPostCard({post}) {
  
  return (
    <Link to='/blog' state={{postData: post}}
      className='bg-white flex gap-5 hover:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md items-center border p-5 my-5 lg:w-4/6 w-full h-auto sm:h-[125px] cursor-pointer overflow-hidden'>
          <div className='lg:w-[25%] w-[200px] overflow-hidden'>
              {
                post.imageId ? 
                <img className='h-full' src={PostInDB.getFilePreview(post.imageId)} alt="" />
                : <img className='opacity-20 p-6' src={noImg} alt="" />
              }
          </div>
          <div className='flex flex-col gap-1 w-full'>
              <h4 className='sm:text-md text-sm font-semibold text-red-600'>{post.category}</h4>
              <div>
                  <h2 className='sm:text-lg text-md font-bold'>{post.title}</h2>
                  <p className='sm:text-sm text-xs pt-1 font-semibold'>Published on: {new Date(post.$createdAt).toLocaleDateString()}</p>
              </div>
          </div>
    </Link>
  )
}

export default BlogPostCard;