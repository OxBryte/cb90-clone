import Accomplishment from "./components/accomplishment"
import BotTrading from "./components/botTrading"
import FAQs from "./components/faqs"
import Hero from "./components/hero"
import Layout from "./components/page-layout/layout"
import Premier from "./components/premier"
import PricingPlan from "./components/pricingPlan"
import StandOut from "./components/standout"
import Testimonial from "./components/testimonial"
import TrustedBy from "./components/trustedBy"

function App() {

  return (
    <Layout navbar={true} footer={true} >
      <Hero />
      <Premier />
      <Accomplishment />
      <TrustedBy />
      <StandOut />
      <BotTrading />
      <PricingPlan />
      <Testimonial />
      <FAQs />
    </Layout>
  )
}

export default App
