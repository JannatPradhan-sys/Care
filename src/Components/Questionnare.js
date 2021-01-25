import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './TabBar.css';
import ChildReadiness from './ChildReadiness';
import ParentReadiness from './ParentReadiness';

export default class TabBar extends Component {
    state={
        val:1
    }

    hideButton=()=>{
        this.setState(()=>({
            val:0
        }))
    }
    MouseOver=(event)=> {
        event.target.style.background = 'red';
      }

    render() {
        
        return (
            <div className='Questionnare-Container'>
                <Router>
                {this.state.val ? 
                <>
                <Switch>
                    <Link to='/Child Readiness'>
                        <Button variant="outline-primary" ><b>Child Readiness</b></Button>
                    </Link>
                </Switch>
                <Switch>
                    <Link to='/Parent Readiness'>
                        <Button variant="outline-primary" ><b>Parent Readiness</b></Button>
                    </Link>
                </Switch>
                </>:
                <></>
                
                }
                    <Route path='/Child Readiness' exact>
                        <ChildReadiness hideReadinessButton={this.hideButton}/>
                    </Route>
                    <Route path='/Parent Readiness' exact>
                        <ParentReadiness />
                    </Route>
                </Router>
            </div>
        )
    }
}