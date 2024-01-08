import { Table } from "react-bootstrap";

function Work() {
  return (
    <div className="App-header" id="work">
        <header className="header">
      <h1>WORK</h1>
      </header>

      <Table hover>
        <thead>
          <tr>
            <th>When</th>
            <th>What</th>
            <th>Where</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mar 2023 - Current</td>
            <td>Developing Microsoft365 iOS app</td>
            <td>Microsoft, Noida</td>
            <td>Software Engineer</td>
          </tr>
          <tr>
            <td>Aug 2022 - Mar 2023</td>
            <td>Alumni Relay iOS and Android development</td>
            <td>Microsoft, Hyderabad</td>
            <td>Software Engineer</td>
          </tr>
          <tr>
          <td>Jan 2022 - June 2022</td>
            <td>ONDC seller functionality on BizHub</td>
            <td>Microsoft, Hyderabad</td>
            <td>Intern</td>
          </tr>
          <tr>
          <td>May 2021 - July 2021</td>
            <td>Chatapp backend using Azure Communication Services</td>
            <td>Microsoft, Hyderabad</td>
            <td>Intern</td>
          </tr>
          <tr>
          <td>May 2020 - July 2020</td>
            <td>Chatbot to schedule meetings from conversation intent</td>
            <td>Microsoft, Bangalore</td>
            <td>Intern</td>
          </tr>
          {/* <tr>
          <td>Feb 2020 - May 2020</td>
            <td>Node.js development</td>
            <td>GirlScript Summer of Code</td>
            <td>Opensource developer</td>
          </tr> */}
          <tr>
          <td>Aug 2019 - Mar 2020</td>
            <td>Web development with MVC, C#</td>
            <td>Delhi Technological University, Delhi</td>
            <td>Intern</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Work;
