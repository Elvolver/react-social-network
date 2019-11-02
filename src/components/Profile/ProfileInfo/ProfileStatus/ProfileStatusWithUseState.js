import React, {useState, useEffect} from "react";


const ProfileStatusWithUseState = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    useEffect(() => {
        debugger
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        debugger
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
            <div onDoubleClick={activateEditMode}>
                <span>{status}</span>y
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       type="textarea" value={status}/>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithUseState;