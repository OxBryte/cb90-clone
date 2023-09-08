import Layout from '../../components/page-layout/layout'
import FaqsPage from '../../components/faqs/faqsPage'

function Faqs() {

    return (
        <Layout navbar={true} footer={true} >
            <FaqsPage />
        </Layout>
    )
}

export default Faqs
