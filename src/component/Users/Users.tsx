import React, {useState} from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import cn from 'classnames'
import {userType} from '../../types/types';


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<userType>
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

let Users: React.FC<PropsType> = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 15
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
        <div className={cn(style.paginator)}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Назад</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={cn({
                            [style.selectedPage]: props.currentPage === p
                        }, style.pageNumber
                    )}
                                 key={p}
                                 onClick={(event) => {
                                     props.onPageChanged(p);
                                 }}
                    >{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Вперед</button>}
        </div>
        <div className={style.users}>
            {
                props.users.map((user: userType) => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={style.userPhoto}/>
                                 </NavLink>
                        </div>
                        <span>
                           <div>{user.status}</div>
                            <div>{user.name}</div>
                        </span>
                        <div className={style.paddingSecondRow}>
                            {user.followed ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.unfollow(user.id);

                                        }}> Unfollow </button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.follow(user.id)
                                          }}> Follow </button>}
                        </div>
                    </span>
                </div>)
            }
        </div>
    </div>
}

export default Users;