import React from 'react';
import styles from './CheckMarker.module.sass'

function CheckMarker (props) {
    return (
        renderCheckMarker(props.isSelected)
    );
}

function renderCheckMarker(isSelected) {
    return (
        <div className={styles.checkContainer}>
            <div className={isSelected ? styles.selectedCheckMarker : styles.checkMarker}>
                <i className="fas fa-check"></i>
            </div>
        </div>
    );
}
export default CheckMarker;
