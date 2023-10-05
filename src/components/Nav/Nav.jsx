import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav_main}>
            <div className={styles.nav_content}>

                <p>
                    SNEAK-PEAK INTO MY PROGRAMMING JOURNEY!
                </p>
                <p>
                    HIMANSHU PAL
                </p>
            </div>
            <div className={styles.white_line}></div>
        </nav>
    )
}

export default Nav;