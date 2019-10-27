import React from "react";


export class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    };

    activateEditMode = () => {
        debugger
        this.setState({editMode: true})
    };

    disactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    <span>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.disactivateEditMode}
                           type="textarea" value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;