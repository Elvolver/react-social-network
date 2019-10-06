import React from "react";
import styles from "./Users.module.css"
import * as axios from 'axios';
import userStub from '../../assets/images/userStub.png'

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.getUsers();
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            }).catch(error => {
            });

        }
    };

    render() {
        return <div>
            <button onClick={this.getUsers}>Get users</button>

            {
                this.props.users.map(u =>
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
                                    this.props.unFollow(u.id)
                                }}>Отписаться</button>
                                :
                                <button onClick={() => {
                                    this.props.follow(u.id)
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
                    </div>
                )
            }
        </div>
    }
}


export default Users;