import './app.css';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { featuresData } from '../../mocks/featuresList';

function App() {
  return (
    <div className="app">
      <PageWrapper state={featuresData}/>
    </div>
  )
}

export default App;
