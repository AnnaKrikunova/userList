import React from 'react';
import Avatar from './UserAvatar/UserAvatar'
import CheckMarker from './CheckMarker/CheckMarker'
import styles from './UserItem.module.sass'

function UserItem (props) {
    const userIndex = props.data;
    const profileImage = props.image;
    const userName = props.name;
    const userLevel = props.level;
    const isSelectedUser = props.isSelected;

    return (
        <div className={styles.userItem} onClick={() => props.onClickHandler(userIndex)}>
            <div className={styles.userContainer}>
                <Avatar image={profileImage}/>
                <span className={styles.textContainer}>
                    <span className={styles.name}>{userName}</span>
                    <span className={styles.level}>{userLevel}</span>
                </span>
            </div>
            <CheckMarker isSelected={isSelectedUser}/>
        </div>
    );
}

export default UserItem;