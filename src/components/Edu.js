import { Card, Col, Row } from "react-bootstrap";

function Education() {
  return (
    <div className="App-header" id="education">
      <header className="header">
        <h1>EDUCATION</h1>
      </header>

      <Row className="g-4" xs={1} md={2}>
        <Col>
          <Card style={{ width: "20rem" }} className="eduCol">
            <Card.Body>
              <Card.Title>Delhi Technological University</Card.Title>
              <Card.Text>Bachelor of Technology</Card.Text>
              <Card.Text>Computer Engineering</Card.Text>
              <Card.Text>9.16 GPA</Card.Text>
              <Card.Link href="http://dtu.ac.in/" rel="nofollow">Website</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "20rem" }} className="eduCol">
            <Card.Body>
              <Card.Title>A.S.N. Senior Secondary School</Card.Title>
              <Card.Text>CBSE Board (Class 11-12)</Card.Text>
              <Card.Text>Science with Computer Applications</Card.Text>
              <Card.Text>93.6%</Card.Text>
              <Card.Link href="https://www.asnschool.org/asn-sr.sec/index.php" rel="nofollow">Website</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        </Row>

        <Row className="g-4" xs={1} md={1}>
        <Col>
          <Card style={{ width: "20rem" }} className="eduCol">
            <Card.Body>
              <Card.Title>St. Mary's Convent High School</Card.Title>
              <Card.Text>ICSE Board (Class 1-10)</Card.Text>
              <Card.Text>School Topper</Card.Text>
              <Card.Text>97.2%</Card.Text>
              <Card.Link href="https://www.smccjkanpur.org/" rel="nofollow">Website</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Education;
