import { Carousel } from "react-bootstrap";

function AwardImage() {
  return (
    <svg
      class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
      width="800"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: Third slide"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    ></svg>
  );
}

function Awards() {
  return (
    <div className="App-header" id="awards">
      <header className="header">
        <h1>Awards</h1>
      </header>

      {/* Award slides */}
      <Carousel>
        <Carousel.Item>
          <AwardImage />
          <Carousel.Caption>
            <h3>Microsoft Imagine Cup 2022 India Semifinalist</h3>
            <p>Microsoft - March 2022</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <AwardImage />
          <Carousel.Caption>
            <h3>Microsoft Student Hackathon Honorable Mention</h3>
            <p>Microsoft - September 2021</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <AwardImage />
          <Carousel.Caption>
            <h3>Oustanding WIE Student Volunteer Award</h3>
            <p>IEEE Delhi Section - July 2021</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <AwardImage />
          <Carousel.Caption>
            <h3>Physics and computer topper class 11</h3>
            <p>A.S.N. School - 2017</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <AwardImage />
          <Carousel.Caption>
            <h3>School topper ICSE class X</h3>
            <p>S.M.C. School - 2016</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <AwardImage />
          <Carousel.Caption>
            <h3>100% in Computer Applications ICSE class X</h3>
            <p>U.P. Government - 2016</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <AwardImage />
          <Carousel.Caption>
            <h3>ICSE Regional Hindi Creative Writing Winner</h3>
            <p>ICSE Board - 2015</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <AwardImage />
          <Carousel.Caption>
            <h3>Numerous spell-bee winners at middle school</h3>
            <p>S.M.C School</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <AwardImage />
          <Carousel.Caption>
            <h3>Consistently among top 3 from class 5 - 12</h3>
            <p>S.M.C School & A.S.N. School</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Awards;
