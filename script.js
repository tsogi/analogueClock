(function(){

	var currentTime = { hour : 12, minute : 0, second : 0 };

	setCurrentTime();

	function updateHoursMinutesSeconds(){
		setCurrentTime();
		updateHours();
		updateMinutes();
		updateSeconds();
	}

	function updateHours(){
		var degree = currentTime.hour * 15;
		d3.select(".minute").attr("transform", "rotate("+degree+" 150 150)");
	}

	function updateMinutes(){
		var degree = currentTime.minute * 6;
		d3.select(".minute").attr("transform", "rotate("+degree+" 150 150)");
	}

	function updateSeconds(){
		var degree = currentTime.second * 6;
		d3.select(".second").attr("transform", "rotate("+degree+" 150 150)");
	}

	setInterval(function(){
		updateHoursMinutesSeconds();
	}, 500);

	function setCurrentTime(){
		currentTime.hour = new Date().getHours();
		currentTime.minute = new Date().getMinutes();
		currentTime.second = new Date().getSeconds();
	}

})();