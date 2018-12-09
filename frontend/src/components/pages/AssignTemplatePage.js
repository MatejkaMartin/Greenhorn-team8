import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconAdd from '@material-ui/icons/Add';
import IconClose from '@material-ui/icons/Close';
import api from '../../api';
import { connect } from 'react-redux';
import { startFetchTemplates } from '../../services/templates/actions';
import { getTemplates } from '../../services/templates/reducer';
import AssignTemplateModal from '../molecules/AssignTemplateModal'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  column: {
    flexBasis: '33.33%',
  },
});

class AssignTemplatePage extends Component {

  state = {
    assignedTemplates: null,
    opened: [],
  }

  handleOpen = (id) => {
    let newArray = []
    newArray.push(id)
    this.setState({
      opened:newArray
    })
  }

  handleClose = () => {
    this.setState({
      opened: []
    })
  }

  componentDidMount() {
    this.fetch()
    this.props.startFetchTemplates()
  }

  fetch = () => {
    api
    .get('template/assignedTemplates')
    .then((response) => {
      this.setState({ assignedTemplates: response.data.assignedTemplates })
    })

  }

  delete = (job_position_id, template_id) => {
    api
    .delete('template/assignedTemplates?job_position_id='+job_position_id+ '&template_id='+template_id)
    .then(() => {
    this.fetch()
    }
    )
  }

  add = (templatesIds,job_position_id) => {
    api
    .post('template/assignTemplates',{ job_position_id:job_position_id,templatesIds:templatesIds  })
    .then(() => {
    this.fetch()
    this.setState({
      opened: [],
      assignedTemplates: null
    })
    }
    )
  }

  render() {
      const { classes } = this.props;
    return (
      <Layout className="ctp-2">
      <div className={classes.root}>
          {this.state.assignedTemplates && this.state.assignedTemplates.map(assignment => (
      <ExpansionPanel>
      <AssignTemplateModal handleClose={ this.handleClose } opened={ this.state.opened } assignment={ assignment } templates={this.props.templates} add = { this.add }/>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.column}>
            <Typography className={classes.heading}>{ assignment.name }</Typography>
        </div>
        <div className="column hover:shadow-inner" onClick={() => {this.handleOpen(assignment.job_position_id)} }>
            <Typography className={classes.heading}><IconAdd className={classes.heading}/>Assign template</Typography>
        </div>
        </ExpansionPanelSummary>
        { JSON.parse(assignment.templates).length === 0 &&         <ExpansionPanelDetails>
                <div className={classes.column}>
                  <Typography>No templates assigned</Typography>
                </div>
                </ExpansionPanelDetails>}
        { JSON.parse(assignment.templates).map(template => (
        <ExpansionPanelDetails>
        <div className={classes.column}>
          <Typography>{ template.template_name }</Typography>
        </div>
        <div className="column hover:shadow-inner" onClick={ () => {this.delete(assignment.job_position_id, template.template_id)}  }>
          <Typography className={classes.heading}><IconClose className={classes.heading}/>Unassign template</Typography>
        </div>
        </ExpansionPanelDetails>
        )
      )
      }
      </ExpansionPanel>
                ))}
    </div>
          </Layout>
    );
  }
}

AssignTemplatePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state  => {
    const { templateReducer } = state
    return {
      templates: getTemplates( templateReducer ),
    };
}

const mapDispatchToProps = {
  startFetchTemplates,
};

const assignTemplatePageWithStyles = withStyles(styles)(AssignTemplatePage);
const connectedAssignTemplatePageWithStyles = connect(mapStateToProps,mapDispatchToProps)(assignTemplatePageWithStyles);
export {connectedAssignTemplatePageWithStyles as AssignTemplatePage} ;
