import { Button } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import CreateWorklog from './CreateWorklog'

const headCells = [
    { id: 'worklog_type', numeric: false, disablePadding: true, label: 'Worklog Type' },
    { id: 'project', numeric: true, disablePadding: false, label: 'Project' },
    { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
    { id: 'comment', numeric: true, disablePadding: false, label: 'Comment' },
];

export default class Worklogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createWorklog: false
        }
        this.showCreateWorklogDialog = this.showCreateWorklogDialog.bind(this)
    }

    showCreateWorklogDialog(show) {
        this.setState({
            createWorklog: show
        })
        this.props.refresh()
    }

    render() {
        return (
            <Paper
                variant="elevation"
                elevation={2}
                className="worklogs">
                <Grid container direction="row">
                    <Grid item style={{ marginLeft: 1 + "%" }}>
                        <h4>Work Logs</h4>
                    </Grid>
                    <Grid item style={{ marginLeft: 85 + "%", marginTop: 1 + "%" }}>
                        <Button variant="contained" color="primary" onClick={() => {this.showCreateWorklogDialog(true)}}>Add Worklog</Button>
                        {
                            this.state.createWorklog ? <CreateWorklog createWorklog={this.state.createWorklog} showDialog={this.showCreateWorklogDialog}/> : null
                        }
                    </Grid>
                </Grid>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    inputProps={{ 'aria-label': 'select all worklogs' }}
                                />
                            </TableCell>
                            {headCells.map((headCell) => (
                                <TableCell align="center" >
                                    <TableSortLabel>
                                        {headCell.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((row, index) => {
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.id}
                                >
                                    <TableCell padding="checkbox" align="center">
                                        <Checkbox
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </TableCell>
                                    <TableCell component="th" scope="row" padding="none" align="center">
                                        {row.worklogType}
                                    </TableCell>
                                    <TableCell align="center">{row.project}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell align="center">{row.comment}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}