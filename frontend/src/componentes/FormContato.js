import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./css/FormContato.css";
import { sendMail } from "../services/api";

const FormContato = () => {
  const [status, setStatus] = useState("Enviar");
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [mensagem, setMensagem] = useState();

  function manipulaSubmite(e) {
    e.preventDefault();
    setStatus("Enviando...");
    const newSendEmail = {
      nome: nome,
      email: email,
      mensagem: mensagem,
    };
    sendMail(newSendEmail);
  }

  return (
    <Container>
      <div className="content">
        <div className="formSection styleForm">
          <Form id="form" onSubmit={manipulaSubmite}>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label className="label">Nome:</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="label">Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mensagem">
              <Form.Label className="label">Mensagem:</Form.Label>
              <Form.Control
                as="textarea"
                className="textarea-mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </Form.Group>

            <br />
            <button type="submit">{status}</button>
          </Form>
        </div>
        <div className="imageSection">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./instagram.png"
              alt="Logo Instagram"
              style={{ height: "150px" }}
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./facebook.png"
              alt="Logo Facebook"
              style={{ height: "150px" }}
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./twitter.png"
              alt="Logo Twitter"
              style={{ height: "150px" }}
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default FormContato;
