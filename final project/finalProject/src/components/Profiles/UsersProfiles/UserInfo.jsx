import React from 'react'
import styleInfo from './UserInfo.module.css'

export default function UserInfo() {
    return (
        <>
            <div className={styleInfo.infoPage}>
                <div className={styleInfo.userInfo}>
                    <div className={styleInfo.info}>
                        <h1>name:</h1>
                        <h4>details</h4>
                        <h1>email:</h1>
                        <h4>details</h4>
                        <h1>address:</h1>
                        <h4>details</h4>
                        <h1>phone:</h1>
                        <h4>details</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
