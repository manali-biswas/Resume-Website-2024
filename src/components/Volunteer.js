import { Accordion } from "react-bootstrap";

function Volunteer() {
  return (
    <div className="App-header" id="volunteer">
      <header className="header">
        <h1>VOLUNTEERING</h1>
      </header>

      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>IEEE, Delhi Technological University Chapter</Accordion.Header>
        <Accordion.Body>
          <h4>2021 - 2022: Chairperson, IEEE DTU Women In Engineering</h4>
          <p>
            Managed events, workshops, functioning and mentoring of IEEE DTU Women In Engineering.
            Encouraged active participation and diversity in the technical society, which enhanced networking in the club and fostered an inclusive environment for students to achieve career growth.
          </p>
          <h4>2020 - 2021: Webinar and Membership Coordinator</h4>
          <p>
            Organized highly educative webinars with distinguished speakers. 
            Actively participated in organizing Vihaan 4.0 all-India techfest.
            Increased membership count of the IEEE chapter through online mentoring and awareness sessions.
          </p>
          <h4>Summer 2020: Web development instructor</h4>
          <p>
            Taught students to make simple CRUD Node.js web apps from scratch and deploy.
          </p>
          <h4>Summer 2019: Enigma event organizer</h4>
          <p>
            Organized a fun treasure hunt event in the college as part of the techfest.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hacktoberfest</Accordion.Header>
        <Accordion.Body>
          <p>
            Participated in 2020, 2021 and 2022 Hacktoberfests, contributed to open-source projects along with self projects.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>GirlScript Summer of Code</Accordion.Header>
        <Accordion.Body>
          <p>
            Contributed to backend open-source projects on Node.js
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Volunteer;
