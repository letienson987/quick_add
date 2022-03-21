// is maintained
const elm = $('.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ltmttdrg.g0qnabr5')
const elm_array = Array.from($$('.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ltmttdrg.g0qnabr5'))
let tmp = 1;


var time = setInterval(myTimer, 2000);


function myTimer() {
	if (tmp < elm_array.length) { 
		elm.click();
		// console.log('ok')
		
		tmp = tmp + 1;
	} 
	else {
		console.log('done');
		clearInterval(time);
	}

}
//  can use
Array.from($$('.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ltmttdrg.g0qnabr5')).forEach(btn => btn.click())
