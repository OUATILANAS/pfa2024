
import React from "react";
import { Button, CardHeader, Col, Input, Row, Card, CardTitle, CardBody, Table, ButtonGroup } from "reactstrap";


function Clients() {

    return (
        <>
            <div className="content">
                <Row>
                    <Col xs={12} md={2} xl={2}>
                        <h3>Gérer les Clients</h3>
                    </Col>
                    <Col xs={12} md={9} xl={9}>
                        <Input placeholder="Search" type="text" name="search" />
                    </Col>
                    <Col xs={12} md={1} xl={1}>
                        <Button size="sm" className="btn btn-success"><i className="tim-icons icon-simple-add text-white" /></Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={12} xl={12}>
                        <Card>
                            <CardHeader >
                                <CardTitle tag="h5">Listes des CLIENTS</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                Nom
                                            </th>
                                            <th>
                                                Email
                                            </th>
                                            <th className="text-center">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td>1</td>
                                        <td>AIT ZAOUIT Omaima</td>
                                        <td>omaimazouita@gmail.com</td>
                                        <td className="text-center">
                                            <ButtonGroup>
                                                <Button size="sm" color="primary" ><i className="tim-icons icon-pencil text-white" /></Button>
                                                <Button size="sm" color="danger" ><i className="tim-icons icon-trash-simple text-white" /></Button>
                                            </ButtonGroup>
                                        </td>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        </>
    )
}
export default Clients;