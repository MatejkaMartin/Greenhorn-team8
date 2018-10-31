import React,{Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {

  render() {
    const { component: Component,  isAuthenticated, ...rest } = this.props;
    return(
     <Route {...rest}
     render={props => (
         isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
     )}
     />
    )}

}

function mapStateToProps(state) {
    return {
      isAuthenticated: state.authentication.authenticated
    };
}

const connectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);
export { connectedPrivateRoute as PrivateRoute };
