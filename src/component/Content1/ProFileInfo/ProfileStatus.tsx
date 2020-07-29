import React from 'react';


class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }

    activedEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivedEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {

        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activedEditMode.bind(this)}>{this.props.status}</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deactivedEditMode.bind(this)} value={this.props.status}/>
            </div>}
        </div>
    }
}

export default ProfileStatus;