import Accomplishment from "./components/accomplishment"
import BotTrading from "./components/botTrading"
import Hero from "./components/hero"
import Layout from "./components/page-layout/layout"
import Premier from "./components/premier"
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
    </Layout>
  )
}

export default App
