import React from "react";
import style from './ProFileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusHook from './ProfileStatusHook';
import userPhoto from '../../../assets/images/user.png';
import {profileType} from '../../../types/types';

type ProFileInfoType = {
    profile: profileType | null
    status: string
    updateStatus: (newStatus:string) => void
    isOwner: any
    savePhoto: any
}

const ProFileInfo = (props: ProFileInfoType) => {

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return <div>
        {/*<div>*/}
        {/*    <img*/}
        {/*        src='https://yt3.ggpht.com/a/AATXAJw-1Q1rZ2g6vGCRz4_aIKI2v0uIGUkSIL7Ayw=s900-c-k-c0xffffffff-no-rj-mo'/>*/}
        {/*</div>*/}
        <div className={style.descriptonBlock} >
            <img className={style.mainPhoto}
                src={props.profile.photos.large || userPhoto} />
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusHook status={props.status}
                                   updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProFileInfo;