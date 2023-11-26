import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainLayout from "./pages/MainLayout";
import routes from "./router/routes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <Routes>
          {routes.map(({ path, element: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
