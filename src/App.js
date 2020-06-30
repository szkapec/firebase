import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashbord from './component/dashbord/Dashbord';
import ProjectDetails from './component/projects/ProjectDetails';
import SignIn from './component/auth/SingIn';
import SingUp from './component/auth/SignUp';
import CreateProject from './component/projects/CreateProject';
import Footer from './component/layout/Footer';


class App extends Component {



  render(){
    return (
       <BrowserRouter>
          <div style={{position:'relative', minHeight:'100vh', backgroundColor: '#A1978F'}} className="App">
            <Navbar></Navbar>
            <Switch>
                <Route exact path='/' component={Dashbord}/>
                <Route path='/project/:id' component={ProjectDetails}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/signup' component={SingUp}/>
                <Route path='/create' component={CreateProject}/>
            </Switch>
            <Footer/>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
