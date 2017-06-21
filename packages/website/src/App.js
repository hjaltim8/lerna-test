import React from 'react'
import { LoadingButton } from 'mylib'
import { Hello, Goodbye } from 'components'
import logo from './logo.svg'
import styles from './App.scss'

const App = () =>
    (<div className={styles.App}>
        <div className={styles['App-header']}>
            <img src={logo} className={styles['App-logo']} alt="logo" />
            <h2>Welcome to React</h2>
        </div>
        <Hello />
        <LoadingButton>Load</LoadingButton>
        <Goodbye />
        <p className={styles['App-intro']}>
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>)

export default App
