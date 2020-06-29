import React from 'react';
import style from './Users.module.css';
import {UsersType} from '../../redux/Users-reducer';
import userPhoto from '../../assets/images/user.png';



let Users = (props: any) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1 ; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p  => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={(event) => {
                                 props.onPageChanged(p);
                             }}
                >{p}</span>
            })}

        </div>
        {
            props.users.map((users: UsersType) => <div key={users.id}>
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