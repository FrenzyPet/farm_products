import './app.css';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { featuresData } from '../../mocks/featuresList';
import GlobalStyle from './style';

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <PageWrapper state={featuresData}/>
    </div>
  )
}

export default App;
