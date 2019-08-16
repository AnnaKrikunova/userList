import React from 'react';
import styles from './UserAvatar.module.sass'

function UserAvatar (props) {
    return (
        <div className={styles.avatarContainer}>
            <img src={props.image} className={styles.avatar} alt="" />
        </div>
    );
}

export default UserAvatar;