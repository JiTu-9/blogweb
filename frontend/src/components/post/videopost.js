import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const VideoPost = ({display, pic, logo, title, username, views, time }) => {
  
  return (
    <div className={`  p-5  inline-block w-[100%] sm:w-[50%] md:w-[33%] lg:w-[25%] `}>
      <div className='w-full h-[200px]'>{pic || <Skeleton className='h-[200px]' />}</div>
      <div className='flex h-[100px]'>
        <div className='user-logo w-[20%] h-[80%] p-2 '>{logo || <Skeleton className='h-full w-full' />}</div>
        <div className='post-details box-border w-[80%] p-2'>
          <div className='title '>{title || <Skeleton />}</div>
          <div className='user-name'>{username || <Skeleton />}</div>
          <div className='flex w-full'>
            <p className='w-[45%]'>{views || <Skeleton />}</p>
            <p className='w-[45%] ml-[10%]'>{time || <Skeleton />}</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default VideoPost