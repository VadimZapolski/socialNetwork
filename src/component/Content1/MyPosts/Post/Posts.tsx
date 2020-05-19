import React from "react";
import s from './Posts.module.css'

type PostType ={
    message: string;
    likeCount: number;
}
const Post = (props: PostType) => {

    return (
        <div className={s.item}>

            <img src='data:image/jpeg;base64,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'/>
            {props.message}
            <img src='https://pngimg.com/uploads/like/like_PNG64.png'/>
            {props.likeCount}
        </div>
    )
}

export default Post;