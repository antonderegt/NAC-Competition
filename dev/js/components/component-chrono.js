import React from 'react';

const ChronoComponent = (props) => (
  <div className="sub-container">
    <p className="selectTeamP">
      <b>11:30 - 12:30</b> <i>Ochtendprogramma</i><br />
      Lunch bij Pels Rijcken & Drooglever Fortuijn<br /><br />
      <b>13:00 - 18:00</b> <i>Wedstrijdprogramma</i><br />
      <select className="selectTeam" onChange={e => props.actionTeamSelect(e)}>\
        {
          props.teams.map(team => {
            return (
              team.name === props.teamSelected ?
              <option selected key={team.name} value={team.name}>{team.name}</option> :
              <option key={team.name} value={team.name}>{team.name}</option>
            )
          })
        }
      </select>
    </p>
    <table>
      <tbody>
        <tr>
          <th>Tijd</th>
          <th>Activiteit</th>
          <th>Locatie</th>
        </tr>
        <tr>
          <td>13:30 - 14:10</td>
          <td>1e Ronde</td>
          <td>
          {
            props.teams.map(team => {
              return (
                team.name === props.teamSelected ?
                  team.locationOne :
                  null
              )
            })
          }
          </td>
        </tr>
        <tr>
          <td>14:25 - 15:40</td>
          <td>2e Ronde</td>
          <td>
            {
              props.teams.map(team => {
                return (
                  team.name === props.teamSelected ?
                    team.locationTwo :
                    null
                )
              })
            }
          </td>
        </tr>
        <tr>
          <td>16:30 - 17:20</td>
          <td>Finale</td>
          <td>Volgt</td>
        </tr>
      </tbody>
    </table>
    <p>
      De teams zullen in ronde twee de zaak van de andere kant bepleiten.<br /><br />
      <b>18:00 - 22:00</b> <i>Avondprogramma</i><br />
      Drie gangen diner bij een restaurant op loopafstand van het gerechtshof. Meer info volgt.
    </p>
    <div onClick={() => props.onClick()} className="arrowBack"><img src="./images/ic_arrow_back_white_24dp_1x.png" /></div>
  </div>
);

export default ChronoComponent;
