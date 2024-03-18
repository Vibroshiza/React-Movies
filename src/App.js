import React from 'react';
import {Header} from './layout/header';
import {Footer} from './layout/footer';
import {Main} from './layout/main';

function App() {
  return (
    <div className="background-pic">
      <React.Fragment>
        < Header />
        < Main />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;