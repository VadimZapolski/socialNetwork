import React, {ChangeEvent, useEffect, useState} from 'react';


type ProfileStatusHookType = {
    status: string,
    updateStatus:(newStatus:string) => void
}

const ProfileStatusHook = (props: ProfileStatusHookType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activedEditMode = () => {
        setEditMode(true)
    }
    const deactivedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    };


    return <div>
        {!editMode &&
        <div>
            <b>Status:  </b><span onDoubleClick={activedEditMode}>{props.status || 'no status'}</span>
        </div>}
        {editMode &&
        <div>
            <input
                onChange={onStatusChange}
                autoFocus={true}
                onBlur={deactivedEditMode}
                value={status}
            />
        </div>}
    </div>

}

export default ProfileStatusHook;