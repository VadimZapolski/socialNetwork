import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () =>{
    return (
        <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/setting" activeClassName={s.active}>Setting</NavLink>
        </div>
    </nav>
    )
}

export default Nav;