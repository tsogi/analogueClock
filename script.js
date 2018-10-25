(function(){

	var currentTime = { hour : 0, minute : 0, second : 0 };

	setCurrentTime();

	updateHoursMinutesSeconds();

	function updateHoursMinutesSeconds(){
		setCurrentTime();
		updateHours();
		updateMinutes();
		updateSeconds();
	}

	function updateHours(){
		var degree = currentTime.hour * 30;
		currentTime.minute != 0 ? d3.select(".hour").attr("transform", "rotate("+degree+" 175 175)") : "";
	}

	function updateMinutes(){
		var degree = currentTime.minute * 6;
		currentTime.second != 0 ? d3.select(".minute").attr("transform", "rotate("+degree+" 175 175)") : "";
	}

	function updateSeconds(){
		var degree = currentTime.second * 6;
		d3.select(".second").attr("transform", "rotate("+degree+" 175 175)");
	}

	setInterval(function(){
		updateHoursMinutesSeconds();
	}, 1000);

	function setCurrentTime(){
		currentTime.hour = new Date().getHours();
		currentTime.minute = new Date().getMinutes();
		currentTime.second = new Date().getSeconds();
	}

})();