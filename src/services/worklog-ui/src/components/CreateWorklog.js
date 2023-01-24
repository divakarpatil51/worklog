import { Button, Input, InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import moment from 'moment'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default class CreateWorklog extends React.Component {

  constructor(props) {
    super(props);
    console.log("in Createworklog")
    this.state = {
      worklogType: 'Remote',
      project: 'Backend',
      date: moment(new Date()).format('YYYY-MM-DD'),
      comment: ''
    }
    this.worklogTypeChange = this.worklogTypeChange.bind(this)
    this.createWorklog = this.createWorklog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.projectChange = this.projectChange.bind(this)
    this.dateChange = this.dateChange.bind(this)
    this.commentChange = this.commentChange.bind(this)
  }

  worklogTypeChange(event) {
    console.log(event.target.value)
    this.setState({
      worklogType: event.target.value
    })
  }

  projectChange(event) {
    this.setState({
      project: event.target.value
    })
  }

  dateChange(event) {
    this.setState({
      date: event.target.value
    })
  }

  commentChange(event) {
    this.setState({
      comment: event.target.value
    })
  }

  createWorklog() {
    let _body = {
      "worklogType": this.state.worklogType,
      "project": this.state.project,
      "date": moment(this.state.date).format('DD-MM-YYYY'),
      "comment": this.state.comment
    }
    let host = process.env.REACT_APP_BACKEND_HOST
    fetch(host + "/api/v1/users/test/worklog", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(_body)
    }).then(res => res.json()).then((result) => {
      this.closeDialog()
    })
    
  }

  closeDialog() {
    this.props.showDialog(false)
  }

  render() {
    
    console.log()
    return (

      <Dialog open={this.props.createWorklog} aria-labelledby="customized-dialog-title" fullWidth spacing={5}>
        <DialogTitle id="customized-dialog-title" onClose={this.closeDialog}>
          Add Worklog
        </DialogTitle>
        <DialogContent dividers>
          <Grid container direction="column" spacing={3} justify="space-around">
            <Grid item>
              <InputLabel id="worklogType">Worklog Type</InputLabel>
              <Select labelId="worklogType" value={this.state.worklogType}
                onChange={this.worklogTypeChange}>
                <MenuItem value="Remote" >Remote</MenuItem>
                <MenuItem value="Office">Office</MenuItem>
                <MenuItem value="Vacation">Vacation</MenuItem>
                <MenuItem value="Holiday">Holiday</MenuItem>
                <MenuItem value="Sick">Sick</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel id="project">Project</InputLabel>
              <Select labelId="project" value={this.state.project}
                onChange={this.projectChange}>
                <MenuItem value="Backend">Backend</MenuItem>
                <MenuItem value="User Interface">User Interface</MenuItem>
                <MenuItem value="UX">UX</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel id="project">Date</InputLabel>
              <form noValidate>
                <TextField
                  id="date"
                  type="date"
                  value={this.state.date}
                  onChange={this.dateChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
            <Grid item>
              <InputLabel id="project">Comment</InputLabel>
              <Input onChange={this.commentChange} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={this.closeDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={this.createWorklog}>Create</Button>
        </DialogActions>
      </Dialog>

    )
  }
}