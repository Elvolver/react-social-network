import React from "react";
import styles from "./Users.module.css";
import userStub from "../../assets/images/userStub.png";

const Users = (props) => {
    let pages = [];
    debugger
    let pageCount = props.calcPageCount();
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pagination}>
            {
                pages.map((p) => {
                    return <span className={props.currentPage === p && styles.paginationActive}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
        </div>

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
                </div>
            )
        }
    </div>
};

export default Users;