import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import '../styles/pages/MainLayout.css';

const MainLayout = ({ children }) => {

  const theme = useSelector((state) => state.theme.value);
  return (
    <main className={`main-layout ${theme}`}>
      {children}
    </main>

  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
