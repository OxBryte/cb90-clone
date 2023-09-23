import Layout from '../../components/page-layout/layout'
import Hero from '../../components/hero'
import Premier from '../../components/premier'
import Accomplishment from '../../components/accomplishment'
import StandOut from '../../components/standout'
import TrustedBy from '../../components/trustedBy'
import BotTrading from '../../components/botTrading'
import PricingPlan from '../../components/pricingPlan'
import Testimonial from '../../components/testimonial'
import FAQs from '../../components/faqs'

function Home() {

    return (
        <Layout navbar={true} footer={true} >
            <Hero />
            <Premier />
            {/* <Accomplishment /> */}
            {/* <TrustedBy /> */}
            {/* <StandOut /> */}
            <BotTrading />
            {/* <PricingPlan /> */}
            {/* <Testimonial /> */}
            <FAQs />
        </Layout>
    )
}

export default Home
