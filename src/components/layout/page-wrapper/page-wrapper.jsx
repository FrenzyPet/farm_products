import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page";
import './page-wrapper.css'

const PageWrapper = ({ state }) => {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage state={state}/>
      </main>
      <Footer />
    </>

  );
}

export default PageWrapper;
