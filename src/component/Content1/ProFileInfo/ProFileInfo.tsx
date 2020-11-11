import React from "react";
import s from './ProFileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHook from './ProfileStatusHook';


const ProFileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader />
    }

    return <div>
        <div>
            <img
                src='https://yt3.ggpht.com/a/AATXAJw-1Q1rZ2g6vGCRz4_aIKI2v0uIGUkSIL7Ayw=s900-c-k-c0xffffffff-no-rj-mo'/>
        </div>
        <div className={s.descriptonBlock} >
            <img src={props.profile.photos.large}/>
                <ProfileStatusHook status={props.status}
                                   updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProFileInfo;