import classes from "./Profile.module.css"

const Profile = ()=>{
    return(
      <div className={classes.main}>
      <div>ava + description</div>
      <div>
        MY posts
        <div>New posts</div>
      </div>
      <div className={classes.posts}>
        <div className={classes.item}>post 1</div>
        <div className={classes.item}>post 2</div>
      </div>
    </div>
    )
}

export default Profile;