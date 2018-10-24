import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[500],
      main: green[700],
      dark: green[900],
    },
    secondary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
  },
});

function withRootTemplate(Component) {
  function WithRootTemplate(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRootTemplate;
}

export default withRootTemplate;
