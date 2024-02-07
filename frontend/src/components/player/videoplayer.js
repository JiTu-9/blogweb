import React from 'react'
import VideoPost from '../post/videopost'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const VideoPlayer = () => {
    return (
        <div className=' w-full h-auto relative '>
            <div className='p-2 sm:p-5 w-full sm:w-[75%]  inline-block align-top'>
                <div className='w-full'>
                    <div className=' border video-player w-full h-[250px] sm:h-[350px] md:h-[450px]'><Skeleton className='h-full w-full' /></div>
                    <div className='flex p-5'>
                        <div className='w-[10%] h-[60px]'><Skeleton className='h-full w-full' /></div>
                        <div className='w-[40%] p-2'>
                            <div><Skeleton className=' w-full' /></div>
                            <div><Skeleton className=' w-full' /></div>
                        </div>
                        <div className='w-[40%] p-2'>
                            <div><Skeleton className=' w-full' /></div>
                            <div><Skeleton className=' w-full' /></div>
                        </div>
                    </div>
                </div>
                <div>Comments</div>
            </div>
            <div className=' border w-full sm:w-[25%] inline-block align-top'>
                <VideoPost display='block' />
                <VideoPost display='block' />
                <VideoPost display='block' />

            </div>
        </div>
    )
}

export default VideoPlayer
