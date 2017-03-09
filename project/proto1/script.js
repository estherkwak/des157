//Width and height
var w = 800;
var h = 600;

var projection = d3.geo.mercator()
					   .center([ -120, 37 ])
					   .translate([ w/2, h/2 ])
					   .scale([ w*3.3 ]);

//d3 generate a path
var path = d3.geo.path()
				 .projection(projection);

//make svg
var svg = d3.select("#container")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

//read county data from json (GEOJSON)
d3.json("cacounties.json", function(error,json) {
	if (error) {
		console.log(error)
	}
	svg.selectAll("path")
		.data(json.features)
		.enter()
		.append("path")
		.attr("class", "land")
		.attr("d", path)
		.style("fill", "#97d5e0")//initial background color
	   	.on("mouseover", function(d){
	   		//position the tooltip
			var xPosition = w/2 - 200;
			var yPosition = h/2;
			d3.select("#tooltip")
			.style("left", xPosition + "px")
			.style("top", yPosition + "px");
			d3.select("#county")
			.text(d.properties.name);//county text filled
			d3.select("#tooltip")
			.classed("hidden", false);
			d3.select(this).attr("class", "land")
	   		.style("fill", "#efcec5"); //change color on hover
			})
		.on("mouseout", function(){
		d3.select("#tooltip").classed("hidden", true);
		d3.select(this).attr("class","land").style("fill", "#97d5e0"); //back to background color
		});
});
