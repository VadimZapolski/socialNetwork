import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Posts';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../utils/validators/validators';
import {Textarea} from '../../Common/FormControls/FormControls';
import {postsType} from '../../../types/types';

const maxLength100= maxLengthCreator(100)

type MyPostsType = {
    posts: Array<postsType>
    addPost:(newPostText: string) => void
}

type postsElementsType = {
    message: string
    likeCount: number
}

const MyPosts = React.memo((props: MyPostsType) => {

    let postsElements =
        props.posts.map((props: postsElementsType) =>
            <Post message={props.message} likeCount={props.likeCount}/>);

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

});

const AddNewPostForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} validate={[requiredField, maxLength100]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts;
