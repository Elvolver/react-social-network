import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {
    return (


                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
                                :
                                <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            }

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}
                            </div>
                                <div>{u.location.country}</div>

                        </span>
                        
                    </span>
                    </div>

                        ))
                        }




            export default Users;