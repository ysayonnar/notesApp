import classes from './MyButton.module.css'

function MyButton({children, ...props}){
    return(
        <button {...props} className={classes.button}>{children}</button>
    )
}

export default MyButton