import React, {ChangeEvent, useState} from 'react';
import style from './ProFileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusHook from './ProfileStatusHook';
import userPhoto from '../../../assets/images/user.png';
import {profileType} from '../../../types/types';
import ProfileDataForm from './ProfileDataForm';

type ProFileInfoType = {
    profile: profileType | null
    status: string
    updateStatus: (newStatus: string) => void
    isOwner: any
    savePhoto: any
}

const ProFileInfo = (props: ProFileInfoType) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return <div>
        <div className={style.descriptonBlock}>

            <img className={style.mainPhoto}
                 src={props.profile.photos.large || userPhoto}/>
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

            { editMode ? <ProfileDataForm profile={props.profile}/> :
                <ProfileData profile={props.profile}
                             isOwner={props.isOwner}
                             goToEditMode={ () => {setEditMode(true)}}/> }

            <ProfileStatusHook status={props.status}
                               updateStatus={props.updateStatus}/>
        </div>
    </div>
}
type ProfileDataType = {
    profile: profileType
    isOwner? : any
    goToEditMode? : any
}

const ProfileData = (props: ProfileDataType) => {
    return <div>
        <div>
            {props.isOwner && <button onClick={props.goToEditMode}>edit</button> }
        </div>
        <div>
            <b>FullName</b>: {props.profile.fullName}
        </div>
        <div>
            <b>Looking For A job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>

        <div>
            <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
        </div>

        {/*<div>*/}
        {/*    <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key =>{*/}
        {/*      return  <Contact key={key} contactTitle={key} contactValue={props.profile?.contacts[key]}/>*/}
        {/*})}*/}
        {/*</div>*/}
    </div>
}


// const Contact = (contactTitle:any , contactValue: Array<contactsType>) => {
//     return <div>
//         <b>{contactTitle}</b> : {contactValue}
//     </div>
// }

export default ProFileInfo;