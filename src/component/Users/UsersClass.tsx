import React from "react";
import style from './Users.module.css';
import axios from 'axios';
import {UsersType} from "../../redux/Users-reducer";
import userPhoto from '../../assets/images/user.png' ;

class Users extends React.Component<any, any> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response: any) => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <div>
            {
                this.props.users.map((users: UsersType) => <div key={users.id}>
                    <span>
                        <div>
                            <img src={users.photos.small != null ? users.photos.small : userPhoto}
                                 className={style.usersPhoto}/>
                        </div>
                        <span>
                           <div>{users.status}</div>
                            <div>{users.name}</div>
                        </span>
                        <div>
                            {users.followed ? <button onClick={() => {
                                    this.props.unfollow(users.id)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    this.props.follow(users.id)
                                }}> Follow </button>}
                        </div>
                    </span>
                    <span>

                        {/*<span>*/}
                        {/*    <div>{users.location.country}</div>*/}
                        {/*    <div>{users.location.city}</div>*/}
                        {/*</span>*/}
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;