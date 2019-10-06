import React from "react";
import styles from "./Users.module.css"
import * as axios from 'axios';
import userStub from '../../assets/images/userStub.png'

const Users = (props) => {


        //if (props.users.length === 0) {
        /*    props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {
                        city: 'Vologda',
                        country: 'Russia'
                    }
                },
                {
                    id: 2,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {
                        city: 'Moscow',
                        country: 'Russia'
                    }
                },
                {
                    id: 3,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
                    followed: false,
                    fullName: 'Ivan',
                    status: 'I am not a boss',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                }
            ]);*/
        let r;

        const getUsers = () => {
            if (props.users.length === 0) {
                axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                    props.setUsers(response.data.items)
                }).catch(error => {
                });

            }
        }


        return <div>
            <button onClick={getUsers}>Get users</button>

            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photos.small != null ? u.photos.small : userStub}
                                className={styles.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>Отписаться</button>
                                :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Подписаться</button>
                            }

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>
                            </div>
                                <div>

                                </div>

                        </span>

                    </span>
                    </div>)}
        </div>

    }
;


export default Users;