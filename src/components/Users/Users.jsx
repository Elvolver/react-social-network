import React from "react";
import styles from "./Users.module.css";
import userStub from "../../assets/images/userStub.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pages = [];
    let pageCount = props.calcPageCount();
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pagination}>
            {
                pages.map((p) => {
                    return <span className={props.currentPage === p ? styles.paginationActive : null}
                                 key={p}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
        </div>

        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : userStub}
                                    alt={u.name}
                                    className={styles.usersPhoto}
                                /></NavLink>

                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.unfollow(u.id)

                                        }}>Отписаться</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
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
                </div>
            )
        }
    </div>
};

export default Users;