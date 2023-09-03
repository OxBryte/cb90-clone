import Accomplishment from "./components/accomplishment"
import Layout from "./components/page-layout/layout"
import StandOut from "./components/standout"

function App() {

  return (
    <Layout navbar={true} footer={true} >
      <Accomplishment/>
      <StandOut/>
    </Layout>
  )
}

export default App
