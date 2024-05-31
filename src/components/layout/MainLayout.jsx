import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

export default function MainLayout({ children }) {
  return (
    <div className="grid min-h-screen grid-rows-[max-content,1fr,max-content] bg-white bg-zinc-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node,
};
