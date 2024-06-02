import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

export default function MainLayout({ children }) {
  const [isDark, setIsDark] = useState(true);
  function handleDarkMode() {
    setIsDark(prev => !prev);
  }
  return (
    <div className={`${isDark && 'dark'}`}>
      <div className="transition-dark-mode grid min-h-screen grid-rows-[max-content,1fr,max-content] bg-sky-100 dark:bg-[#202124]">
        <Header isDark={isDark} onDarkMode={handleDarkMode} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node,
};
