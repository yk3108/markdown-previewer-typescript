// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import marked from 'marked';
import { Container, Row, Col, Form } from 'react-bootstrap';
import defaultValue from './defaultvalue';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: React.FC = () => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  marked.setOptions({
    breaks: true,
  });

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="text-center">Markown Previewer</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Input</h2>
          <Form.Control
            as="textarea"
            style={{ height: '100%' }}
            name="editor"
            id="editor"
            value={value}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <h2 className="text-center">Preview</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(value) }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
