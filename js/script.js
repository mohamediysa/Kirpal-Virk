//animations
$(document).foundation();  
$(document).animateScroll();
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);
 

//prevent auto submit when refreshing page
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}


//checking the postalcode
let postal_code = document.querySelector('#postal_code');
postal_code.addEventListener('input',()=>{
	let postal = postal_code.value;
	let reg = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
	let result = reg.test(postal);
	if (result){
		postal_code.nextElementSibling.style.display = 'none';
	} else {
	    postal_code.nextElementSibling.style.display = 'block';
	}

})



//outputing an extra input when hire clicked
let hire = document.querySelector('#hire');
let question = document.querySelector('#question');
let comment = document.querySelector('#comment');


hire.addEventListener('click',()=>{
	document.querySelector('#hourly_rate').style.display = 'block';
	document.querySelector('#hourly_rate').innerHTML = "<label>hourly rate </label><input required type='text' name='hourly' placeholder='hourly rate'>";
	if(hire.checked == true){
       	question.checked = false;
       	comment.checked = false;
       	question.removeAttribute("required");
       	comment.removeAttribute("required");
    }
})

question.addEventListener('click',()=>{
	document.querySelector('#hourly_rate').innerHTML = '';
	if(question.checked == true){
       	hire.checked = false;
       	comment.checked = false;
       	hire.removeAttribute("required");
       	comment.removeAttribute("required");
    }
})

comment.addEventListener('click',()=>{
	document.querySelector('#hourly_rate').innerHTML = '';
	if(comment.checked == true){
       	question.checked = false;
       	hire.checked = false;
       	question.removeAttribute("required");
       	hire.removeAttribute("required");
    }
})

document.querySelector('#resume').addEventListener('mouseover',()=>{
  document.querySelector('#hash1').style.visibility = 'visible'
})
document.querySelector('#resume').addEventListener('mouseout',()=>{
  document.querySelector('#hash1').style.visibility = 'hidden'
})
document.querySelector('#contact').addEventListener('mouseover',()=>{
  document.querySelector('#hash2').style.visibility = 'visible'
})
document.querySelector('#contact').addEventListener('mouseout',()=>{
  document.querySelector('#hash2').style.visibility = 'hidden'
})
