import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import './TabBar.css';

export default class ParentReadiness extends Component {

    render() {

        return (
            

                <Card className='ChildReadiness-Card'>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text>
                            <p>This question will help you to determine your readiness to transition to adult health care.Beign able to take care
                            of your <br />
                            health is important. Please answer honestly!
                        </p>
                            <p>
                                This question will be broken up into the following categories:<br />
                                <b>Foundation</b><br />
                                <b>Knowledge</b><br />
                                <b>communication</b><br />
                                <b>Ownership</b><br />
                            </p>
                        </Card.Text>

                        <Button variant="outline-primary">Let's Begin!</Button>
                    </Card.Body>

                </Card>
         
        )
    }
}