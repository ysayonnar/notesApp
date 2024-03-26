import classes from './MyInput.module.css'

function MyInput({...props}){
    return(
        <input {...props} className={classes.input}/>
    )
}

export default MyInput