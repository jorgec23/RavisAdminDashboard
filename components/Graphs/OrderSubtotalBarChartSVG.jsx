import {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';
import styles from './styles/OrderSubtotalBarChartSVG.module.scss';

export default function OrderSubtotalBarChartSVG({data}) {
    const d3Chart = useRef()
    const d3ChartContainer = useRef()

    const [update, setUpdate] = useState(false)
    // const update = useRef(false)
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })
    

    const margin = {top: 30, right:20, bottom:30, left:80}


    useEffect(()=> {
        // console.log('this is running again')
        // note that svgs have their own properties defined within 'current', wrap in a div and then call offsetWidth if you need it
        window.addEventListener('resize', ()=> {
            let currentWidth = window.innerWidth;
            let currentHeight = window.innerHeight;
            // console.log('initial dimensions', dimensions)
            if (Math.abs(currentWidth - dimensions.width) > 100 || Math.abs(currentHeight - dimensions.height) > 100){
                // console.log('do i make it here?')
                setUpdate(true)
                // note that the dimensions do not actually do anything except trigger a redraw ... the d3 chart height and width change with the given 
                // parent element, currently at 100% width and 50vh ...
                setDimensions({
                    width: d3ChartContainer.current.offsetWidth,
                    height: d3ChartContainer.current.offsetHeight,
                })
                // console.log('new dimensions', window.innerWidth, window.innerHeight)
            } else {
                setUpdate(false)
            }
        })

        // the code below will only be triggered if resizing graph by more than 100 units in either height or width
        if (update){
            d3.selectAll('g').remove()
            d3.selectAll("text").remove()
            DrawChart(data,dimensions)
        }else{
            setUpdate(true)
        }
        
        

    },[dimensions.width, dimensions.height,update])



    const DrawChart = (data, dimensions) => {
        // the values below are dependent on the div containing the svg I believe, as window gets
        // // bigger, so does the graph
        const chartWidth = parseInt(d3.select(d3Chart.current).style('width')) - margin.left - margin.right;
        // const chartWidth = dimensions.width - margin.left - margin.right;
        const chartHeight = parseInt(d3.select(d3Chart.current).style('height')) - margin.top - margin.bottom; 
        // const chartHeight = dimensions.height - margin.top - margin.bottom; 
        
        // set up the svg that will hold the chart, along with its dimensions
        const svg = d3.select(d3Chart.current)
                        .attr('width', chartWidth + margin.left + margin.right)
                        .attr('height', chartHeight + margin.top + margin.bottom);

        /*
        --------------- THE X AXIS ---------------
        */
        const x = d3.scaleBand()                            // sets up an axes, 
                    .domain(d3.range(data.length))    // the number of bars
                    .range([margin.left, chartWidth + margin.left-margin.right]) // the width covered by all of the bars
                    .padding(.1)// spacing between bars, note that spacing does decrease the width of each bar, as the range constraint is honored first
        
        svg.append('g') // appends an svg group element, which are themselves svg's
            .attr('transform', 'translate(0,'+ chartHeight + ')')   // translate the group down by 'chartHeight' units, translate(right, down) is the default
            .call(d3.axisBottom(x).tickFormat(i=>data[i].category).tickSizeOuter(10))  // axis bottom creates a bottom horizontal axis, tickFormat supplies the labels
            .select('path').style('stroke','black').style('stroke-width',2);
            // ticksizeouter just sets the size of the tick marks on the left and right edges, hence the 'outer'

        

        svg.append("text")
            .attr("x", chartWidth/2 + margin.left)
            .attr("y", chartHeight + margin.bottom/2 + margin.top)
            .style("text-anchor", "middle")
            .style("font-weight", 700)
            .text("Dates");

        /*
        --------------- THE Y AXIS ---------------
        */
        const max = d3.max(data, d => d.quantity)    // max works on arrays, but can also be used on objects storing the data to be searched through
        // this particular implementation uses an arrow function to specify which property of the object/data to look through

        // console.log(chartHeight, margin.top)
        const y = d3.scaleLinear()     // creates a scale that can then be fed to an axis creator function
                    .domain([0, max])   // the 'range' of the scale
                    .range([chartHeight, margin.top]);  // the physical space this scale will take up, note this is a flipped range, margin.top acts as the origin/base value(the zero value)
                                                        // the first number describes the space the graph should take below the base value

        svg.append('g') // add a y-axis group to the original svg
            .attr('transform', 'translate(' + margin.left + ',0)') // shift to the right margin.left pixels, and down 0
            .call(d3.axisLeft(y))       // calls the axisLeft function which takes care of creating the svg elements that make up the y axis
            .select('path').style('stroke','black').style('stroke-width',2); // note that the tick mark scales are decided by the algorithm itself, divides the domain evenly, has some default way of determining 
                                        // number of tick marks, and spacing between them ...
        
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", 0 - chartHeight/2)  // moves the word left and right ( horizontally, along the direction of the writing )
            .attr("y", margin.left/4)   // moves the text perpendicular to the direction of the writing, positive number moves word below current position, negative raises it
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("font-weight", 700)
            .text("Sales");

        /*
        --------------- Bars/Content of Chart ---------------
        */    
        // the flow of the chain calls is kind of tripping me up, you are selectAll elements that do not exist yet ...
        // according to 'bost.ocks.org/mike/join/', this is telling d3 to make circles that correspond to the data, a 'data join'
        // the selectAll returns a new empty selection, then binds to the data with '.data(data)', which is then joined
        // or paired up with a 'rect' element ( for each data point in set )  '.join' is basically a shorthand for '.enter().append( ... )'
        // console.log(y(0), y(20), y(183))
        // console.log("x", x(0), x(1), x(2))
        // console.log("bandwidth", x.bandwidth())
        svg.append('g')
            .attr('fill', '#59B210')// fills with teal blue color
            .selectAll('rect') // creates an empty selection
            .data(data) // binds data to the empty selection
            .join('rect') // for each data point in data, adds a rectangle to the empty selection group, hence the same name ... 
                .attr('x', (d,i) => x(i))   // position in the x, note that this uses the scaleBand from above
                .attr('y', d=> y(d.quantity))   // position in the y, using the linear scale from above, note that the origin is at the top left, so y(183) is smaller than y(20), as y(20) represents a bar that starts lower
                .attr('height', d=>y(0)-y(d.quantity))  // assigns a height to each element, y(0) corresponds to the zero position
                .attr('width', x.bandwidth())   // assigns a width to each element, which is fixed
                .attr('stroke', 'black')
                .attr('stroke-width', 2)

    }

    return (
        <div ref ={d3ChartContainer} className={styles.barChartContainer}>
            <svg ref={d3Chart} className={styles.barChartContainer}></svg>
        </div>
    )
}