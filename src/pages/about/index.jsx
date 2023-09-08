import AboutUs from '../../components/about'
import Layout from '../../components/page-layout/layout'

function About() {

    return (
        <Layout navbar={true} footer={true} >
            <AboutUs />
        </Layout>
    )
}

export default About
