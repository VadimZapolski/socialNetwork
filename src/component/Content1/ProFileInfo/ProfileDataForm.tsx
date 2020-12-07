import React from 'react';
import {profileType} from '../../../types/types';

type ProfileDataFormType = {
    profile: profileType
}
const ProfileDataForm = (props: ProfileDataFormType) => {
    return <form>
        <div>
            {/*{props.isOwner && <button onClick={props.goToEditMode}>edit</button> }*/}
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
    </form>
}
export default ProfileDataForm