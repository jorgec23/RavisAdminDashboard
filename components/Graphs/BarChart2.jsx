import {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';
import styles from './BarChart2.module.scss';


const sampleData = [
    {category:'A', quantity: 40},
    {category:'B', quantity: 151},
    {category:'C', quantity: 89},
    {category:'D', quantity: 124},
]


export default function Chart() {
    const d3Chart = useRef()

    useEffect(()=> {
        const margin = {top: 50, right:30, bottom:30, left:60}
        console.log(d3.select(d3Chart));

        const chartWidth = parseInt(d3.select(d3Chart.current).style('width')) - margin.left - margin.right;
        const chartHeight = parseInt(d3.select(d3Chart.current).style('height')) - margin.left - margin.right; 
        
        const svg = d3.select(d3Chart.current)
                        .attr('width', chartWidth + margin.left + margin.right)
                        .attr('height', chartHeight + margin.top + margin.bottom);

        const x = d3.scaleBand()
                    .domain(d3.range(sampleData.length))
                    .range([margin.left, chartWidth - margin.right])
                    .padding(.1);

        svg.append('g')
            .attr('transform', 'translate(0,'+ chartHeight + ')')
            .call(d3.axisBottom(x).tickFormat(i=>sampleData[i].category).tickSizeOuter(0))
    },[])

    return (
        <div id={styles["d3demo"]}>
            <svg ref={d3Chart}></svg>
        </div>
    )
}