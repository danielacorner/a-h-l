// collapsible dropdown
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
		.style("height","285px")

	d3.select("#navbarContent")
	.transition().duration(700)
		.style("margin-top","18px")
		.style("opacity",1)

	d3.select("#navbarContent").style("pointer-events","auto")
	// d3.selectAll(".sub-menu-link").style("pointer-events","auto")
	// d3.selectAll(".sub-menu").style("pointer-events","auto")
	
}
function collapseDropdown(){
	d3.select("#navbarContainer")
	.transition().duration(700)
		.style("height","0px")

	d3.select("#navbarContent")
	.transition().duration(700)
		.style("margin-top","00px")
		.style("opacity",0)

	d3.select("#navbarContent").style("pointer-events","none")
	// d3.selectAll(".nav-link").style("pointer-events","none")
}

var scrollUpExpanded = false;
// show scroll-to-top button after 
window.onscroll = function(){
	if(window.scrollY>1000){
		if(scrollUpExpanded==false){
			expandScrollUpButton()
			scrollUpExpanded=true
		}
	}
	if(window.scrollY<800){
		if(scrollUpExpanded==true){
			collapseScrollUpButton()
			scrollUpExpanded=false
		}
	}
}

function expandScrollUpButton(){
	d3.select(".scroll-to-top").transition().ease(d3.easeCubicOut).duration(600)
		.style("right","0px")
		.style("opacity",1)
}
function collapseScrollUpButton(){
	d3.select(".scroll-to-top").transition().ease(d3.easeQuadIn).duration(600)
		.style("right","-40px")
		.style("opacity",0)
}


// d3.selectAll(".image_div")
// .on("mouseover",function(){
// 	imageOverlay()
// }).on("mouseout",function(){
// 	closeImageOverlay()
// })
 
// function imageOverlay(){
	
// }
// function closeImageOverlay(){

// }