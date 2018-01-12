import React from 'react';

class AdminPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="appContainer">
        <div className="">
          <h1>This is admin page</h1>
          <p>Go back to <a href="#/">the game</a></p>
        </div>
      </div>
    );
  }
}

export default AdminPage;
