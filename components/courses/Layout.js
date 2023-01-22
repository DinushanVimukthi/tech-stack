import styles from '@/styles/Layout.module.css'
import Navbar from './Navbar'
import Footer from "./Footer";

const Layout =({children}) => {
    return (
        <>
            <Navbar style={{
                position: 'fixed',
            }} />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
            <Footer />
        </>
    )
}

export default Layout;