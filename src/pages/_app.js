import Layout from 'components/courses/Layout.js'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
      <Layout>
      <Component {...pageProps} />
        </Layout>
  )
}
