import React from 'react';
import './App.css';
import MenuContainer from "./containers/MenuContainer/MenuContainer";
import NavigationContainer from "./containers/NavigationContainer/NavigationContainer";
import BreadcrumbsContainer from "./containers/BreadcrumbsContainer/BreadcrumbsContainer";
import GalleryContainer from "./containers/GalleryContainer/GalleryContainer";

function App() {
  return (
    <div className="app__wrapper">
      <MenuContainer />
      <div className="app__layout">
          <NavigationContainer />
          <div className="app__content">
              <BreadcrumbsContainer />
              <GalleryContainer />
          </div>
      </div>
    </div>
  );
}

export default App;
