/**
 * 
 */
let btnstart1 = document.getElementById("mybtn1");
let btnstart2 = document.getElementById("mybtn2");

btnstart1.addEventListener("click", full_search1_start);
btnstart2.addEventListener("click", calculation_start);

var itemprice = [30, 50, 80, 90, 100, 110, 120, 130, 150, 160];
var itemvalue = [8, 6, 8, 9, 7, 7, 8, 5, 8, 9];
var limitprice = 300;
var choicenumber = 0;
var maxvalue = 0;


function full_search1_start() {
	 const startTime = performance.now();

	var sumprice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var sumvalue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var buy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	var maxprice = 0;
	var maxvalue = 0;
	var maxbuy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for (buy[0] = 0; buy[0] < 2; buy[0]++) {
		if (buy[0] == 1) {
			sumprice[0] = itemprice[0];
			sumvalue[0] = itemvalue[0];
		}
		else {
			sumprice[0] = 0;
			sumvalue[0] = 0;
		}

		for (buy[1] = 0; buy[1] < 2; buy[1]++) {
			if (buy[1] == 1) {
				sumprice[1] = sumprice[0] + itemprice[1];
				sumvalue[1] = sumvalue[0] + itemvalue[1];
			}
			else {
				sumprice[1] = sumprice[0];
				sumvalue[1] = sumvalue[0];
			}

			for (buy[2] = 0; buy[2] < 2; buy[2]++) {
				if (buy[2] == 1) {
					sumprice[2] = sumprice[1] + itemprice[2];
					sumvalue[2] = sumvalue[1] + itemvalue[2];
				}
				else {
					sumprice[2] = sumprice[1];
					sumvalue[2] = sumvalue[1];
				}

				for (buy[3] = 0; buy[3] < 2; buy[3]++) {
					if (buy[3] == 1) {
						sumprice[3] = sumprice[2] + itemprice[3];
						sumvalue[3] = sumvalue[2] + itemvalue[3];
					}
					else {
						sumprice[3] = sumprice[2];
						sumvalue[3] = sumvalue[2];
					}

					for (buy[4] = 0; buy[4] < 2; buy[4]++) {
						if (buy[4] == 1) {
							sumprice[4] = sumprice[3] + itemprice[4];
							sumvalue[4] = sumvalue[3] + itemvalue[4];
						}
						else {
							sumprice[4] = sumprice[3];
							sumvalue[4] = sumvalue[3];
						}

						for (buy[5] = 0; buy[5] < 2; buy[5]++) {
							if (buy[5] == 1) {
								sumprice[5] = sumprice[4] + itemprice[5];
								sumvalue[5] = sumvalue[4] + itemvalue[5];
							}
							else {
								sumprice[5] = sumprice[4];
								sumvalue[5] = sumvalue[4];
							}

							for (buy[6] = 0; buy[6] < 2; buy[6]++) {
								if (buy[6] == 1) {
									sumprice[6] = sumprice[5] + itemprice[6];
									sumvalue[6] = sumvalue[5] + itemvalue[6];
								}
								else {
									sumprice[6] = sumprice[5];
									sumvalue[6] = sumvalue[5];
								}

								for (buy[7] = 0; buy[7] < 2; buy[7]++) {
									if (buy[7] == 1) {
										sumprice[7] = sumprice[6] + itemprice[7];
										sumvalue[7] = sumvalue[6] + itemvalue[7];
									}
									else {
										sumprice[7] = sumprice[6];
										sumvalue[7] = sumvalue[6];
									}

									for (buy[8] = 0; buy[8] < 2; buy[8]++) {
										if (buy[8] == 1) {
											sumprice[8] = sumprice[7] + itemprice[8];
											sumvalue[8] = sumvalue[7] + itemvalue[8];
										}
										else {
											sumprice[8] = sumprice[7];
											sumvalue[8] = sumvalue[7];
										}

										for (buy[9] = 0; buy[9] < 2; buy[9]++) {
											if (buy[9] == 1) {
												sumprice[9] = sumprice[8] + itemprice[9];
												sumvalue[9] = sumvalue[8] + itemvalue[9];
											}
											else {
												sumprice[9] = sumprice[8];
												sumvalue[9] = sumvalue[8];
											}

											if (sumprice[9] <= 300 && maxvalue < sumvalue[9]) {
												maxvalue = sumvalue[9];
												maxprice = sumprice[9];
												for (var i = 0; i < 10; i++) {
													maxbuy[i] = buy[i];
												}
											}

										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	const endTime = performance.now();
	const executionTime = endTime-startTime;

	var element = document.createElement("p");
	var text = document.createTextNode("合計金額：" + maxprice + "円" + ",合計人気度：" + maxvalue + ",実行時間：" + executionTime/1000 + "秒！");
	document.body.appendChild(element).appendChild(text);

	var sname = document.getElementsByName("snackname");

	for(var i=0;i<10;i++){
		if(maxbuy[i]==1)sname[i].style.backgroundColor="Red";
	}

	alert("合計金額：" + maxprice  + "円" + "\n合計人気度：" + maxvalue + "\n実行時間：" + executionTime/1000 + "秒！");

}

function full_search_start(){
	startTime = performance.now();

	for(var cnt = 0; cnt < Math.pow(2, itemprice.length) ;cnt++){
		var sumprice = 0;
		var sumvalue = 0;
		for(var s = 0; s < itemprice.length; s++){
			if((cnt >> s) & 1 == 1){
				sumprice += itemprice[s];
				sumvalue += itemvalue[s];
			}
		}

		if((maxvalue < sumvalue) && (sumprice <= limitprice)){
			maxvalue = sumvalue;
			choicenumber = cnt;
		}
	}

	const endTime = performance.now();
	var element = document.createElement("p");
	var text = document.createTextNode("人気度の合計：" + maxvalue + ", 選べるパターン：" + choicenumber + "通り，実行時間：" + (endTime-startTime)/1000 + "秒！");
	document.body.appendChild(element).appendChild(text);
}


function calculation_start() {

	var snacklist = document.getElementsByName("snack");
	var psum = 0;
	var vsum = 0;

	for (i = 0; i < 10; i++) {
		if (snacklist[i].checked) {
			psum = psum + itemprice[i];
			vsum = vsum + itemvalue[i];
		}
	}

	var element = document.createElement("p");
	var text = document.createTextNode("合計金額:" + psum + "円" + ",合計人気度:" + vsum);
	document.body.appendChild(element).appendChild(text);

	var snname = document.getElementsByName("snaname");

	if(psum>300){
		alert("お金が足りないよ!" + "\n合計金額：" + psum + "円" + "\n合計人気度：" + vsum);
		document.getElementsByName("imgname")[0].src="WebApp3.png";
		}
	if(psum<150){
		alert("もう少し買えるよ!" + "\n合計金額：" + psum + "円" + "\n合計人気度：" + vsum);
		document.getElementsByName("imgname")[0].src="WebApp4.png";
	}
	if(psum >= 150 && psum <= 300){
		alert("合計金額:" + psum + "円" + "\n合計人気度:" + vsum);
		document.getElementsByName("imgname")[0].src="WebApp2.png";
	}
}
