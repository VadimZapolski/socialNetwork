import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Posts';
import {addPost} from "../../../redux/State";


const MyPosts = (props: any) => {
    let postsElements =
        props.posts.map((props: { message: string; likeCount: number; }) =>
            <Post message={props.message} likeCount={props.likeCount}/>);

    let newPostElement: any = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        text = newPostElement.current.value = ' ';
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
