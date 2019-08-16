import React from 'react';
import styles from './User.module.sass'

function User (props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.level}</p>
        </div>
    );
}

export default User;