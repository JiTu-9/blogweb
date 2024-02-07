import React from 'react'
import EditorJs from '@editorjs/editorjs'
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
import Quote from '@editorjs/quote'; 
import Marker from '@editorjs/marker'; 
import Embed from '@editorjs/embed'; 
import CheckList from '@editorjs/checklist'; 

const WritePost = () => {

    const editor = new EditorJs({
        holder: 'editorjs',


        autofocus:true,
        tools: {
            embed: Embed,
            list: List,
            image: Image,
            header: Header,
            quote: Quote,
            marker: Marker,
            checklist: CheckList,
           
            // ...
          },
        
          /**
           * Previously saved data that should be rendered
           */
          data: {}

    })
    console.log(editor);
  return (
        <div id="editorjs" className='border border-red-600 bg-green-50 h-10' ></div>
    )
}

export default WritePost