import React from 'react';
import style from './Users.module.css';
import {UsersType} from '../../redux/Users-reducer';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';


type OwnPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    onPageChanged: (page: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

let Users = (props: OwnPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {

                let style1 = props.currentPage === p && style.selectedPage

                return <span
                    className={style1 ? style1 : ''}
                    onClick={(event) => {
                        props.onPageChanged(p);
                    }}
                >{p}</span>
            })}
        </div>
        {
            props.users.map((users: UsersType, id: number) => <div key={users.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile' + id}>
                            <img src={users.photos.small != null ? users.photos.small : userPhoto}
                                 className={style.userPhoto}/>
                                 </NavLink>
                        </div>
                        <span>
                           <div>{users.status}</div>
                            <div>{users.name}</div>
                        </span>
                        <div>
                            {users.followed ? <button onClick={() => {
                                    props.unfollow(users.id)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    props.follow(users.id)
                                }}> Follow </button>}
                        </div>
                    </span>
            </div>)
        }
    </div>
}

export default Users;