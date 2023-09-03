import Accomplishment from "./components/accomplishment"
import Layout from "./components/page-layout/layout"
import Premier from "./components/premier"
import StandOut from "./components/standout"
import TrustedBy from "./components/trustedBy"

function App() {

  return (
    <Layout navbar={true} footer={true} >
      <Premier />
      <Accomplishment />
      <TrustedBy />
      <StandOut />
    </Layout>
  )
}

export default App
