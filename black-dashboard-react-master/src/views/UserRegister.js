import React from "react";
import { Container, Row, Col, Form, Input } from "reactstrap";
import '../assets/css/login.css';
function UserRegister() {

    return (
        <>
            <Container>
                <Row >
                    <Col xs={12} sm={12} md={12} xl={12}>
                        <div className="m-5 p-5">
                            <div className="card card-user p-5">
                                <div className="text-center">
                                    <img
                                        alt="..."
                                        className="avatar border-gray"
                                        src={require("assets/img/default-avatar.png")}
                                    />
                                </div>
                                <Form onSubmit="">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Input
                                            type="password"
                                            className="form-control"
                                            name="password"

                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            className="btn btn-primary btn-block"
                                        >

                                            <span>Register</span>
                                        </button>
                                    </div>
                                </Form>
                                <div className="text-center">
                                    <a href="/login" className="text-primary">Already have an account ?</a>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}



export default UserRegister;