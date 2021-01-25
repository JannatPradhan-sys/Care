import React, { Component } from 'react';
import { Button, Card, Form, Col, Row } from 'react-bootstrap';
import './TabBar.css';
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./Utility/RadialSeparators";
import StarOutlineTwoToneIcon from '@material-ui/icons/StarOutlineTwoTone';

export default class ChildReadiness extends Component {
    state = {
        count: 1
    }

    increaseCounter = () => {
        if (this.state.count < 7) {
            this.setState(() => ({
                count: this.state.count + 1
            }))
        }

    }
    decreaseCounter = () => {
        if (this.state.count > 1) {
            this.setState(() => ({
                count: this.state.count - 1
            }))
        }

    }
    render() {

        return (
            <div>
                <div className='Question_Parent'>
                    <div className='Question_ChildDiv'>
                        <div label="Progressbar with separators" className='progress_bar'>
                            <CircularProgressbarWithChildren
                                value={14 * this.state.count}
                                text={`${this.state.count}/7`}
                                strokeWidth={10}
                                styles={buildStyles({
                                    strokeLinecap: "butt"
                                })}
                            >
                                <RadialSeparators
                                    count={7}
                                    style={{
                                        background: "#fff",
                                        width: "5px",
                                        // This needs to be equal to props.strokeWidth
                                        height: `${10}%`
                                    }}
                                />
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                    <div>
                    <Card className="achievementCard">
                        <Card.Body>
                            <Card.Text>
                                More {7 - this.state.count} question to go. You are doing great!
                            <StarOutlineTwoToneIcon style={{ float: 'right' }} />
                                <br />Keep up the work!
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                
                <div className='question_Card'>
                        <div style={{ margin: 'auto'}}>
                            <Card.Body >
                                <Card.Title>Question</Card.Title>
                                <Card.Text>
                                    <Form>
                                        <fieldset>
                                            <Form.Group as={Row}>


                                                <Col sm={10}>
                                                    <Form.Check
                                                        type="radio"
                                                        label="Answer"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="Answer"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios2"
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="Answer"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios3"
                                                    />
                                                </Col>


                                            </Form.Group>
                                        </fieldset>
                                        <Button variant="outline-primary" onClick={this.decreaseCounter} style={{ border: '2px solid #45b6fe', borderRadius: '5px' }}>Previous</Button>
                                        <Button variant="outline-primary" onClick={this.increaseCounter} style={{ border: '2px solid #45b6fe', borderRadius: '5px' }}>Next</Button>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>

            </div>
        )
    }
}