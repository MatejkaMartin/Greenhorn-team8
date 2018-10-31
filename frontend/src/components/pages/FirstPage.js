import React, { Component } from 'react';
import { Layout } from '../atoms/Layout';
import NavigationBar from '../molecules/NavigationBar'
import { connect } from 'react-redux';
import { logout } from '../../actions/user.actions';

class FirstPage extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
  const { logout } = this.props;
  logout();
  }

  render() {
    return (
      <Layout>
        <div>
          <NavigationBar user={this.props.user} onClick={this.onClick} />
        </div>
      </Layout>
    )
  }
}


function mapStateToProps(state) {
    const { user } = state.authentication.user;
    return { user };
}

const mapDispatchToProps = { logout };

const connectedFirstPage = connect(mapStateToProps,mapDispatchToProps)(FirstPage);
export { connectedFirstPage as FirstPage };
