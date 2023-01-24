import Worklogs from './Worklogs.js'
import Overview from './Overview.js'
import Grid from '@material-ui/core/Grid'
import React from 'react'

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            worklogTypeCount: {}
        }
        this.refresh = this.refresh.bind(this)
    }

    getData() {
        let host = process.env.REACT_APP_BACKEND_HOST
        
        fetch(host + "/api/v1/users/test/worklog").then(res => res.json()).then((result) => {
            let worklogTypeCount = this.worklogOverviewData(result)
            this.setState({
                data: result,
                worklogTypeCount: worklogTypeCount
            })
        })
    }

    worklogOverviewData(data) {
        let worklogTypeCount = {}
        for (let worklogData of data) {
            let type = worklogData['worklogType']
            if (type in worklogTypeCount) {
                worklogTypeCount[type] = worklogTypeCount[type] + 1
            } else {
                worklogTypeCount[type] = 1
            }
        }
        return worklogTypeCount;
    }

    componentDidMount() {
        this.getData()
    }

    refresh(){
        this.getData()
    }

    render() {
        return (
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Overview data={this.state.worklogTypeCount} />
                </Grid>
                <Grid item>
                    <Worklogs data={this.state.data} refresh={this.refresh}/>
                </Grid>
            </Grid>
        )
    }
}