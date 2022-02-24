import React from 'react';

import './Flex.css';

function Flex() {
  return (
    <>
      <p className="title">Layouts in Flexbox</p>
      <div className="Flex-columns-container">
        <div className="column-flex">
          <div className="Flex-container">
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
          <div className="Flex-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ac quam at
            fermentum. Proin gravida, mi at placerat lacinia, ligula urna cursus sapien, in
            malesuada leo nisl vel ligula. Pellentesque ullamcorper tristique iaculis. Vivamus
            convallis accumsan hendrerit. Sed eu massa leo. Quisque fermentum, sem auctor efficitur
            finibus, sapien felis pharetra ex, id dapibus tortor arcu sed ante. Maecenas neque erat,
            eleifend in enim eget, tincidunt ullamcorper mauris.
          </div>
          <div className="Flex-container">
            <div className="Flex-footer">Copyright © 2022</div>
          </div>
        </div>
        <div className="column-flex">
          <div className="Flex-container">
            <div className="header-logo">Logo</div>
          </div>
          <div className="Flex-columns-container">
            <div className="Flex-left-container">
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
            <div className="Flex-right-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ac quam at
              fermentum. Proin gravida, mi at placerat lacinia, ligula urna cursus sapien, in
              malesuada leo nisl vel ligula. Pellentesque ullamcorper tristique iaculis. Vivamus
              convallis accumsan hendrerit. Sed eu massa leo. Quisque fermentum, sem auctor
              efficitur finibus, sapien felis pharetra ex, id dapibus tortor arcu sed ante. Maecenas
              neque erat, eleifend in enim eget, tincidunt ullamcorper mauris.
            </div>
          </div>
          <div className="Flex-container">
            <div className="Flex-footer">Copyright © 2022</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flex;
