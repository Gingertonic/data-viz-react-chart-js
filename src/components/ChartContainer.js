import React, { Component } from 'react'
import MyChart from './MyChart'
import DataButton from './DataButton'

export default class ChartContainer extends Component {
    state = {
        allData: [
            {name: "Bob", vitalityAge: 20, realAge: 23},
            {name: "Charlie", vitalityAge: 31, realAge: 29},
            {name: "Sarah", vitalityAge: 30, realAge:27}, 
            {name: "Ari", vitalityAge: 36, realAge: 40}
        ],
        chosenData: [{name: "Average", vitalityAge: 18, realAge: 18}]
    }

    hanClik = d => {
        let newChoices
        if (this.state.chosenData.includes(d)) {
            newChoices = this.state.chosenData.filter(c => c !== d)
        } else {
            newChoices = this.state.chosenData
            newChoices.push(d)
        }
        this.setState({chosenData: newChoices})
    }

    renderDataButtons = () => {
        return ( this.state.allData.map(d => {
                return <DataButton hanClik={this.hanClik} val={d} />
            }))
    }

    randomBgColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);

        const bgColor = "rgb(" + x + "," + y + "," + z + ")";

        return bgColor;
    }    
    
    render() {
        return (
            <>
                { this.renderDataButtons() }
                <MyChart data={this.state.chosenData} randColor={this.randomBgColor}/>
            </>
        )
    }
}
