import React from 'react';
import styles from './Header.module.sass'

function Header(props) {
    const users = props.userList;
    const userList = new Map();

    users.map((user, index) => {
        if (user.isSelected) {
            userList.set(index, user.name);
        }
    });

    return (
        <div className={styles.header}>
            <div className={styles.title}>To:</div>
            <div className={styles.user}>
                {Array.from(userList.values()).map(user => {
                    return  <span onClick={() => props.onClickHandler(getUserKey(userList, user))}>{user + ", "}</span>;
                })}
            </div>
        </div>
    );
}
function getUserKey(map, searchValue) {
    for (let [key, value] of map) {
        if (value === searchValue)
            return key;
    }
}
export default Header;