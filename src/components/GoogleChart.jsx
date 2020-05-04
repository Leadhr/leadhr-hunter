import * as React from "react";
import { Chart } from "react-google-charts";
import './chart.css'

const data = [
    // ["ID", "Life Expectancy", "Fertility Rate", "Region", "Population"],
    // ["CAN", 80.66, 1.67, "North America", 33739900],
    // ["DEU", 79.84, 1.36, "Europe", 81902307],
    // ["DNK", 78.6, 1.84, "Europe", 5523095],
    // ["EGY", 72.73, 2.78, "Middle East", 79716203],
    // ["GBR", 80.05, 2, "Europe", 61801570],
    // ["IRN", 72.49, 1.7, "Middle East", 73137148],
    // ["IRQ", 68.09, 4.77, "Middle East", 31090763],
    // ["ISR", 81.55, 2.96, "Middle East", 7485600],
    // ["RUS", 68.6, 1.54, "Europe", 141850000],
    // ["USA", 78.09, 2.05, "North America", 307007000],
    ["ID", "y", "x"],
    ["AO", 39.375, 33.125],
    ["NR", -16.875, -10.625],
    ["DN", 1.875, 33.125],
    ["RG", 25, 22.5],
    ["KA", 32.5, 0]
];

const options = {
    title:
        "",
    hAxis: { 
        title: "⇦ INTERDEPENDENCE  -  Interacting w Others  -  INDEPENDENCE ⇨",
        minValue: -50,
        maxValue: 50,
        ticks: [
            -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50
        ]
    },
    vAxis: { 
        title: "⇦ STABILITY  -  Responding to Change  -  FLEXIBILITY ⇨",
        minValue: -50,
        maxValue: 50
    },
    bubble: { textStyle: { fontSize: 11 } },
    width: 800,
    height: 800,
    sizeAxis: {
        minValue: 0, 
        maxSize: 20
    },
    backgroundColor: '#f3f1eb'
};
class GoogleChart extends React.Component {
    render() {
        return (
            <div className="chartWithOverlay"
                style={{display: 'block', 
                    marginLeft: 'auto', 
                    marginRight: 'auto'}}
            >
                <Chart
                    chartType="BubbleChart"
                    data={data}
                    options={options}
                />
                <div className="overlay">
                    <div style={{marginTop: '50px', marginLeft: '185px'}}>Exploring</div>
                    <div ></div>
                    <div style={{marginTop: '254px', marginLeft: '480px'}}>Achieving</div>
                    <div></div>
                    <div style={{marginTop: '262px', marginLeft: '186px'}}>Structuring</div>
                    <div></div>
                    <div style={{marginTop: '-310px', marginLeft: '-110px'}}>Caring</div>
                    <div></div>
                </div>
                <div className="overlay">
                    <div style={{marginTop: '50px', marginLeft: '450px'}}>Enjoying</div>
                    <div style={{marginTop: '540px', marginLeft: '440px'}}>Commanding</div>
                    <div style={{marginTop: '-24px', marginLeft: '-102px'}}>Organizing</div>
                    <div style={{marginTop: '-590px', marginLeft: '-102px'}}>Considering</div>
                </div>
            </div>
        );
    }
}

export default GoogleChart;
