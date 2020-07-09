	document.querySelector('.button').onclick = function(){
		console.log(12345);
	let message = '<Message for users:> ' + (document.querySelector('.message').value)+'  ';
	let company = '<Company:> ' + (document.querySelector('.company').value)+'     ';
	let subject = '<Subject:> ' + (document.querySelector('.subject').value)+'     ';
	let email = '<Email:> '+ (document.querySelector('.email').value)+'     ';
	let content =  email+company+subject+message;
	var token = '1082381907:AAFGyu6URAZk_yc-i6sM8yVPDeBvj3r_KHk';
	const url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-340898761&text=';
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", url + content, true);
	xhttp.send();
}



