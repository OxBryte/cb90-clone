import Accomplishment from "./components/accomplishment"
import BotTrading from "./components/botTrading"
import FAQs from "./components/faqs"
import Hero from "./components/hero"
import Layout from "./components/page-layout/layout"
import Premier from "./components/premier"
import PricingPlan from "./components/pricingPlan"
import StandOut from "./components/standout"
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
      <FAQs />
    </Layout>
  )
}

export default App
