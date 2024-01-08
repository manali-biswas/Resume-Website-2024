import { Button, Form } from "react-bootstrap";

function Contact() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = e.target.elements;
        console.log(message.value)
        window.Email.send({
            SecureToken : "33f20ab0-d2a6-4128-99a4-eebb28afd157",
            To : 'biswas.manali8@gmail.com',
            From : "visitorfeedback@manalibiswas.in",
            Subject : `Feedback from personal website`,
            Body : `Message: ${message.value}.\n Sender name: ${name.value}.\n Sender email address: ${email.value}`
        }).then(
            (m) => {
             if (m === 'OK') {
                alert("Thanks for leaving a message! Will get in touch with you soon.")
                e.target.reset()
             }  else {
                alert("Something went wrong. Please retry.")
             }
            }
        );
      };

  return (
    <div className="App-header" id="contact">
      <header className="header">
        <h1>Get in touch!</h1>
      </header>

      {/* Email Form */}
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control type="text" id="name" required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control type="email" id="email" required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="message">Your message</Form.Label>
          <Form.Control as="textarea" rows={5} id="message" required/>
        </Form.Group>

        <Button variant="outline-secondary" type="submit">
        Submit <i class="bi bi-arrow-right-circle-fill submit"></i>
      </Button>
      </Form>

<span className="copyright">&copy; Manali Biswas. All rights reserved.</span>
    </div>
  );
}

export default Contact;
