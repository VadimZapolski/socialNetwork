import React from "react";
import ProFileInfo from "./ProFileInfo/ProFileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type Content1Type = {

}

const Content1 = (props : any) => {


    return <div>
        <ProFileInfo profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
}

export default Content1;