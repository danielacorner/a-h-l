$(window).resize(function () {
	resize()
});
function resize(){
	if ($(window).width >= 980){
		$(".subheading-content")
		.css("height", $(".subheading-column-1").height())
	} else {
		// $(".subheading-content")
		// .css("height", $(".subheading-column-1").height() + $(".subheading-column-2").height() + $(".subheading-column-2").css("margin-top"))
	}
}
resize()

// scroll-reveal
window.sr = ScrollReveal({origin: 'left', scale: 1, duration: 1000, distance: '40px'});
sr.reveal('.image_div');

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

document.getElementsByClassName('scroll-to-top')[0].onclick = function () {
   scrollTo(0, 1250);   
}
    
const
scrollTo = function(to, duration) {
    const
    element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    },
    animateScroll = function() {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
        if(currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
        else {
            element.scrollTop = to;
        }
    };
    animateScroll();
};