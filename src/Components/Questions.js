import React, { Component } from 'react';
import { Card, Form, Popover, OverlayTrigger } from 'react-bootstrap';
import HelpIcon from '@material-ui/icons/Help';
import './TabBar.css';
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./Utility/RadialSeparators";
import StarOutlineTwoToneIcon from '@material-ui/icons/StarOutlineTwoTone';
import Quiz from './Quiz/Quiz';


export default class ChildReadiness extends Component {
    state = {
        count: 1,
        
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
        const popover = (
            <Popover id="popover-basic">
                <Popover.Title as="h3">Quiz Help</Popover.Title>
                <Popover.Content>
                    And here's some <strong>amazing</strong> content. It's very engaging.
                right?
              </Popover.Content>
            </Popover>
        );

        const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <HelpIcon  className='HelpIcon' fontSize='large'/>
            </OverlayTrigger>
        );
        
        return (
            <div>
                <div className='Question_Parent'>
                    <div className='Progress_ParentDiv'>
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
                    <div style={{ margin: 'auto' }}>
                        <Card.Body >
                            {/* <Card.Title>Question</Card.Title>*/}
                            <Card.Text>
                                <Form>
                                    <fieldset>
                                        <Quiz increaseProgressBar={this.increaseCounter} decreaseProgressBar={this.decreaseCounter} />
                                    </fieldset>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>


                <Example />

            </div>
        )
    }
}