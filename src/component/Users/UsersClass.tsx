import React from "react";
import style from './Users.module.css';
import axios from 'axios';
import {UsersType} from "../../redux/Users-reducer";
import userPhoto from '../../assets/images/user.png' ;

class UsersClass extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.items);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1 ; i <= pagesCount; i++) {
            pages.push(i);
        }


        return <div>
            <div>
                {pages.map( p=> {
                   return <span className={this.props.currentPage === p && style.selectedPage }
                   onClick={ (event) => { this.onPageChanged(p) }}
                   >{p}</span>
                })}

            </div>
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
                </div>)
            }
        </div>
    }
}

export default UsersClass;