import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Posts';



const MyPosts = (props: any) => {


    let postsElements =
        props.posts.map((props: { message: string; likeCount: number; }) =>
            <Post message={props.message} likeCount={props.likeCount}/>);

    let newPostElement: any = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text) ;
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
