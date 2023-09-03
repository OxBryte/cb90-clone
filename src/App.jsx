import Accomplishment from "./components/accomplishment"
import Layout from "./components/page-layout/layout"

function App() {

  return (
    <Layout navbar={true} footer={true} >
      <Accomplishment/>
    </Layout>
  )
}

export default App
