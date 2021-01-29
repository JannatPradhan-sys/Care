import React, { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './TabBar.css';

//separate

//separat

export default class QuestionnareHistory extends Component {

    render() {
       
        return (

            <div>
                <Accordion defaultActiveKey="0" className='QuestionnareHistory-Accordion'>
                    <Card className='QuestionnareHistory-card'>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                            12/18/2020 - Patient Results
                            <ArrowForwardIosIcon fontSize='small' style={{ float: 'right' }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                Foundation<br />Knowledge<br />Communication<br />Ownership
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className='QuestionnareHistory-card'>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            12/18/2020 - Patient Results
                            <ArrowForwardIosIcon fontSize='small' style={{ float: 'right' }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Foundation<br />Knowledge<br />Communication<br />Ownership
                                </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className='QuestionnareHistory-card'>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            12/18/2020 - Patient Results
                            <ArrowForwardIosIcon fontSize='small' style={{ float: 'right' }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Foundation<br />Knowledge<br />Communication<br />Ownership
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className='QuestionnareHistory-card'>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            12/18/2020 - Patient Results
                            <ArrowForwardIosIcon fontSize='small' style={{ float: 'right' }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                Foundation<br />Knowledge<br />Communication<br />Ownership
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className='QuestionnareHistory-card'>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            12/18/2020 - Patient Results
                            <ArrowForwardIosIcon fontSize='small' style={{ float: 'right' }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                Foundation<br />Knowledge<br />Communication<br />Ownership
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className='QuestionnareHistory-card'>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                            12/18/2020 - Patient Results
                            <ArrowForwardIosIcon fontSize='small' style={{ float: 'right' }} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                Foundation<br />Knowledge<br />Communication<br />Ownership
                            </Card.Body>

                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}