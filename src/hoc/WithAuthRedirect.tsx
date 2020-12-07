import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/Redux-store';

let mapStateToPropsForRedirect = (state : any) => ({
    isAuth: state.authReducer.isAuth
})

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props} />
        }
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);
    return ConnectAuthRedirectComponent;
}


// let mapStateToPropsForRedirect = (state : AppStateType) => ({
//     isAuth: state.authReducer.isAuth
// })
//
// type MapPropsType = {
//     isAuth: boolean
// }
// type DispatchPropsType = {
// }
//
// export function WithAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {
//     const RedirectComponent: React.FC <MapPropsType & DispatchPropsType> = (props) => {
//
//         let{isAuth, ...restProps} = props
//         if (isAuth) return <Redirect to={'/login'}/>;
//         return <WrappedComponent {...restProps as WCP} />
//     }
//
//     let ConnectAuthRedirectComponent
//         = connect<MapPropsType,DispatchPropsType,WCP,AppStateType>(mapStateToPropsForRedirect , {}) (RedirectComponent);
//     return ConnectAuthRedirectComponent;
// }