import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Bar, Doughnut } from '@reactchartjs/react-chart.js'

import React from 'react'

export default class Overview extends React.Component {

    constructor(props) {
        super(props);
        let today = new Date()
        this.state = {
            month: today.toLocaleString('en-us', { month: "long" }),
            year: today.getFullYear()
        }
    }

    update_data(){
        return {
            labels: Object.keys(this.props.data) || [],
            datasets: [
                {
                    data: Object.values(this.props.data),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1,
                },
            ],
            options: [{
                pieceLabel: { render: 'value' }
            }]
        }
    }

    render() {
        const _data = this.update_data()
        return (
            <Paper
                variant="elevation"
                elevation={2}>
                <Grid container direction="row">
                    <Grid item style={{ marginLeft: 1 + "%" }}>
                        <h1 className='title'>Overview</h1>
                    </Grid>

                    <Grid item style={{ marginLeft: 60 + "%" }}>
                        <h1 className='title'>{this.state.month} {this.state.year}</h1>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item sm={6} xs={6}>
                        <Doughnut data={_data}
                            options={{
                                title: {
                                    display: true,
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }} />
                    </Grid>
                    <Grid item sm={6} xs={6}>
                        <Bar data={_data}
                            options={{
                                title: {
                                    display: true,
                                    fontSize: 20
                                },
                                legend: {
                                    display: false
                                },
                                scales: {
                                    yAxes: [
                                      {
                                        ticks: {
                                          beginAtZero: true,
                                          precision: 0
                                        },
                                      },
                                    ],
                                  },
                            }} />
                    </Grid>
                </Grid>
            </Paper>
        )

    }
}
