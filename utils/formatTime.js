
// var date0 = new Date(1007837837587);

function formatTime(create_time) {
	var nowDate = new Date().getTime();
	var l = 0;
	var day = 0;
	var hour = 0;
	var min = 0;
	var s = 0;
	if (create_time) {
		// l = nowDate - 1484624933722;
		l = nowDate - create_time;
		s = l / 1000;
		//console.log(s + 'sec')
		min = l / (1000 * 60);
		//console.log(min + 'min')
		hour = l / (1000 * 60 * 60);
		//console.log(hour + 'hour');
		day = l / (1000 * 60 * 60 * 24);
		//console.log(day + 'day');

		if (day >= 1) {
			return (parseInt(day) + "天前更新");
		} else if (hour > 1 && hour <= 24) {
			return (parseInt(hour) + "小时前更新");
		} else if (min > 1 && min <= 59) {
			return (parseInt(min) + "分钟前更新");
		} else {
			return ("刚刚");
		}
	} else {
		return ("主人，更新信息出现了一点问题噢！");
	}
}

module.exports = {
  formatTime: formatTime
}

