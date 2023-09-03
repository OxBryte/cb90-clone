import Accomplishment from "./components/accomplishment"
import Layout from "./components/page-layout/layout"
import Premier from "./components/premier"
import StandOut from "./components/standout"

function App() {

  return (
    <Layout navbar={true} footer={true} >
      <Premier />
      <Accomplishment />
      <StandOut />
    </Layout>
  )
}

export default App
