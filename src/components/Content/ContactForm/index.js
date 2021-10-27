import { useEffect, useState } from "react";
import styled from "styled-components";
import Recaptcha from "react-recaptcha";

const Wrapper = styled.form``;

const FormItem = styled.div`
  margin: 30px 0;
`;

const Label = styled.label`
  font-family: SFMono;
  display: flex;
  height: 20px;
`;

const Input = styled.input`
  display: block;
  padding: 0 10px;
  border: 2px solid black;
  height: 40px;
  width: 350px;
  font-size: 20px;
  margin-top: 10px;
  :focus {
    outline: none;
    border: 2px dashed black;
  }
`;

const TextArea = styled.textarea`
  width: 600px;
  height: 200px;
  padding: 10px;
  font-family: SFMono;
  font-size: 20px;
  border: 2px solid black;
  margin-top: 10px;
  resize: none;
  display: block;
  :focus {
    outline: none;
    border: 2px dashed black;
  }
`;

const SubmitButton = styled.button`
  background: transparent;

  font-family: SFMono;
  width: 100px;
  height: 50px;
  font-size: 20px;
  margin-top: 30px;
  :hover {
    border: 2px dashed #ff6500;
    cursor: pointer;
  }
  color: ${({ color }) => color};
  :enabled {
    border: 2px solid black;
  }
  :disabled {
    border: 2px solid lightgrey;
  }
`;

function submit(event) {
  var url = "https://formsubmit.co/43e51b07d650fb7474f214e12f4941a9";
  var request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.onload = function () {
    console.log(request.responseText);
  };

  request.onerror = function () {
    console.log("error");
  };

  request.send(new FormData(event.target)); // create FormData from form that triggered event
}

const ValidationIcon = styled.div`
  margin-left: 10px;
`;

const validateName = (name) => {
  return name.length > 2;
};

const validateEmail = (email) => {
  // source: https://www.w3resource.com/javascript/form/email-validation.php
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email);
};

const validateMessage = (message) => {
  return message.length > 2;
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  useEffect(() => {
    setValidName(validateName(name));
    setValidEmail(validateEmail(email));
    setValidMessage(validateMessage(message));
  }, [name, email, message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (verified) {
      submit(event);
      alert("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormItem>
        <Label>
          Name <ValidationIcon hidden={!validName}>✅</ValidationIcon>
          <ValidationIcon hidden={validName || name.length === 0}>
            ❌
          </ValidationIcon>
        </Label>
        <Input
          type="text"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormItem>
      <FormItem>
        <Label>
          Email <ValidationIcon hidden={!validEmail}>✅</ValidationIcon>
          <ValidationIcon hidden={validEmail || email.length === 0}>
            ❌
          </ValidationIcon>
        </Label>
        <Input
          type="email"
          name="email"
          label="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormItem>
      <FormItem>
        <Label>
          Message <ValidationIcon hidden={!validMessage}>✅</ValidationIcon>
          <ValidationIcon hidden={validMessage || message.length === 0}>
            ❌
          </ValidationIcon>
        </Label>
        <TextArea
          type="text"
          name="message"
          label="Message"
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </FormItem>
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_subject"
        value="New submission on portfolio"
      />
      <Recaptcha
        sitekey="6LeraPUcAAAAADNLsJnd1fKE-dJ8zjkGNXlgOqI-"
        render="explicit"
        onloadCallback={() => setVerified(true)}
        expiredCallback={() => setVerified(false)}
      />
      <SubmitButton
        type="submit"
        disabled={!(verified && validName && validEmail && validMessage)}
      >
        Send
      </SubmitButton>
    </Wrapper>
  );
};

export default ContactForm;
