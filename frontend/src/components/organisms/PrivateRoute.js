import React,{Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationBar from '../organisms/NavigationBar'
import { getUser,getIsAuthenticated } from '../../services/auth/reducer';
import { Layout } from '../atoms/Layout'
import { AlertThis } from '../atoms/AlertThis'

class PrivateRoute extends Component {

  render() {
    const { component: Component,  isAuthenticated, ...rest } = this.props;
    return(
     <Route {...rest}
     render={props => (isAuthenticated ? <Layout className="dp-1">
           <NavigationBar className={ getPageName(this.props.path) } idmenu="0" user= { this.props.user }>
           <AlertThis />
             <Component {...props}  user= { this.props.user } errorDispatch = { this.props }/>
           </NavigationBar>
         </Layout> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
     )}
     />
    )}

}

const getPageName = path => {
   switch(path) {
     case '/dashboard':
     return 'Dashboard';
     case '/tasks':
     return 'Tasks';
     case '/people':
     return 'People';
     case '/setting':
     return 'Settings';
     case '/tasks/add':
     return 'Create task';
     case '/people/add':
     return 'Create user';
     default:
     return 'Navigation'
   }
}

const mapStateToProps = state  => {
    const { authenticationReducer } = state
    return {
      isAuthenticated: getIsAuthenticated(authenticationReducer),
      user: getUser(authenticationReducer)
    };
}


const connectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);
export { connectedPrivateRoute as PrivateRoute };
