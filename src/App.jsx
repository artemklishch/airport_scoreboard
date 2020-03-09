import React from 'react';
import Header from './header/Header';
import MainTopBlock from './main/main_top_block/MainTopBlock';
import MainMiddleBlock from './main/main_middle_block/MainMiddleBlock';
import MainNewsBlock from './main/main_news_block/MainNewsBlock';
import Footer from './footer/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <MainTopBlock />
        <MainMiddleBlock />
        <MainNewsBlock />
      </main>
      <Footer />
    </div>
  );
};
export default App; 