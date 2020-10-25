import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Row, Col, Label, Input, FormGroup, Button } from 'reactstrap';
import PostValidation from '../validations/PostValidation';

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning }
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
      {...input}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}/>
      {touched && 
        ((error && <p style={{ color: "red" }}>{ error }</p>) || 
        (warning && <p style={{ color: "brown" }}>{ warning }</p>))}
    </Col>
  </Row>
)


class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="user"
                component={ renderField }
                label="Author :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="post"
                component={ renderField }
                label="Content :"
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
              color="dark"
              type="submit"
              disabled={this.props.submitting}>
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    )
  }
}

FormComponent = reduxForm({
  form: "formCreatePost",
  enableReinitialize: true,
  validate: PostValidation,
})(FormComponent)

export default connect()(FormComponent)
