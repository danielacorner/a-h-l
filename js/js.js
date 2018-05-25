var ddexpanded=false
d3.select(".custom-toggler").on("click",function(){
	if(ddexpanded==false){
		ddexpanded=true
		expandDropdown()
	}else{
		ddexpanded=false
		collapseDropdown()}
})

function expandDropdown(){
	d3.select("#navbarContainer")
	.transition().duration(700)
		.style("height","293px")

	d3.select("#navbarContent")
	.transition().duration(700)
		.style("margin-top","50px")
		.style("opacity",1)
}

function collapseDropdown(){
	d3.select("#navbarContainer")
	.transition().duration(700)
		.style("height","0px")

	d3.select("#navbarContent")
	.transition().duration(700)
		.style("margin-top","30px")
		.style("opacity",0)
}


var dd_fullexpanded=false
d3.select("#navbarDropdown-full").on("mouseover",function(){
	if(dd_fullexpanded==false){
		dd_fullexpanded=true
		expandDropdown_full()
	}
})

function expandDropdown_full(){
	d3.select(".sub-menu").transition().duration(150)
	.style("opacity",1)
	d3.selectAll(".grid-item").on("mouseover", function(){
		if(dd_fullexpanded==true){
			dd_fullexpanded=false
			d3.select(".sub-menu").style("opacity",0)
		}
	})
}
// fade in img from left on start
// $(document).ready()