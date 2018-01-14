import React from 'react';

import {points, bonus} from './service/scoreService.js';

class AdminPage extends React.Component {
  render() {
    const pointRows = Object.entries(points)
      .map(([key, value]) => {
        const bonusText = bonus[key] ? `${bonus[key][0]} for ${bonus[key][1]}` : "";

        return (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            <td>{bonusText}</td>
          </tr>
        );
      });

    return (
      <div className="appContainer">
        <div id="adminPage">
          <h2>Point system</h2>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Unit Points</th>
                <th>Bonus</th>
              </tr>
            </thead>
            <tbody>
              {pointRows}
            </tbody>
          </table>

          <p>Go back to <a href="#/">the game</a></p>
        </div>
      </div>
    );
  }
}

export default AdminPage;
