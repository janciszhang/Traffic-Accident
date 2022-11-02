var data2016 = './data/map_state2016.csv'
var data2017 = './data/map_state2017.csv'
var data2018 = './data/map_state2018.csv'
var data2019 = './data/map_state2019.csv'
var data2020 = './data/map_state2020.csv'

var pathToJSON='./data/map_state_full.csv'

/* Configuration */
const width = 1300 // Chart width
const height = 800 // Chart height
const margin = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
}
const selector = '.energy-map' // Where to put the chart (CSS selector)

// Colors used.
const colors = [
    '#00ff46',
    '#00bbff',
    '#ffdd00',
    '#ff0000',
]



// Display text.
const legendColorText = [
    'Slight',
    'Medium',
    'Serious',
    'Fatal',
]

// Legends.
const legendValues = [50, 500, 5000, 50000]

const chartTitle = 'The number of traffic accidents by severity'

function transform(data) {
    return data
}

const tip = d3
        .tip()
        .attr('class', 'd3-tip')
        // Display information
        .html(
            (d, i) =>
                `<span class="tooltip-title">${d.City}</span><br>
        <span class="tooltip-value" style="color:${colorScale(d.Group)}">${
                    d.Value
                }</span> accidents 
        <span class="tooltip-city">${d.Name}</span>`
        )

    // Colors.
    const colorScale = d3
        .scaleOrdinal()
        .domain([
            'Slight',
            'Medium',
            'Serious',
            'Fatal',
        ])
        .range(colors)

    const projection = d3
        .geoAlbersUsa()
        .scale(1600)
        .translate([margin.left + width / 2, margin.top + height / 2])

    const path = d3.geoPath().projection(projection)


    const svg = d3
        .select(selector)
        .append('svg')
        .attr('viewBox', [0, 0, width, height])
        .call(tip) // Required to call in the vis context, to display the tooltip


/*
 * data: bubble map data. See data/energy.csv for the schema.
 * geo: US map TopoJSON
 */
function chart([data, us, ValueMin]) {
    // const tip = d3
    //     .tip()
    //     .attr('class', 'd3-tip')
    //     // Display information
    //     .html(
    //         (d, i) =>
    //             `<span class="tooltip-title">${d.City}</span><br>
    //     <span class="tooltip-value" style="color:${colorScale(d.Group)}">${
    //                 d.Value
    //             }</span> accidents
    //     <span class="tooltip-city">${d.Name}</span>`
    //     )
    //
    // // Colors.
    // const colorScale = d3
    //     .scaleOrdinal()
    //     .domain([
    //         'Slight',
    //         'Medium',
    //         'Serious',
    //         'Fatal',
    //     ])
    //     .range(colors)
    //
    // const projection = d3
    //     .geoAlbersUsa()
    //     .scale(1600)
    //     .translate([margin.left + width / 2, margin.top + height / 2])
    //
    // const path = d3.geoPath().projection(projection)
    //
    // Scaling function for bubbles圆的半径规定范围
    const radius = d3.scaleSqrt(
        [0, d3.quantile(data.map(d => d.Value).sort(d3.ascending), 0.985)],
        [10,40]
        // [1.5, 10]
    )
    //
    // const svg = d3
    //     .select(selector)
    //     .append('svg')
    //     .attr('viewBox', [0, 0, width, height])
    //     .call(tip) // Required to call in the vis context, to display the tooltip

    /* Bubbles比例尺Legends */
    const legendBubbles = svg
        .append('g')
        .attr('fill', '#333')
        .attr('transform', `translate(${(11 * width) / 16}, ${height / 32})`)
        .attr('text-anchor', 'middle')
        .style('font', '10px')
        .selectAll('g')
        .data(legendValues)
        .join('g')

    legendBubbles
        .append('circle')
        .attr('fill', 'none')
        .attr('stroke', '#999')
        .attr('stroke-width', 1.5)
        .attr('cx', (d, i) => (radius(d) + 50) * i / 2-40)
        .attr('cy', d => radius(d) + height / 16)
        .attr('r', radius)

    legendBubbles
        .append('text')
        .attr('x', (d, i) => (radius(d) + 50) * i / 2-40)
        .attr('y', height / 16)
        .attr('dy', '-0.5em')
        .attr('font-size', '14')
        .text((d, i) => (i === 3 ? `${d}` : d))

    /* Bubbles分类Legends */
    // We want to display text with colors,
    // so zip the legend text array with the colors array.
    const legendColors = svg
        .append('g')
        .attr('fill', '#333')
        .attr('transform', `translate(${(59 * width) / 64}, ${height / 2})`)
        .attr('text-anchor', 'middle')
        .style('font', '10px')
        .selectAll('g')
        .data(d3.zip(legendColorText, colors))
        .join('g')

    const legendColorsRadius = 10

    legendColors
        .append('text')
        .attr('x', legendColorsRadius + 5)
        .attr('y', (d, i) => legendColorsRadius * 3 * i)
        .attr('text-anchor', 'start') // Text at start
        .attr('dominant-baseline', 'central') // Center
        .attr('font-size', '13')
        .text(d => d[0])

    legendColors
        .append('circle')
        .attr('fill', d => d[1])
        .attr('cy', (d, i) => legendColorsRadius * 3 * i)
        .attr('r', legendColorsRadius)

    // Legend title
    const legendTitle = svg
        .append('g')
        .attr('fill', '#333')
        .attr('transform', `translate(${(24 * width) / 32}, ${(2 * height) / 64})`)
        .attr('text-anchor', 'middle')

    legendTitle
        .append('text')
        .attr('dominant-baseline', 'hanging')
        .attr('font-size', '15')
        .attr('font-weight', '800')
        .text(chartTitle)

    /* Map creation */
    svg
        .append('g')
        .attr('fill', '#ddd')
        .attr('id', 'map')
        .selectAll('path')
        .data(topojson.feature(us, us.objects.states).features)
        .enter()
        .append('path')
        .attr('d', path)

    // States strokes
    svg
        .append('path')
        .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 1.5)
        .attr('stroke-linejoin', 'round')
        .attr('d', path)

    /* Circles */
    svg
        .append('g')
        .attr('id', 'circles')
        .attr('fill', '#aaa')
        .attr('fill-opacity', 0.55)
        .attr('stroke', '#fff')
        .attr('stroke-width', 0)
        .selectAll('circle')
        .data(
            data
                .map(d => ((d.proj = projection([d.Longitude, d.Latitude])), d))
                .filter(e => e.proj !== null) // Filter values with lon/lat not set
                .sort((a, b) => b.Value - a.Value)
        )
        .join('circle')
        .attr('r', d => radius(d.Value))
        .attr('fill', d => colorScale(d.Group))
        .attr('transform', d => `translate(${d.proj})`)
        .on('mouseover', tip.show) // Display tooltip
        .on('mouseout', tip.hide)
        // start action
        .attr('r', d => 0)
        .attr('fill', 'white')
        .attr('transform', d => `translate(${d.proj})`)
        .transition()
        .duration(2000)
        .ease(d3.easeQuadOut)
        .attr('r', d => radius(d.Value))
        .attr('fill', d => colorScale(d.Group))
        .attr('transform', d => `translate(${d.proj})`)

        // .on("mouseover", function (d) {
        //     svg.selectAll("circle").attr("opacity", 0.1)
        //     d3.select(this)
        //         .transition()
        //         .duration(200)
        //         .ease(d3.easeQuadOut)
        //         .attr('r', d => radius(d.Value) * 2)
        //         .attr('opacity', 1)
        //         .attr("stroke", "black")
        //         .attr("stroke-width", 2)
        //     // tip.show
        // })
        // .on('mouseout', function () {
        //     tip.hide
        //     svg.selectAll("circle")
        //         // .transition()
        //         // .duration(200)
        //         // .ease(d3.easeQuadOut)
        //         .attr('r', d => radius(d.Value))
        //         .attr('fill-opacity', 0.55)
        //         .attr('stroke', '#fff')
        //         .attr('stroke-width', 0)
        // })


}

// Load all the data before continuing.
function loadData(pathToJSON){
    Promise.all([d3.csv('data/map_state2016.csv', d3.autoType), d3.json('data/us.json')])
    .then(data => transform(data))
    .then(data => chart(data))
    .catch(error => {
        console.error('[d3]', error)
    })
}

loadData(pathToJSON)

function changeData(pathToJSON) {
    svg.selectAll("*").transition().duration(1000).remove();
    loadData(pathToJSON)
}

