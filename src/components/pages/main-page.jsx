import About from '../blocks/about/about';
import Features from '../blocks/features/features';

const MainPage = ({ state }) => {
  return (
    <>
      <About />
      <Features state={state} />
    </>
  );
}

export default MainPage;