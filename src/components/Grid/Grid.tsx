import React from 'react';

import './Grid.css';

function Grid() {
  return (
    <>
      <p className="title">Layouts in Grid</p>
      <div className="Grid-columns-container">
        <div>
          <div className="Grid-header Grid-container">
            <div className="header-logo">Logo</div>
            <a href="/" className="App-link">
              Home
            </a>
            <a href="/" className="App-link">
              About
            </a>
            <a href="/" className="App-link">
              Contact
            </a>
          </div>
          <div className="Grid-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ac quam at
            fermentum. Proin gravida, mi at placerat lacinia, ligula urna cursus sapien, in
            malesuada leo nisl vel ligula. Pellentesque ullamcorper tristique iaculis. Vivamus
            convallis accumsan hendrerit. Sed eu massa leo. Quisque fermentum, sem auctor efficitur
            finibus, sapien felis pharetra ex, id dapibus tortor arcu sed ante. Maecenas neque erat,
            eleifend in enim eget, tincidunt ullamcorper mauris.
          </div>

          <div className="Grid-container">
            <div className="Grid-footer">Copyright © 2022</div>
          </div>
        </div>
        <div>
          <div className="Grid-container">
            <div className="header-logo">Logo</div>
          </div>
          <div className="container-columns">
            <div className="Grid-container Grid-left-container">
              <a href="/" className="App-link">
                Home
              </a>
              <a href="/" className="App-link">
                About
              </a>
              <a href="/" className="App-link">
                Contact
              </a>
            </div>
            <div className="Grid-container Grid-right-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ac quam at
              fermentum. Proin gravida, mi at placerat lacinia, ligula urna cursus sapien, in
              malesuada leo nisl vel ligula. Pellentesque ullamcorper tristique iaculis. Vivamus
              convallis accumsan hendrerit. Sed eu massa leo. Quisque fermentum, sem auctor
              efficitur finibus, sapien felis pharetra ex, id dapibus tortor arcu sed ante. Maecenas
              neque erat, eleifend in enim eget, tincidunt ullamcorper mauris.
            </div>
          </div>
          <div className="Grid-container">
            <div className="Grid-footer">Copyright © 2022</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
