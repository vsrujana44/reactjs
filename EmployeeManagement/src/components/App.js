import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

class App extends React.Component{
    render(){
        return(
          <div>
              <nav className="navbar navbar-default">
                  <div className="container-fluid">
                       <div className="navbar-header">
                          <Link to="/" className="navbar-brand">Employee Application</Link>
                       </div>
                      <ul className="nav navbar-nav">
                          <li><IndexLink to="/">Home</IndexLink></li>
                          <li><Link to="employee">Employee</Link></li>
                      </ul>
                  </div>
              </nav>
              <div className="container container-default">
                  {this.props.children}
              </div>
          </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;
