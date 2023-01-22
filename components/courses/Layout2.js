import styles from '@/styles/Layout.module.css'
import Navbar2 from './Navbar2'

const Layout =({children}) => {
    return (
        <>
            <Navbar2 style={{
                position: 'fixed',
            }} />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;