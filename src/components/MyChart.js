import React, { Component } from 'react'
import { Bar } from "react-chartjs-2";

export default class MyChart extends Component {
    theChart = React.createRef()

    state = {
        chosenData: []
    }

    static getDerivedStateFromProps(props, state){
        if(props.data !== state.chosenData){
            const newDatasets = props.data.map(d => {
                const color = props.randColor()
                return ({
                    label: d.name,
                    backgroundColor: color,
                    barPercentage: 0.5,
                    maxBarThickness: 150,
                    minBarLength: 2,
                    data: [d.vitalityAge, d.realAge]
                })
            })
            return {
                data: newDatasets
            }
        }
    }

    render() {
        return (
            <div>
                <Bar 
                    redraw
                    ref={this.theChart}
                    data={{
                    labels: ["Vitality Age", "Real Age"],
                    datasets: this.state.data,
                    options: {
                        scales: {
                        yAxes: [
                            {
                            scaleLabel: {
                                display: true,
                                labelString:
                                "Ages",
                            },
                            ticks: {
                                beginAtZero: true,
                            },
                            },
                        ],
                        },
                        maintainAspectRatio: false,
                    }
                }}
                />
            </div>
        )
    }
}
