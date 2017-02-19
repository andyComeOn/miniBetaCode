
var date0 = new Date(1007837837587);

var nowDate = new Date().getTime();

var l = 0;
var day = 0;
var hour = 0;
var min = 0;
var s = 0;

if(date0 != null) {
	l = nowDate - date0;
	day = l / (24 * 60 * 60 * 1000);
	hour = (l / (60 * 60 * 1000) - day * 24);
	min = ((l / (60 * 1000)) - day * 24 * 60 - hour * 60);
	s = (l / 1000 - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);
	if(day >= 1) {
		mTimeTextview.setText(day + "天前");
	} else if(hour >= 1) {
		mTimeTextview.setText(hour + "小时前");
	} else if(min > 1) {
		mTimeTextview.setText(min + "分钟前");
	} else {
		mTimeTextview.setText("刚刚");
	}
}


function timeMinus() {
				var l = 0;
				var day = 0;
				var hour = 0;
				var min = 0;
				var s = 0;
				if(date0) {
					l = nowDate - 1484624933722;
					s = l / 1000;console.log(s+'sec')
					min = l / (1000 * 60);console.log(min+'min')
					hour = l / (1000 * 60 * 60 );console.log(hour+'hour');
					day = l / (1000 * 60 * 60  * 24);console.log(day+'day');

					if(day >= 1) {
						return(parseInt(day)+ "天前更新");
					} else if(hour>1&&hour<=24) {
						return(parseInt(hour)  + "小时前更新");
					} else if(min >1&&min<=59) {
						return(parseInt(min) + "分钟前更新");
					} else {
						return("刚刚");
					}
				}else{
					return("主人，更新信息出现了一点问题噢！");
				}
			}