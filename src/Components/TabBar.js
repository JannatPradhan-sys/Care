import React,{Component} from 'react';
import { Button} from 'react-bootstrap';
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './TabBar.css';
import Questionnare from './Questionnare';
import QuestionnareHistory from './QuestionnareHistory';


export default class TabBar extends Component{
    
    render(){
        
        return(
            <div className='Tab-Container'>
                <Router>
                    <Switch>
                        <Link to='/Questionnare'>
                            <Button variant="warning">Questionnare</Button>
                        </Link>
                    </Switch>
                    <Switch>
                        <Link to='/Questionnare History'>
                            <Button variant="warning">Questionnare History</Button>
                        </Link>
                    </Switch>
                    <Route path='/Questionnare'>
                        <Questionnare/>
                    </Route>
                    <Route path='/Questionnare History' exact>
                        <QuestionnareHistory/>
                    </Route>
                </Router>
                
  
            </div>
        )
    }
}