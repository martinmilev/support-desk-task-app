import { Header } from './components/header'
import { People } from './components/people'
import data from './assets/api.json'

const App = () => (
  <div>
    <Header />
    <People people={data} />
  </div>
)

export default App
