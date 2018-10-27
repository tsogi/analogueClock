(function(){

	var currentTime = { hour : 0, minute : 0, second : 0 };

	createHourLabels();

	drawMarks();

	setCurrentTime();

	updateHoursMinutesSeconds();

	setInterval(function(){
		updateHoursMinutesSeconds();
	}, 1000);

	function updateHoursMinutesSeconds(){
		setCurrentTime();
		updateSeconds();
		updateMinutes();
		updateHours();
	}

	function degreesToRadians(degrees)
	{
	  return degrees * (Math.PI/180);
	}

	function getCoordsByDegree(theta){
		var radius = 130;
		return { x : radius * Math.sin(degreesToRadians(theta)), y : radius * Math.cos(degreesToRadians(theta)) }
	}

	function createHourLabels(){
		var arr = [6,5,4,3,2,1,12,11,10,9,8,7];

        d3.select(".numbers").selectAll("text").data(arr).enter().append("text")
         	.attr("x", function(d,i) { return getCoordsByDegree(i * 30).x + 175 - 6 ; })
         	.attr("y", function(d,i) { return getCoordsByDegree(i * 30).y + 175 + 5; })
         	.text(function(d) { return d; });
	}

	function updateHours(){
		var degree = currentTime.hour * 30 + 30 / 60 * currentTime.minute;
		d3.select(".hour").transition().attr("transform", "rotate("+degree+" 175 175)");
	}

	function updateMinutes(){
		var degree = currentTime.minute * 6;
		d3.select(".minute").transition().attr("transform", "rotate("+degree+" 175 175)");
	}

	function updateSeconds(){
		var degree = currentTime.second * 6;
		d3.select(".second").transition().attr("transform", "rotate("+degree+" 175 175)");
	}

	function drawMarks(){
		var clockMarks = [];

		for (var i = 1; i <= 61; i++) {
		   i % 5 != 0 ? clockMarks.push(i) : "";
		}

		d3.select(".marks").selectAll("text").data(clockMarks).enter()
			.append("text")
			.attr("x", "175")
			.attr("y", "175")
			.attr("dy", "-128")
			.attr("transform", function(d) { var degree = d * 6; return "rotate("+degree+" 175 175)" })
			.text("|");
	}

	function setCurrentTime(){
		currentTime.hour = new Date().getHours();
		currentTime.minute = new Date().getMinutes();
		currentTime.second = new Date().getSeconds();
	}

})();