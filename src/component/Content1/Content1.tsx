import React from 'react';
import ProFileInfo from './ProFileInfo/ProFileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {profileType} from '../../types/types';


type Content1Type = {
    profile: profileType | null
    status: string
    updateStatus: (newStatus: string) => void
    isOwner: any
    savePhoto: any
}

const Content1 = (props: Content1Type) => {


    return <div>
        <ProFileInfo
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}/>

        <MyPostsContainer/>
    </div>
}

export default Content1;