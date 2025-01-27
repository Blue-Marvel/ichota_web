import { AppStores } from "./component/app_stores";
import { Footer } from "./component/footer";
import Header from "./component/header";
import NavBar from "./component/navbar";
import TabBar from "./component/tab_bar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <TabBar />
      <AppStores />
      <Footer />
    </div>
  );
};

export default Home;
