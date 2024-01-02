import React from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Table, ButtonGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";

function UpdateManager() {
    return (
        <>
            <div className="content">

                <Row>
                    <Col xs={12} md={9} xl={9}>
                        <h3>Gérer Manager</h3>
                    </Col>
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                    <Col xs={12} md={1} xl={1}>
                        <Button size="sm" className="btn btn-danger" tag={Link} to="/admin/managers"><i className="tim-icons icon-simple-remove text-white" /></Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                    <Col xs={12} md={8} xl={8} >
                        <Card className="p-3">
                            <CardHeader>
                                <CardTitle tag="h3">
                                    Modifier MANAGER
                                </CardTitle>
                            </CardHeader>
                            <CardBody className="p-5">
                                <Form onSubmit="">
                                    <div className="form-group">
                                        <label htmlFor="nom">NOM :</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="nom"

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">EMAIL :</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="email"

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">PASSWORD :</label>
                                        <Input
                                            type="password"
                                            className="form-control"
                                            name="password"

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="matricule">Nº DE MATRICULE :</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="matricule"

                                        />
                                    </div>
                                    <div className="form-group">
                                        <Col xs={12} md={4} xl={4} className="">
                                            <button
                                                className="btn btn-success btn-block"
                                            >
                                                <span>ENREGISTRER</span>
                                            </button>
                                        </Col>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col xs={12} md={2} xl={2}>

                    </Col>
                </Row>

            </div>

        </>

    )
}

export default UpdateManager;