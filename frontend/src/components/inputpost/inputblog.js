import React, {  useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Embed from '@editorjs/embed';
import CheckList from '@editorjs/checklist';
import ImageTool from '@editorjs/image';


const PostForm = () => {

    const editor = new EditorJS({
        holder: 'editorjs',
        placeholder: 'Enter your text here',
        tools: {
            embed: Embed,
            list: List,
            image: {
                class: ImageTool,
                config: {

                    uploader: {
                        /**
                         * Upload file to the server and return an uploaded image data
                         * @param {File} file - file selected from the device or pasted by drag-n-drop
                         * @return {Promise.<{success, file: {url:String}}>}
                         */
                        uploadByFile(file) {
                            // your own uploading logic here
                            const formData = new FormData();
                            formData.append('image', file);

                            return fetch('http://localhost:3000/upload', {
                                method: 'POST',
                                body: formData
                            })
                                .then(response => response.json())
                                .then(result => {
                                    return {
                                        success: 1,
                                        file: {url : result.url}
                                    };
                                });
                        }
                    }
                }
            },
            header: Header,
            quote: Quote,
            marker: Marker,
            checklist: CheckList,
        },
        onChange: async () => {
            await editor.save().then((data) => {
                console.log(data);
            })
        },
    })
    useEffect(() => {
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Post postData to your backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='border border-red-500' id="editorjs" >
                <input type='text' placeholder='Enter your heading here'></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostForm;
