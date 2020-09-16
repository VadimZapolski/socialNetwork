import React from 'react';
import style from './FormControls.module.css'


export const FormControl = (props: any) => {
    const {input, meta,child, ...restProps} = props;
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " "+ (hasError ? style.error : " ")}>
            <div>
                {restProps.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta,child, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props: any) => {
    const {input, meta,child, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}


