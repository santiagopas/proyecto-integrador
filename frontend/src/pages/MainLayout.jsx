import PropTypes from 'prop-types';
import '../styles/pages/MainLayout.css';
const MainLayout = ({ children }) => {
  return (
    <main className='main-layout'>
      {children}
    </main>

  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
