import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
// bg-zinc-900
export default function MainLayout({ children }) {
  return (
    <div className="grid min-h-screen grid-rows-[max-content,1fr,max-content] bg-sky-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node,
};
