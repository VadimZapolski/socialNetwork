import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Posts';
import { reduxForm, Field } from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../utils/validators/validators';
import {Textarea} from '../../Common/FormControls/FormControls';

const maxLength10= maxLengthCreator(10)

const MyPosts = (props: any) => {

    let postsElements =
        props.posts.map((props: { message: string; likeCount: number; }) =>
            <Post message={props.message} likeCount={props.likeCount}/>);

    let newPostElement: any = React.createRef();

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
}

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts;
