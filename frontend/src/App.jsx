import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import routes from "./router/routes";

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
    </>
  );
}

export default App;
