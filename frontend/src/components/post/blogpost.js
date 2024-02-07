import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlogPost = ({ pic, logo, title, username, views, time }) => {
    return (
        <div className='p-5 flex border'>
            <div className=' w-[300px] h-[200px]'>{pic || <Skeleton className='h-full' />}</div>
            <div className='px-5  border-red w-full'>
                <div className='box-border w-full'>
                    <div className='title '>{title || <Skeleton className='h-[25px]' />}</div>
                    <div className='description p-3 '>{username || <Skeleton count={3} />}</div>
                    <div className='flex'>
                        <div className='w-[60px]'>{logo || <Skeleton className='h-[60px] w-[60px] rounded-xl' />}</div>
                        <div className='p-5 w-full'>
                            <p className=''>{views || <Skeleton />}</p>
                            <p className=''>{time || <Skeleton />}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BlogPost