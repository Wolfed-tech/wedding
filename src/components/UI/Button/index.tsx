import React, { MouseEvent, ReactNode } from 'react'
import styles from './Button.module.css'

type Props = {
    children: ReactNode,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
    variant?: 'standard' | 'outlined' | 'text'
}

const Button = (props: Props) => {
    const { children, onClick, variant } = props
    return (
        <button
            className={styles.button}
            data-variant={variant}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button 