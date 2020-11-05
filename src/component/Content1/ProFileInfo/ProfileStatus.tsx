import React from 'react';


class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status,
        updateStatus: this.props.updateStatus
    }

    activedEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivedEditMode = () => {
        this.setState({
            editMode: false
        });
            this.props.status(this.props.Z);
    }
    onStatusChange = (e : any) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    componentDidUpdate(prevProps:any,prevState:any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activedEditMode}>{this.props.status || "no status"}</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange}
                    autoFocus={true}
                    onBlur={this.deactivedEditMode}
                    value={this.state.status}/>
            </div>}
        </div>
    }
}

export default ProfileStatus;