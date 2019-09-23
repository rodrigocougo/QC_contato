import React, { Component } from "react";

import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";

import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import BoxContact from '../../components/utility/boxContact';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import { Form } from 'antd';
import validator from 'validator';
import axios from 'axios'; 

import {
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl, 
    Label
  } from "react-bootstrap";

export default class ContatoFormulario extends Component{

    constructor(){
        super()

        this.state = {}
    }

    //Validações
    validarEmail=(e)=>{
        e.preventDefault();
        const email = e.target.elements.email.value;
        const emailValid = validator.isEmail(email)
        if(emailValid === false){
          console.log('email incorreto, favor verificar')
        }
   }

    Url = 'http://localhost:3000/contato';

    state = { 
        contact: { 
            name: "", 
            company: '',
            email: "", 
            subject: "", 
            description: ""
        } 
    };

    /* componentDidMount() {
        fetch(this.Url)
            .then(response => response.json())
            .then(contact => this.setState({ contact }))
            .catch(e => console.log(e));
    } */

    setValues = (e, field) => {
        const { contact } = this.state;
        contact[field] = e.target.value;
        this.setState({ contact });
    }

    /* create = () => {
        this.setState({ contact: { id: 0,  description: '', price: 0, quantity: 0 } })
        this.props.contactCreate(this.state.contact);
    } */

    save = (contact) => {
        axios.post('/api/contact', {
            contact
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        /* const requestAdd = {
            method: 'POST', 
            body: JSON.stringify(contact), 
            headers: new Headers({
              'Content-type': 'application/json'
            })
          };
          fetch(this.Url, requestAdd)
            .then(response => response.json())
            .then(newContact => {
              let {contact} = this.state;
              contact.push(newContact);
              //this.setState({contact});
              console.log(contact);
            }) 
            .catch(e => console.log(e)); */
    }

    render() {
        return (
        <LayoutWrapper>            
            <PageHeader>
            CONTATO BR
            </PageHeader>              
            <Col md={6}>
                <Box>
                    <Form>
                        <FormInputs
                            ncols={["col-md-12"]}
                            properties={[
                            {
                                label: "NOME",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Por favor, identifique-se!",
                                defaultValue: "",
                                disabled: false, 
                                onChange: e => this.setValues(e, 'name')
                            }
                            ]}
                        />
                        <FormInputs
                            ncols={["col-md-12"]}
                            properties={[
                            {
                                label: "EMPRESA",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Caso preferir, identifique a empresa!",
                                defaultValue: "",
                                disabled: false, 
                                onChange: e => this.setValues(e, 'company')
                            }
                            ]}
                        />
                        <FormInputs
                            ncols={["col-md-12"]}
                            properties={[
                            {
                                label: "E-MAIL",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Seu e-mail é necessário e obrigatório!",
                                defaultValue: "",
                                disabled: false, 
                                onChange: e => this.setValues(e, 'email')
                            }
                            ]}
                        />
                        <FormInputs
                            ncols={["col-md-12"]}
                            properties={[
                            {
                                label: "ASSUNTO",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Identifique o assunto do contato!",
                                defaultValue: "",
                                disabled: false, 
                                onChange: e => this.setValues(e, 'subject')
                            }
                            ]}
                        />
                        <Row>
                            <Col md={12}>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>DESCRIÇÃO</ControlLabel>
                                <FormControl
                                onChange= {(e) => this.setValues(e, 'description')}
                                rows="5"
                                componentClass="textarea"
                                bsClass="form-control"
                                placeholder="Descrição breve sobre o assunto!"
                                defaultValue=""                  
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col md={12}>
                        <Button bsStyle="info" pullRight fill onClick={this.save}>
                            Enviar mensagem
                        </Button>
                        <div className="clearfix" />
                        </Col>
                    </Row>
                    </Form>
                </Box>
            </Col>
            <Col  md={6}>
            <Label className="d-flex justify-content-center font-weight-bold text-white h2 mb-3 p-2">
            CONTATO@QUANTICCODE.COM</Label>
            <BoxContact>
                <Label className="d-flex justify-content-center font-weight-bold text-black mw-100">+55 51 30855524</Label>
                <div className="text-center">
                    <ul className="list-unstyled list-inline d-flex justify-content-center">
                        <li className="list-inline-item"><a className="btn-floating btn-lg btn-fb mx-1" href="/#"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-lg btn-tw mx-1" href="/#"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-lg btn-li mx-1" href="/#"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-lg btn-li mx-1" href="/#"><i className="fa fa-whatsapp"> </i></a></li>
                    </ul>
                </div>
            </BoxContact>            
            <Label className="d-flex justify-content-center font-weight-bold text-white h4 text-center mt-3">
            RUA 20 DE SETEMBRO, 394, <br/> 
            AZENHA, PORTO ALEGRE, <br/>
            RS, BRASIL</Label>
            
        </Col>            
        </LayoutWrapper>    
        )
    }
}