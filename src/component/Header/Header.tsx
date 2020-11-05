import React from 'react';
import style from  './Header.module.css';
import { NavLink } from 'react-router-dom';

export type HeaderPropsType = {
    isAuth: boolean,
    login:  null,
    logout: any
}
const Header = (props: HeaderPropsType) => {
    return <header className={style.header}>
        <img src='https://sun9-11.userapi.com/c206524/v206524011/77a30/hQ1xadkgImw.jpg'/>
    <div className={style.loginBlock}>

        {props.isAuth
            ? <div> {props.login} - <button onClick={props.logout}>Log Out</button> </div>
            : <NavLink to ={'/login'}>Login</NavLink> }

    </div>
    </header>
}

export default Header;