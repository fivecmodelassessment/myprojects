function validateForm() {
	$("#emailErrorMsg").hide();
	$("#nameErrorMsg").hide();
	$("#industryErrorMsg").hide();
	var ret = true;
	var dex = document.forms["MainForm"]["email"].value;
	var atpos = dex.indexOf("@");
	var dotpos = dex.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= dex.length) {
		$("#emailErrorMsg").show();
		ret = false;
	}
	var dey = document.forms["MainForm"]["name"].value;
	if (dey.length < 2) {
		$("#nameErrorMsg").show();
		ret = false;
	}
	if (!ret) {
		window.alert("Please check your name & email address.");
		window.location.hash = '';
		window.location.hash = 'registration';
	} else {
		var dez = document.forms["MainForm"]["industry"].value;
		if (dez.length < 5) {
			ret = false;
		} else if (dez == 'Other') {
			dez = document.forms["MainForm"]["otherindustry"].value
			if (dez.length < 3) { ret = false; }
		}
		if (!ret) {
			$("#industryErrorMsg").show();
			window.alert("Please check your entry for industry.");
			window.location.hash = '';
			window.location.hash = 'registration';
		}
	}
	return ret;
}
$(document).ready(function() {
/*	if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{
   alert("Browser is Safari");          
}*/
	$("#nameErrorMsg").hide();
	$("#emailErrorMsg").hide();
	$("#industryErrorMsg").hide();
	$("#OtherIndustryInput").hide();
	$("#IndustryInput").on('change', function() {
		if ($(this).val() == 'Other'){
			$("#OtherIndustryInput").show();
		} else {
			$("#OtherIndustryInput").hide();
		}
	});
	$('#submitbtn').bind('click', function(e) {
		e.preventDefault();
		if (validateForm()) {
            execute();
			var d = $('form').serialize();
			$.ajax({
				method: 'POST',
				url: '/cgi-bin/process5CModelForm.php',
				data: d,
				success: function() {}
			});
		}
	});
});
function addHidden(theForm, key, value) {
	var input = document.createElement('input');
	input.type = 'hidden';
	input.name = key;
	input.value = value;
	theForm.appendChild(input);
}
var theForm = document.forms['MainForm'];
for (i=1;i<26;i++) {
	addHidden(theForm, 'QA'+i, "0");
}
addHidden(theForm, 'popup', '');

var AnswerArray = [];
var AnswerArray2 = [];
var AnswerArray3 = [];
var AnswerArray4 = [];
var AnswerArray5 = [];
var OmegaArray = [0,0,0,0,0];
var QsAnswered = [5,5,5,5,5];
var Min = 6;
var MinIndex = 0;
var i,j,x,y,z;

function execute() {

$(".shown").hide();
$("#hiddenAll").show();
$("#ImageForOtput").show();
$("#hiddenButtonBack").show();

// Set up variables for the different popups:
document.getElementById("note").innerHTML= "Your score indicates an area of development is:";

var popupText = [];
popupText[0] = 'Concept';
popupText[2] = 'A sense (and control) of Concept is critical, especially for high-value transactions. '
	+'Concept is not just about dream cars of the future, it&#39;s about solid, consistent business offers, '
	+'the roles that support delivery and the perceptions that are formed in the mind of your customer.';
popupText[3] = 'Do you consciously set the style and tone of your business or just leave it to chance? '
	+'What does your business environment and customer approach say about your attention to detail?';
popupText[4] = 'Want to know more about <span><a href="http://www.arjardine.com/concept/">'
	+'<strong>Concept &gt;&gt; </strong></a></span>';
popupText[5] = '<a href="http://www.arjardine.com/five-c-model/">'
	+'<img src="http://www.arjardine.com/wp-content/uploads/2017/04/concept_web.png" /></a>';
popupText[7] = 'The full potential of The Five C Model is best realized through a balance of all five '
	+'elements. This requires open self-assessment, genuine commitment to change and working with '
	+'employees, partners, and customers to agree, plan and deliver outcomes.';
popupText[9] = popupText[0]+'##'+popupText[2]+'##'+popupText[3];
	
var popupText2 = [];
popupText2[0] = 'Connecting';
popupText2[2] = 'Connecting is not just about letting customers know you exist and what you can offer, '
	+'it is about targeting customers you know will find your products or services appealing. '
	+'Connecting allows you to stay in the mind of existing customers and to reach out and attract new ones.';
popupText2[3] = 'Try to make the most of the tools available to you and constantly assess how meaningful '
	+'your connectivity is. How far do you reach, can you go even further? Are you attracting the right '
	+'type of customers and do you communicate fully the things that make you different from the rest of the market?';
popupText2[4] = 'Want to know more about <span><a href="http://www.arjardine.com/connecting/">'
	+'<strong>Connecting &gt;&gt; </strong></a></span>';
popupText2[5] = '<a href="http://www.arjardine.com/five-c-model/">'
	+'<img src="http://www.arjardine.com/wp-content/uploads/2017/04/connecting_web.png" /></a>';
popupText2[7] = 'The full potential of The Five C Model is best realized through a balance of all five '
	+'elements. This requires open self-assessment, genuine commitment to change and working with '
	+'employees, partners, and customers to agree, plan and deliver outcomes.';
popupText2[9] = popupText2[0]+'##'+popupText2[2]+'##'+popupText2[3];

var popupText3 = [];
popupText3[0] = 'Collateral';
popupText3[2] = 'Learn to take advantage of media and presentation tools and apply them consistently. '
	+'Explore what the brands and partners you work with offer in the way of marketing tools. Keep your '
	+'materials up to date so they reflect current thinking and convey a compelling message.';
popupText3[3] = 'What does the range and quality of your business collateral say about your level of '
	+'&#39;attention to detail&#39; Do they scream budget hotel or purr boutique glamour and luxury spa?';
popupText3[4] = 'Want to know more about <span><a href="http://www.arjardine.com/collateral/">'
	+'<strong>Collateral &gt;&gt;</strong></a></span>';
popupText3[5] = '<a href="http://www.arjardine.com/five-c-model/">'
	+'<img src="http://www.arjardine.com/wp-content/uploads/2017/04/collateral_web.png" /></a>';
popupText3[7] = 'The full potential of The Five C Model is best realized through a balance of all five '
	+'elements. This requires open self-assessment, genuine commitment to change and working with '
	+'employees, partners, and customers to agree, plan and deliver outcomes.';
popupText3[9] = popupText3[0]+'##'+popupText3[2]+'##'+popupText3[3];

var popupText4 = [];
popupText4[0] = 'Communication';
popupText4[2] = 'Sustainable business development and long-term customer relationships rely on '
	+'consistent, structured communication. You should be clear on what customers really want to '
	+'know and effective at sharing that within the team to explore and best learn how to secure '
	+'consistent, positive outcomes together.';
popupText4[3] = 'Assumptions rarely lead anywhere good and often create costly mistakes. If '
	+'you&#39;re not sure, you should ask. Make time to consider how you deliver technical information.';
popupText4[4] = 'Who takes responsibility for effective communication within your business? When did '
	+'you last attend any type of communication of soft skills training?';
popupText4[5] = 'Want to know more about <span><a href="http://www.arjardine.com/communication/">'
	+'<strong>Communication &gt;&gt;</strong></a></span>';
popupText4[6] = '<a href="http://www.arjardine.com/five-c-model/">'
	+'<img src="http://www.arjardine.com/wp-content/uploads/2017/04/communication_web.png" /></a>';
popupText4[7] = 'The full potential of The Five C Model is best realized through a balance of '
	+'all five elements. This requires open self-assessment, genuine commitment to change and '
	+'working with employees, partners, and customers to agree, plan and deliver outcomes.';
popupText4[9] = popupText4[0]+'##'+popupText4[2]+'##'+popupText4[3]+'<br /><br />'+popupText4[4];

var popupText5 = [];
popupText5[0] = 'Consolidation';
popupText5[2] = 'Good consolidation helps your customer make the right decision during the '
	+'&#39;thinking things over&#39; stage and also influences the stories they share with '
	+'family, friends and colleagues long after the deal is done. Customer and employee '
	+'advocacy are powerful referral gathering tools and social media amplification means a '
	+'lot in our modern digitally connected world. It will be worth the minimal extra effort!';
popupText5[3] = 'Are you consciously, consistently, consolidating? How do you measure it? Are the '
	+'right people involved in the process?';
popupText5[4] = 'Want to know more about <span><a href="http://www.arjardine.com/consolidation/">'
	+'<strong>Consolidation &gt;&gt;</strong></a></span>';
popupText5[5] = '<a href="http://www.arjardine.com/five-c-model/">'
	+'<img src="http://www.arjardine.com/wp-content/uploads/2017/04/collateral_web.png" /></a>';
popupText5[7] = 'The full potential of The Five C Model is best realized through a balance of all five '
	+'elements. This requires open self-assessment, genuine commitment to change and working with '
	+'employees, partners, and customers to agree, plan and deliver outcomes.';
popupText5[9] = popupText5[0]+'##'+popupText5[2]+'##'+popupText5[3];

for (i=0; i<5; i++) {
	for (j=0; j<5; j++) {
		switch (i) {
			case 0:
				if (AnswerArray[j] > 0) { OmegaArray[i] += AnswerArray[j]; } else { QsAnswered[i] --; }
				break;
			case 1:
				if (AnswerArray2[j] > 0) { OmegaArray[i] += AnswerArray2[j]; } else { QsAnswered[i] --; }
				break;
			case 2:
				if (AnswerArray3[j] > 0) { OmegaArray[i] += AnswerArray3[j]; } else { QsAnswered[i] --; }
				break;
			case 3:
				if (AnswerArray4[j] > 0) { OmegaArray[i] += AnswerArray4[j]; } else { QsAnswered[i] --; }
				break;
			case 4:
				if (AnswerArray5[j] > 0) { OmegaArray[i] += AnswerArray5[j]; } else { QsAnswered[i] --; }
				break;
		}
	}
}
for (i=0; i<5; i++) {
	if ((OmegaArray[i] > 0) && (QsAnswered[i] > 0)) {
		OmegaArray[i] = Math.round(OmegaArray[i] / QsAnswered[i]);
		if (OmegaArray[i] < Min) {
			Min = OmegaArray[i];
			MinIndex = i;
		}
	}
}

var numberOfMin = 0;
var random;
for (i=0; i<5; i++) {
	if (OmegaArray[i] == Min) { numberOfMin ++; }
}
if (numberOfMin > 1) {
	do {
		random = Math.round(Math.random() * 5);
	} while (OmegaArray[random] != Min);
	MinIndex = random;
}

switch(MinIndex) {
	case 0: // Concept
		document.getElementById("suvet").innerHTML = popupText[0];
		document.getElementById("suvet2").innerHTML = popupText[2];
		document.getElementById("suvet3").innerHTML = popupText[3];
		document.getElementById("suvet4").innerHTML = popupText[4];
		document.getElementById("suvet7").innerHTML = popupText[7];
		$("#ImageForOtput").append(popupText[5]);
		document.MainForm.elements['popup'].value = popupText[9];
	break;
	case 1: // Connecting
		document.getElementById("suvet").innerHTML = popupText2[0];
		document.getElementById("suvet2").innerHTML = popupText2[2];
		document.getElementById("suvet3").innerHTML = popupText2[3];
		document.getElementById("suvet4").innerHTML = popupText2[4];
		document.getElementById("suvet7").innerHTML = popupText2[7];
		$("#ImageForOtput").append(popupText2[5]);
		document.MainForm.elements['popup'].value = popupText2[9];
	break;
	case 2: // Collateral
		document.getElementById("suvet").innerHTML = popupText3[0];
		document.getElementById("suvet2").innerHTML = popupText3[2];
		document.getElementById("suvet3").innerHTML = popupText3[3];
		document.getElementById("suvet4").innerHTML = popupText3[4];
		document.getElementById("suvet7").innerHTML = popupText3[7];
		$("#ImageForOtput").append(popupText3[5]);
		document.MainForm.elements['popup'].value = popupText3[9];
	break;
	case 3: // Communication
		document.getElementById("suvet").innerHTML = popupText4[0];
		document.getElementById("suvet2").innerHTML = popupText4[2];
		document.getElementById("suvet3").innerHTML = popupText4[3];
		document.getElementById("suvet4").innerHTML = popupText4[4];
		document.getElementById("suvet5").innerHTML = popupText4[5];
		document.getElementById("suvet7").innerHTML = popupText4[7];
		$("#ImageForOtput").append(popupText4[6]);
		document.MainForm.elements['popup'].value = popupText4[9];
	break;
	case 4: // Consolidation
		document.getElementById("suvet").innerHTML = popupText5[0];
		document.getElementById("suvet2").innerHTML = popupText5[2];
		document.getElementById("suvet3").innerHTML = popupText5[3];
		document.getElementById("suvet4").innerHTML = popupText5[4];
		document.getElementById("suvet7").innerHTML = popupText5[7];
		$("#ImageForOtput").append(popupText5[5]);
		document.MainForm.elements['popup'].value = popupText5[9];
	break;
}

/* na kraq poluchavash  5 promenlivi  za 5-te masiva towa sa 
MinIndex1,2,3,4,5 trqbva da se izkarat proizvoilni  3 nakraq 
moje bi  s masvi  ili rangom funkciq */

} // End of function execute()
  
  
$(document).ready(function() {
	$("#inputArrow").css({"top":"170px"});
	$("#hiddenAll").hide();
	$("#hiddenMetallica").hide();
	$(".textAreaHidden").hide();
	$(".requestHelp_btn").hide();
	$("#hiddenButtonBack").hide();
});

$(".FAQ1").hover(function() {
	$(".FAQ1P").slideToggle(200);
});
$(".HelpButton").click(function(){
	$(".textAreaHidden").toggle();
	$(".requestHelp_btn").toggle();
});




// Process clicks:
/*{"background-color": "#999", "color": "white"}*/
/* CONCEPT */
// 1
$("#na1").click(function() {
	$('#na1').css({"background-color": "#999", "color": "white"});
	$('.b11').css({"background-color": "white", "color": "#888"});
	$('.b12').css({"background-color": "white", "color": "#888"});
	$('.b13').css({"background-color": "white", "color": "#888"});
	$('.b14').css({"background-color": "white", "color": "#888"});
	$('.b15').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA1'].value = "0";
	AnswerArray[0] = 0;
});
$("#b11").click(function() {
	$('#b11').css({"background-color": "#999", "color": "white"});
	$('.b12').css({"background-color": "white", "color": "#888"});
	$('.b13').css({"background-color": "white", "color": "#888"});
	$('.b14').css({"background-color": "white", "color": "#888"});
	$('.b15').css({"background-color": "white", "color": "#888"});
	$('.na1').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA1'].value = "1";
	AnswerArray[0] = 1;
});
$("#b12").click(function() {
	$('#b11').css({"background-color": "white", "color": "#888"});
	$('.b12').css({"background-color": "#999", "color": "white"});
	$('.b13').css({"background-color": "white", "color": "#888"});
	$('.b14').css({"background-color": "white", "color": "#888"});
	$('.b15').css({"background-color": "white", "color": "#888"});
	$('.na1').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA1'].value = "2";
	AnswerArray[0] = 2;
});
$("#b13").click(function() {
	$('#b11').css({"background-color": "white", "color": "#888"});
	$('.b12').css({"background-color": "white", "color": "#888"});
	$('.b13').css({"background-color": "#999", "color": "white"});
	$('.b14').css({"background-color": "white", "color": "#888"});
	$('.b15').css({"background-color": "white", "color": "#888"});
	$('.na1').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA1'].value = "3";
	AnswerArray[0] = 3;
});
$("#b14").click(function() {
	$('#b11').css({"background-color": "white", "color": "#888"});
	$('.b12').css({"background-color": "white", "color": "#888"});
	$('.b13').css({"background-color": "white", "color": "#888"});
	$('.b14').css({"background-color": "#999", "color": "white"});
	$('.b15').css({"background-color": "white", "color": "#888"});
	$('.na1').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA1'].value = "4";
	AnswerArray[0] = 4;
});
$("#b15").click(function() {
	$('#b11').css({"background-color": "white", "color": "#888"});
	$('.b12').css({"background-color": "white", "color": "#888"});
	$('.b13').css({"background-color": "white", "color": "#888"});
	$('.b14').css({"background-color": "white", "color": "#888"});
	$('.b15').css({"background-color": "#999", "color": "white"});
	$('.na1').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA1'].value = "5";
	AnswerArray[0] = 5;
});
















// 2
$("#na2").click(function() {
	$('#na2').css({"background-color": "#999", "color": "white"});
	$('.b21').css({"background-color": "white", "color": "#888"});
	$('.b22').css({"background-color": "white", "color": "#888"});
	$('.b23').css({"background-color": "white", "color": "#888"});
	$('.b24').css({"background-color": "white", "color": "#888"});
	$('.b25').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA2'].value = "0";
	AnswerArray[1] = 0;
});
$("#b21").click(function() {
	$('#b21').css({"background-color": "#999", "color": "white"});
	$('.b22').css({"background-color": "white", "color": "#888"});
	$('.b23').css({"background-color": "white", "color": "#888"});
	$('.b24').css({"background-color": "white", "color": "#888"});
	$('.b25').css({"background-color": "white", "color": "#888"});
	$('.na2').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA2'].value = "1";
	AnswerArray[1] = 1;
});
$("#b22").click(function() {
	$('#b21').css({"background-color": "white", "color": "#888"});
	$('.b22').css({"background-color": "#999", "color": "white"});
	$('.b23').css({"background-color": "white", "color": "#888"});
	$('.b24').css({"background-color": "white", "color": "#888"});
	$('.b25').css({"background-color": "white", "color": "#888"});
	$('.na2').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA2'].value = "2";
	AnswerArray[1] = 2;
});
$("#b23").click(function() {
	$('#b21').css({"background-color": "white", "color": "#888"});
	$('.b22').css({"background-color": "white", "color": "#888"});
	$('.b23').css({"background-color": "#999", "color": "white"});
	$('.b24').css({"background-color": "white", "color": "#888"});
	$('.b25').css({"background-color": "white", "color": "#888"});
	$('.na2').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA2'].value = "3";
	AnswerArray[1] = 3;
});
$("#b24").click(function() {
	$('#b21').css({"background-color": "white", "color": "#888"});
	$('.b22').css({"background-color": "white", "color": "#888"});
	$('.b23').css({"background-color": "white", "color": "#888"});
	$('.b24').css({"background-color": "#999", "color": "white"});
	$('.b25').css({"background-color": "white", "color": "#888"});
	$('.na2').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA2'].value = "4";
	AnswerArray[1] = 4;
});
$("#b25").click(function() {
	$('#b21').css({"background-color": "white", "color": "#888"});
	$('.b22').css({"background-color": "white", "color": "#888"});
	$('.b23').css({"background-color": "white", "color": "#888"});
	$('.b24').css({"background-color": "white", "color": "#888"});
	$('.b25').css({"background-color": "#999", "color": "white"});
	$('.na2').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA2'].value = "5";
	AnswerArray[1] = 5;
});




// 3
$("#na3").click(function() {
	$('#na3').css({"background-color": "#999", "color": "white"});
	$('.b32').css({"background-color": "white", "color": "#888"});
	$('.b31').css({"background-color": "white", "color": "#888"});
	$('.b33').css({"background-color": "white", "color": "#888"});
	$('.b34').css({"background-color": "white", "color": "#888"});
	$('.b35').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA3'].value = "0";
	AnswerArray[2] = 0;
});
$("#b31").click(function() {
	$('#b31').css({"background-color": "#999", "color": "white"});
	$('.b32').css({"background-color": "white", "color": "#888"});
	$('.b33').css({"background-color": "white", "color": "#888"});
	$('.b34').css({"background-color": "white", "color": "#888"});
	$('.b35').css({"background-color": "white", "color": "#888"});
	$('.na3').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA3'].value = "1";
	AnswerArray[2] = 1;
});
$("#b32").click(function() {
	$('#b31').css({"background-color": "white", "color": "#888"});
	$('.b32').css({"background-color": "#999", "color": "white"});
	$('.b33').css({"background-color": "white", "color": "#888"});
	$('.b34').css({"background-color": "white", "color": "#888"});
	$('.b35').css({"background-color": "white", "color": "#888"});
	$('.na3').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA3'].value = "2";
	AnswerArray[2] = 2;
});
$("#b33").click(function() {
	$('#b31').css({"background-color": "white", "color": "#888"});
	$('.b32').css({"background-color": "white", "color": "#888"});
	$('.b33').css({"background-color": "#999", "color": "white"});
	$('.b34').css({"background-color": "white", "color": "#888"});
	$('.b35').css({"background-color": "white", "color": "#888"});
	$('.na3').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA3'].value = "3";
	AnswerArray[2] = 3;
});
$("#b34").click(function() {
	$('#b31').css({"background-color": "white", "color": "#888"});
	$('.b32').css({"background-color": "white", "color": "#888"});
	$('.b33').css({"background-color": "white", "color": "#888"});
	$('.b34').css({"background-color": "#999", "color": "white"});
	$('.b35').css({"background-color": "white", "color": "#888"});
	$('.na3').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA3'].value = "4";
	AnswerArray[2] = 4;
});
$("#b35").click(function() {
	$('#b31').css({"background-color": "white", "color": "#888"});
	$('.b32').css({"background-color": "white", "color": "#888"});
	$('.b33').css({"background-color": "white", "color": "#888"});
	$('.b34').css({"background-color": "white", "color": "#888"});
	$('.b35').css({"background-color": "#999", "color": "white"});
	$('.na3').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA3'].value = "5";
	AnswerArray[2] = 5;
});

// 4
$("#na4").click(function() {
	$('#na4').css({"background-color": "#999", "color": "white"});
	$('.b41').css({"background-color": "white", "color": "#888"});
	$('.b42').css({"background-color": "white", "color": "#888"});
	$('.b43').css({"background-color": "white", "color": "#888"});
	$('.b44').css({"background-color": "white", "color": "#888"});
	$('.b45').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA4'].value = "0";
	AnswerArray[3] = 0;
});
$("#b41").click(function() {
	$('#b41').css({"background-color": "#999", "color": "white"});
	$('.b42').css({"background-color": "white", "color": "#888"});
	$('.b43').css({"background-color": "white", "color": "#888"});
	$('.b44').css({"background-color": "white", "color": "#888"});
	$('.b45').css({"background-color": "white", "color": "#888"});
	$('.na4').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA4'].value = "1";
	AnswerArray[3] = 1;
});
$("#b42").click(function() {
	$('#b41').css({"background-color": "white", "color": "#888"});
	$('.b42').css({"background-color": "#999", "color": "white"});
	$('.b43').css({"background-color": "white", "color": "#888"});
	$('.b44').css({"background-color": "white", "color": "#888"});
	$('.b45').css({"background-color": "white", "color": "#888"});
	$('.na4').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA4'].value = "2";
	AnswerArray[3] = 2;
});
$("#b43").click(function() {
	$('#b41').css({"background-color": "white", "color": "#888"});
	$('.b42').css({"background-color": "white", "color": "#888"});
	$('.b43').css({"background-color": "#999", "color": "white"});
	$('.b44').css({"background-color": "white", "color": "#888"});
	$('.b45').css({"background-color": "white", "color": "#888"});
	$('.na4').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA4'].value = "3";
	AnswerArray[3] = 3;
});
$("#b44").click(function() {
	$('#b41').css({"background-color": "white", "color": "#888"});
	$('.b42').css({"background-color": "white", "color": "#888"});
	$('.b43').css({"background-color": "white", "color": "#888"});
	$('.b44').css({"background-color": "#999", "color": "white"});
	$('.b45').css({"background-color": "white", "color": "#888"});
	$('.na4').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA4'].value = "4";
	AnswerArray[3] = 4;
});
$("#b45").click(function() {
	$('#b41').css({"background-color": "white", "color": "#888"});
	$('.b42').css({"background-color": "white", "color": "#888"});
	$('.b43').css({"background-color": "white", "color": "#888"});
	$('.b44').css({"background-color": "white", "color": "#888"});
	$('.b45').css({"background-color": "#999", "color": "white"});
	$('.na4').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA4'].value = "5";
	AnswerArray[3] = 5;
});

/* CONNECTING */
// 5
$("#na5").click(function() {
	$('#na5').css({"background-color": "#999", "color": "white"});
	$('.b51').css({"background-color": "white", "color": "#888"});
	$('.b52').css({"background-color": "white", "color": "#888"});
	$('.b53').css({"background-color": "white", "color": "#888"});
	$('.b54').css({"background-color": "white", "color": "#888"});
	$('.b55').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA5'].value = "0";
	AnswerArray[4] = 0;
});
$("#b51").click(function() {
	$('#b51').css({"background-color": "#999", "color": "white"});
	$('.b52').css({"background-color": "white", "color": "#888"});
	$('.b53').css({"background-color": "white", "color": "#888"});
	$('.b54').css({"background-color": "white", "color": "#888"});
	$('.b55').css({"background-color": "white", "color": "#888"});
	$('.na5').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA5'].value = "1";
	AnswerArray[4] = 1;
});
$("#b52").click(function() {
	$('#b51').css({"background-color": "white", "color": "#888"});
	$('.b52').css({"background-color": "#999", "color": "white"});
	$('.b53').css({"background-color": "white", "color": "#888"});
	$('.b54').css({"background-color": "white", "color": "#888"});
	$('.b55').css({"background-color": "white", "color": "#888"});
	$('.na5').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA5'].value = "2";
	AnswerArray[4] = 2;
});
$("#b53").click(function() {
	$('#b51').css({"background-color": "white", "color": "#888"});
	$('.b52').css({"background-color": "white", "color": "#888"});
	$('.b53').css({"background-color": "#999", "color": "white"});
	$('.b54').css({"background-color": "white", "color": "#888"});
	$('.b55').css({"background-color": "white", "color": "#888"});
	$('.na5').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA5'].value = "3";
	AnswerArray[4] = 3;
});
$("#b54").click(function() {
	$('#b51').css({"background-color": "white", "color": "#888"});
	$('.b52').css({"background-color": "white", "color": "#888"});
	$('.b53').css({"background-color": "white", "color": "#888"});
	$('.b54').css({"background-color": "#999", "color": "white"});
	$('.b55').css({"background-color": "white", "color": "#888"});
	$('.na5').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA5'].value = "4";
	AnswerArray[4] = 4;
});
$("#b55").click(function() {
	$('#b51').css({"background-color": "white", "color": "#888"});
	$('.b52').css({"background-color": "white", "color": "#888"});
	$('.b53').css({"background-color": "white", "color": "#888"});
	$('.b54').css({"background-color": "white", "color": "#888"});
	$('.b55').css({"background-color": "#999", "color": "white"});
	$('.na5').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA5'].value = "5";
	AnswerArray[4] = 5;
});

// 6
$("#na6").click(function() {
	$('#na6').css({"background-color": "#999", "color": "white"});
	$('.b61').css({"background-color": "white", "color": "#888"});
	$('.b62').css({"background-color": "white", "color": "#888"});
	$('.b63').css({"background-color": "white", "color": "#888"});
	$('.b64').css({"background-color": "white", "color": "#888"});
	$('.b65').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA6'].value = "0";
	AnswerArray2[0] = 0;
});
$("#b61").click(function() {
	$('#b61').css({"background-color": "#999", "color": "white"});
	$('.b62').css({"background-color": "white", "color": "#888"});
	$('.b63').css({"background-color": "white", "color": "#888"});
	$('.b64').css({"background-color": "white", "color": "#888"});
	$('.b65').css({"background-color": "white", "color": "#888"});
	$('.na6').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA6'].value = "1";
	AnswerArray2[0] = 1;
});
$("#b62").click(function() {
	$('#b61').css({"background-color": "white", "color": "#888"});
	$('.b62').css({"background-color": "#999", "color": "white"});
	$('.b63').css({"background-color": "white", "color": "#888"});
	$('.b64').css({"background-color": "white", "color": "#888"});
	$('.b65').css({"background-color": "white", "color": "#888"});
	$('.na6').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA6'].value = "2";
	AnswerArray2[0] = 2
});
$("#b63").click(function() {
	$('#b61').css({"background-color": "white", "color": "#888"});
	$('.b62').css({"background-color": "white", "color": "#888"});
	$('.b63').css({"background-color": "#999", "color": "white"});
	$('.b64').css({"background-color": "white", "color": "#888"});
	$('.b65').css({"background-color": "white", "color": "#888"});
	$('.na6').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA6'].value = "3";
	AnswerArray2[0] = 3;
});
$("#b64").click(function() {
	$('#b61').css({"background-color": "white", "color": "#888"});
	$('.b62').css({"background-color": "white", "color": "#888"});
	$('.b63').css({"background-color": "white", "color": "#888"});
	$('.b64').css({"background-color": "#999", "color": "white"});
	$('.b65').css({"background-color": "white", "color": "#888"});
	$('.na6').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA6'].value = "4";
	AnswerArray2[0] = 4;
});
$("#b65").click(function() {
	$('#b61').css({"background-color": "white", "color": "#888"});
	$('.b62').css({"background-color": "white", "color": "#888"});
	$('.b63').css({"background-color": "white", "color": "#888"});
	$('.b64').css({"background-color": "white", "color": "#888"});
	$('.b65').css({"background-color": "#999", "color": "white"});
	$('.na6').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA6'].value = "5";
	AnswerArray2[0] = 5;
});
	   
// 7
$("#na7").click(function() {
	$('#na7').css({"background-color": "#999", "color": "white"});
	$('.b72').css({"background-color": "white", "color": "#888"});
	$('.b73').css({"background-color": "white", "color": "#888"});
	$('.b74').css({"background-color": "white", "color": "#888"});
	$('.b75').css({"background-color": "white", "color": "#888"});
	$('.b71').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA7'].value = "0";
	AnswerArray2[1] = 0;
});
$("#b71").click(function() {
	$('#b71').css({"background-color": "#999", "color": "white"});
	$('.b72').css({"background-color": "white", "color": "#888"});
	$('.b73').css({"background-color": "white", "color": "#888"});
	$('.b74').css({"background-color": "white", "color": "#888"});
	$('.b75').css({"background-color": "white", "color": "#888"});
	$('.na7').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA7'].value = "1";
	AnswerArray2[1] = 1;
});
$("#b72").click(function() {
	$('#b71').css({"background-color": "white", "color": "#888"});
	$('.b72').css({"background-color": "#999", "color": "white"});
	$('.b73').css({"background-color": "white", "color": "#888"});
	$('.b74').css({"background-color": "white", "color": "#888"});
	$('.b75').css({"background-color": "white", "color": "#888"});
	$('.na7').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA7'].value = "2";
	AnswerArray2[1] = 2;
});
$("#b73").click(function() {
	$('#b71').css({"background-color": "white", "color": "#888"});
	$('.b72').css({"background-color": "white", "color": "#888"});
	$('.b73').css({"background-color": "#999", "color": "white"});
	$('.b74').css({"background-color": "white", "color": "#888"});
	$('.b75').css({"background-color": "white", "color": "#888"});
	$('.na7').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA7'].value = "3";
	AnswerArray2[1] = 3;
});
$("#b74").click(function() {
	$('#b71').css({"background-color": "white", "color": "#888"});
	$('.b72').css({"background-color": "white", "color": "#888"});
	$('.b73').css({"background-color": "white", "color": "#888"});
	$('.b74').css({"background-color": "#999", "color": "white"});
	$('.b75').css({"background-color": "white", "color": "#888"});
	$('.na7').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA7'].value = "4";
	AnswerArray2[1] = 4;
});
$("#b75").click(function() {
	$('#b71').css({"background-color": "white", "color": "#888"});
	$('.b72').css({"background-color": "white", "color": "#888"});
	$('.b73').css({"background-color": "white", "color": "#888"});
	$('.b74').css({"background-color": "white", "color": "#888"});
	$('.b75').css({"background-color": "#999", "color": "white"});
	$('.na7').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA7'].value = "5";
	AnswerArray2[1] = 5;
});

// 8
$("#na8").click(function() {
	$('#na8').css({"background-color": "#999", "color": "white"});
	$('.b81').css({"background-color": "white", "color": "#888"});
	$('.b82').css({"background-color": "white", "color": "#888"});
	$('.b83').css({"background-color": "white", "color": "#888"});
	$('.b84').css({"background-color": "white", "color": "#888"});
	$('.b85').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA8'].value = "0";
	AnswerArray2[2] = 0;
});
$("#b81").click(function() {
	$('#b81').css({"background-color": "#999", "color": "white"});
	$('.b82').css({"background-color": "white", "color": "#888"});
	$('.b83').css({"background-color": "white", "color": "#888"});
	$('.b84').css({"background-color": "white", "color": "#888"});
	$('.b85').css({"background-color": "white", "color": "#888"});
	$('.na8').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA8'].value = "1";
	AnswerArray2[2] = 1;
});
$("#b82").click(function() {
	$('#b81').css({"background-color": "white", "color": "#888"});
	$('.b82').css({"background-color": "#999", "color": "white"});
	$('.b83').css({"background-color": "white", "color": "#888"});
	$('.b84').css({"background-color": "white", "color": "#888"});
	$('.b85').css({"background-color": "white", "color": "#888"});
	$('.na8').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA8'].value = "2";
	AnswerArray2[2] = 2;
});
$("#b83").click(function() {
	$('#b81').css({"background-color": "white", "color": "#888"});
	$('.b82').css({"background-color": "white", "color": "#888"});
	$('.b83').css({"background-color": "#999", "color": "white"});
	$('.b84').css({"background-color": "white", "color": "#888"});
	$('.b85').css({"background-color": "white", "color": "#888"});
	$('.na8').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA8'].value = "3";
	AnswerArray2[2] = 3;
});
$("#b84").click(function() {
	$('#b81').css({"background-color": "white", "color": "#888"});
	$('.b82').css({"background-color": "white", "color": "#888"});
	$('.b83').css({"background-color": "white", "color": "#888"});
	$('.b84').css({"background-color": "#999", "color": "white"});
	$('.b85').css({"background-color": "white", "color": "#888"});
	$('.na8').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA8'].value = "4";
	AnswerArray2[2] = 4;
});
$("#b85").click(function() {
	$('#b81').css({"background-color": "white", "color": "#888"});
	$('.b82').css({"background-color": "white", "color": "#888"});
	$('.b83').css({"background-color": "white", "color": "#888"});
	$('.b84').css({"background-color": "white", "color": "#888"});
	$('.b85').css({"background-color": "#999", "color": "white"});
	$('.na8').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA8'].value = "5";
	AnswerArray2[2] = 5;
});

// 9
$("#na9").click(function() {
	$('#na9').css({"background-color": "#999", "color": "white"});
	$('.b92').css({"background-color": "white", "color": "#888"});
	$('.b93').css({"background-color": "white", "color": "#888"});
	$('.b94').css({"background-color": "white", "color": "#888"});
	$('.b95').css({"background-color": "white", "color": "#888"});
	$('.b91').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA9'].value = "0";
	AnswerArray2[3] = 0;
});
$("#b91").click(function() {
	$('#b91').css({"background-color": "#999", "color": "white"});
	$('.b92').css({"background-color": "white", "color": "#888"});
	$('.b93').css({"background-color": "white", "color": "#888"});
	$('.b94').css({"background-color": "white", "color": "#888"});
	$('.b95').css({"background-color": "white", "color": "#888"});
	$('.na9').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA9'].value = "1";
	AnswerArray2[3] = 1;
});
$("#b92").click(function() {
	$('#b91').css({"background-color": "white", "color": "#888"});
	$('.b92').css({"background-color": "#999", "color": "white"});
	$('.b93').css({"background-color": "white", "color": "#888"});
	$('.b94').css({"background-color": "white", "color": "#888"});
	$('.b95').css({"background-color": "white", "color": "#888"});
	$('.na9').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA9'].value = "2";
	AnswerArray2[3] = 2;
});
$("#b93").click(function() {
	$('#b91').css({"background-color": "white", "color": "#888"});
	$('.b92').css({"background-color": "white", "color": "#888"});
	$('.b93').css({"background-color": "#999", "color": "white"});
	$('.b94').css({"background-color": "white", "color": "#888"});
	$('.b95').css({"background-color": "white", "color": "#888"});
	$('.na9').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA9'].value = "3";
	AnswerArray2[3] = 3;
});
$("#b94").click(function() {
	$('#b91').css({"background-color": "white", "color": "#888"});
	$('.b92').css({"background-color": "white", "color": "#888"});
	$('.b93').css({"background-color": "white", "color": "#888"});
	$('.b94').css({"background-color": "#999", "color": "white"});
	$('.b95').css({"background-color": "white", "color": "#888"});
	$('.na9').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA9'].value = "4";
	AnswerArray2[3] = 4;
});
$("#b95").click(function() {
	$('#b91').css({"background-color": "white", "color": "#888"});
	$('.b92').css({"background-color": "white", "color": "#888"});
	$('.b93').css({"background-color": "white", "color": "#888"});
	$('.b94').css({"background-color": "white", "color": "#888"});
	$('.b95').css({"background-color": "#999", "color": "white"});
	$('.na9').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA9'].value = "5";
	AnswerArray2[3] = 5;
});

// 10
$("#na10").click(function() {
	$('#na10').css({"background-color": "#999", "color": "white"});
	$('.b102').css({"background-color": "white", "color": "#888"});
	$('.b103').css({"background-color": "white", "color": "#888"});
	$('.b104').css({"background-color": "white", "color": "#888"});
	$('.b105').css({"background-color": "white", "color": "#888"});
	$('.b101').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA10'].value = "0";
	AnswerArray2[4] = 0;
});
$("#b101").click(function() {
	$('#b101').css({"background-color": "#999", "color": "white"});
	$('.b102').css({"background-color": "white", "color": "#888"});
	$('.b103').css({"background-color": "white", "color": "#888"});
	$('.b104').css({"background-color": "white", "color": "#888"});
	$('.b105').css({"background-color": "white", "color": "#888"});
	$('.na10').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA10'].value = "1";
	AnswerArray2[4] = 1;
});
$("#b102").click(function() {
	$('#b101').css({"background-color": "white", "color": "#888"});
	$('.b102').css({"background-color": "#999", "color": "white"});
	$('.b103').css({"background-color": "white", "color": "#888"});
	$('.b104').css({"background-color": "white", "color": "#888"});
	$('.b105').css({"background-color": "white", "color": "#888"});
	$('.na10').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA10'].value = "2";
	AnswerArray2[4] = 2;
});
$("#b103").click(function() {
	$('#b101').css({"background-color": "white", "color": "#888"});
	$('.b102').css({"background-color": "white", "color": "#888"});
	$('.b103').css({"background-color": "#999", "color": "white"});
	$('.b104').css({"background-color": "white", "color": "#888"});
	$('.b105').css({"background-color": "white", "color": "#888"});
	$('.na10').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA10'].value = "3";
	AnswerArray2[4] = 3;
});
$("#b104").click(function() {
	$('#b101').css({"background-color": "white", "color": "#888"});
	$('.b102').css({"background-color": "white", "color": "#888"});
	$('.b103').css({"background-color": "white", "color": "#888"});
	$('.b104').css({"background-color": "#999", "color": "white"});
	$('.b105').css({"background-color": "white", "color": "#888"});
	$('.na10').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA10'].value = "4";
	AnswerArray2[4] = 4;
});
$("#b105").click(function() {
	$('#b101').css({"background-color": "white", "color": "#888"});
	$('.b102').css({"background-color": "white", "color": "#888"});
	$('.b103').css({"background-color": "white", "color": "#888"});
	$('.b104').css({"background-color": "white", "color": "#888"});
	$('.b105').css({"background-color": "#999", "color": "white"});
	$('.na10').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA10'].value = "5";
	AnswerArray2[4] = 5;
});

/* COLLATERAL */
// 11
$("#na11").click(function() {
	$('#na11').css({"background-color": "#999", "color": "white"});
	$('.b112').css({"background-color": "white", "color": "#888"});
	$('.b113').css({"background-color": "white", "color": "#888"});
	$('.b114').css({"background-color": "white", "color": "#888"});
	$('.b115').css({"background-color": "white", "color": "#888"});
	$('.b111').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA11'].value = "0";
	AnswerArray3[0] = 0;
});
$("#b111").click(function() {
	$('#b111').css({"background-color": "#999", "color": "white"});
	$('.b112').css({"background-color": "white", "color": "#888"});
	$('.b113').css({"background-color": "white", "color": "#888"});
	$('.b114').css({"background-color": "white", "color": "#888"});
	$('.b115').css({"background-color": "white", "color": "#888"});
	$('.na11').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA11'].value = "1";
	AnswerArray3[0] = 1;
});
$("#b112").click(function() {
	$('#b111').css({"background-color": "white", "color": "#888"});
	$('.b112').css({"background-color": "#999", "color": "white"});
	$('.b113').css({"background-color": "white", "color": "#888"});
	$('.b114').css({"background-color": "white", "color": "#888"});
	$('.b115').css({"background-color": "white", "color": "#888"});
	$('.na11').css({"background-color": "white", "color": "#888"});
	ocument.MainForm.elements['QA11'].value = "2";
	AnswerArray3[0] = 2;
});
$("#b113").click(function() {
	$('#b111').css({"background-color": "white", "color": "#888"});
	$('.b112').css({"background-color": "white", "color": "#888"});
	$('.b113').css({"background-color": "#999", "color": "white"});
	$('.b114').css({"background-color": "white", "color": "#888"});
	$('.b115').css({"background-color": "white", "color": "#888"});
	$('.na11').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA11'].value = "3";
	AnswerArray3[0] = 3;
});
$("#b114").click(function() {
	$('#b111').css({"background-color": "white", "color": "#888"});
	$('.b112').css({"background-color": "white", "color": "#888"});
	$('.b113').css({"background-color": "white", "color": "#888"});
	$('.b114').css({"background-color": "#999", "color": "white"});
	$('.b115').css({"background-color": "white", "color": "#888"});
	$('.na11').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA11'].value = "4";
	AnswerArray3[0] = 4;
});
$("#b115").click(function() {
	$('#b111').css({"background-color": "white", "color": "#888"});
	$('.b112').css({"background-color": "white", "color": "#888"});
	$('.b113').css({"background-color": "white", "color": "#888"});
	$('.b114').css({"background-color": "white", "color": "#888"});
	$('.b115').css({"background-color": "#999", "color": "white"});
	$('.na11').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA11'].value = "5";
	AnswerArray3[0] = 5;
});

// 12
$("#na12").click(function() {
	$('#na12').css({"background-color": "#999", "color": "white"});
	$('.b122').css({"background-color": "white", "color": "#888"});
	$('.b123').css({"background-color": "white", "color": "#888"});
	$('.b124').css({"background-color": "white", "color": "#888"});
	$('.b125').css({"background-color": "white", "color": "#888"});
	$('.b121').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA12'].value = "0";
	AnswerArray3[1] = 0;
});
$("#b121").click(function() {
	$('#b121').css({"background-color": "#999", "color": "white"});
	$('.b122').css({"background-color": "white", "color": "#888"});
	$('.b123').css({"background-color": "white", "color": "#888"});
	$('.b124').css({"background-color": "white", "color": "#888"});
	$('.b125').css({"background-color": "white", "color": "#888"});
	$('.na12').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA12'].value = "1";
	AnswerArray3[1] = 1;
});
$("#b122").click(function() {
	$('#b121').css({"background-color": "white", "color": "#888"});
	$('.b122').css({"background-color": "#999", "color": "white"});
	$('.b123').css({"background-color": "white", "color": "#888"});
	$('.b124').css({"background-color": "white", "color": "#888"});
	$('.b125').css({"background-color": "white", "color": "#888"});
	$('.na12').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA12'].value = "2";
	AnswerArray3[1] = 2;
});
$("#b123").click(function() {
	$('#b121').css({"background-color": "white", "color": "#888"});
	$('.b122').css({"background-color": "white", "color": "#888"});
	$('.b123').css({"background-color": "#999", "color": "white"});
	$('.b124').css({"background-color": "white", "color": "#888"});
	$('.b125').css({"background-color": "white", "color": "#888"});
	$('.na12').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA12'].value = "3";
	AnswerArray3[1] = 3;
});
$("#b124").click(function() {
	$('#b121').css({"background-color": "white", "color": "#888"});
	$('.b122').css({"background-color": "white", "color": "#888"});
	$('.b123').css({"background-color": "white", "color": "#888"});
	$('.b124').css({"background-color": "#999", "color": "white"});
	$('.b125').css({"background-color": "white", "color": "#888"});
	$('.na12').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA12'].value = "4";
	AnswerArray3[1] = 4;
});
$("#b125").click(function() {
	$('#b121').css({"background-color": "white", "color": "#888"});
	$('.b122').css({"background-color": "white", "color": "#888"});
	$('.b123').css({"background-color": "white", "color": "#888"});
	$('.b124').css({"background-color": "white", "color": "#888"});
	$('.b125').css({"background-color": "#999", "color": "white"});
	$('.na12').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA12'].value = "5";
	AnswerArray3[1] = 5;
});

$("#na13").click(function() {
	$('#na13').css({"background-color": "#999", "color": "white"});
	$('.b132').css({"background-color": "white", "color": "#888"});
	$('.b133').css({"background-color": "white", "color": "#888"});
	$('.b134').css({"background-color": "white", "color": "#888"});
	$('.b135').css({"background-color": "white", "color": "#888"});
	$('.b131').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA13'].value = "0";
	AnswerArray3[2] = 0;
});

// 13
$("#b131").click(function() {
	$('#b131').css({"background-color": "#999", "color": "white"});
	$('.b132').css({"background-color": "white", "color": "#888"});
	$('.b133').css({"background-color": "white", "color": "#888"});
	$('.b134').css({"background-color": "white", "color": "#888"});
	$('.b135').css({"background-color": "white", "color": "#888"});
	$('.na13').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA13'].value = "1";
	AnswerArray3[2] = 1;
});
$("#b132").click(function() {
	$('#b131').css({"background-color": "white", "color": "#888"});
	$('.b132').css({"background-color": "#999", "color": "white"});
	$('.b133').css({"background-color": "white", "color": "#888"});
	$('.b134').css({"background-color": "white", "color": "#888"});
	$('.b135').css({"background-color": "white", "color": "#888"});
	$('.na13').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA13'].value = "2";
	AnswerArray3[2] = 2;
});
$("#b133").click(function() {
	$('#b131').css({"background-color": "white", "color": "#888"});
	$('.b132').css({"background-color": "white", "color": "#888"});
	$('.b133').css({"background-color": "#999", "color": "white"});
	$('.b134').css({"background-color": "white", "color": "#888"});
	$('.b135').css({"background-color": "white", "color": "#888"});
	$('.na13').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA13'].value = "3";
	AnswerArray3[2] = 3;
});
$("#b134").click(function() {
	$('#b131').css({"background-color": "white", "color": "#888"});
	$('.b132').css({"background-color": "white", "color": "#888"});
	$('.b133').css({"background-color": "white", "color": "#888"});
	$('.b134').css({"background-color": "#999", "color": "white"});
	$('.b135').css({"background-color": "white", "color": "#888"});
	$('.na13').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA13'].value = "4";
	AnswerArray3[2] = 4;
});

$("#b135").click(function() {
	$('#b131').css({"background-color": "white", "color": "#888"});
	$('.b132').css({"background-color": "white", "color": "#888"});
	$('.b133').css({"background-color": "white", "color": "#888"});
	$('.b134').css({"background-color": "white", "color": "#888"});
	$('.b135').css({"background-color": "#999", "color": "white"});
	$('.na13').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA13'].value = "5";
	AnswerArray3[2] = 5;
});

// 14
$("#na14").click(function() {
	$('#na14').css({"background-color": "#999", "color": "white"});
	$('.b142').css({"background-color": "white", "color": "#888"});
	$('.b143').css({"background-color": "white", "color": "#888"});
	$('.b144').css({"background-color": "white", "color": "#888"});
	$('.b145').css({"background-color": "white", "color": "#888"});
	$('.b141').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA14'].value = "0";
	AnswerArray3[3] = 0;
});
$("#b141").click(function() {
	$('#b141').css({"background-color": "#999", "color": "white"});
	$('.b142').css({"background-color": "white", "color": "#888"});
	$('.b143').css({"background-color": "white", "color": "#888"});
	$('.b144').css({"background-color": "white", "color": "#888"});
	$('.b145').css({"background-color": "white", "color": "#888"});
	$('.na14').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA14'].value = "1";
	AnswerArray3[3] = 1
});
$("#b142").click(function() {
	$('#b141').css({"background-color": "white", "color": "#888"});
	$('.b142').css({"background-color": "#999", "color": "white"});
	$('.b143').css({"background-color": "white", "color": "#888"});
	$('.b144').css({"background-color": "white", "color": "#888"});
	$('.b145').css({"background-color": "white", "color": "#888"});
	$('.na14').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA14'].value = "2";
	AnswerArray3[3] = 2;
});
$("#b143").click(function() {
	$('#b141').css({"background-color": "white", "color": "#888"});
	$('.b142').css({"background-color": "white", "color": "#888"});
	$('.b143').css({"background-color": "#999", "color": "white"});
	$('.b144').css({"background-color": "white", "color": "#888"});
	$('.b145').css({"background-color": "white", "color": "#888"});
	$('.na14').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA14'].value = "3";
	AnswerArray3[3] = 3
});
$("#b144").click(function() {
	$('#b141').css({"background-color": "white", "color": "#888"});
	$('.b142').css({"background-color": "white", "color": "#888"});
	$('.b143').css({"background-color": "white", "color": "#888"});
	$('.b144').css({"background-color": "#999", "color": "white"});
	$('.b145').css({"background-color": "white", "color": "#888"});
	$('.na14').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA14'].value = "4";
	AnswerArray3[3] = 4;
});
$("#b145").click(function() {
	$('#b141').css({"background-color": "white", "color": "#888"});
	$('.b142').css({"background-color": "white", "color": "#888"});
	$('.b143').css({"background-color": "white", "color": "#888"});
	$('.b144').css({"background-color": "white", "color": "#888"});
	$('.b145').css({"background-color": "#999", "color": "white"});
	$('.na14').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA14'].value = "5";
	AnswerArray3[3] = 5;
});

// 15
$("#na15").click(function() {
	$('#na15').css({"background-color": "#999", "color": "white"});
	$('.b152').css({"background-color": "white", "color": "#888"});
	$('.b153').css({"background-color": "white", "color": "#888"});
	$('.b154').css({"background-color": "white", "color": "#888"});
	$('.b155').css({"background-color": "white", "color": "#888"});
	$('.b151').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA15'].value = "0";
	AnswerArray3[4] = 0;
});
$("#b151").click(function() {
	$('#b151').css({"background-color": "#999", "color": "white"});
	$('.b152').css({"background-color": "white", "color": "#888"});
	$('.b153').css({"background-color": "white", "color": "#888"});
	$('.b154').css({"background-color": "white", "color": "#888"});
	$('.b155').css({"background-color": "white", "color": "#888"});
	$('.na15').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA15'].value = "1";
	AnswerArray3[4] = 1;
});
$("#b152").click(function() {
	$('#b151').css({"background-color": "white", "color": "#888"});
	$('.b152').css({"background-color": "#999", "color": "white"});
	$('.b153').css({"background-color": "white", "color": "#888"});
	$('.b154').css({"background-color": "white", "color": "#888"});
	$('.b155').css({"background-color": "white", "color": "#888"});
	$('.na15').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA15'].value = "2";
	AnswerArray3[4] = 2;
});
$("#b153").click(function() {
	$('#b151').css({"background-color": "white", "color": "#888"});
	$('.b152').css({"background-color": "white", "color": "#888"});
	$('.b153').css({"background-color": "#999", "color": "white"});
	$('.b154').css({"background-color": "white", "color": "#888"});
	$('.b155').css({"background-color": "white", "color": "#888"});
	$('.na15').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA15'].value = "3";
	AnswerArray3[4] = 3;
});
$("#b154").click(function() {
	$('#b151').css({"background-color": "white", "color": "#888"});
	$('.b152').css({"background-color": "white", "color": "#888"});
	$('.b153').css({"background-color": "white", "color": "#888"});
	$('.b154').css({"background-color": "#999", "color": "white"});
	$('.b155').css({"background-color": "white", "color": "#888"});
	$('.na15').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA15'].value = "4";
	AnswerArray3[4] = 4;
});
$("#b155").click(function() {
	$('#b151').css({"background-color": "white", "color": "#888"});
	$('.b152').css({"background-color": "white", "color": "#888"});
	$('.b153').css({"background-color": "white", "color": "#888"});
	$('.b154').css({"background-color": "white", "color": "#888"});
	$('.b155').css({"background-color": "#999", "color": "white"});
	$('.na15').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA15'].value = "5";
	AnswerArray3[4] = 5;
});

/* COMMUNICATION */
// 16
$("#na16").click(function() {
	$('#na16').css({"background-color": "#999", "color": "white"});
	$('.b162').css({"background-color": "white", "color": "#888"});
	$('.b163').css({"background-color": "white", "color": "#888"});
	$('.b164').css({"background-color": "white", "color": "#888"});
	$('.b165').css({"background-color": "white", "color": "#888"});
	$('.b161').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA16'].value = "0";
	AnswerArray4[0] = 0;
});
$("#b161").click(function() {
	$('#b161').css({"background-color": "#999", "color": "white"});
	$('.b162').css({"background-color": "white", "color": "#888"});
	$('.b163').css({"background-color": "white", "color": "#888"});
	$('.b164').css({"background-color": "white", "color": "#888"});
	$('.b165').css({"background-color": "white", "color": "#888"});
	$('.na16').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA16'].value = "1";
	AnswerArray4[0] = 1;
});
$("#b162").click(function() {
	$('#b161').css({"background-color": "white", "color": "#888"});
	$('.b162').css({"background-color": "#999", "color": "white"});
	$('.b163').css({"background-color": "white", "color": "#888"});
	$('.b164').css({"background-color": "white", "color": "#888"});
	$('.b165').css({"background-color": "white", "color": "#888"});
	$('.na16').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA16'].value = "2";
	AnswerArray4[0] = 2;
});
$("#b163").click(function() {
	$('#b161').css({"background-color": "white", "color": "#888"});
	$('.b162').css({"background-color": "white", "color": "#888"});
	$('.b163').css({"background-color": "#999", "color": "white"});
	$('.b164').css({"background-color": "white", "color": "#888"});
	$('.b165').css({"background-color": "white", "color": "#888"});
	$('.na16').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA16'].value = "3";
	AnswerArray4[0] = 3;
});
$("#b164").click(function() {
	$('#b161').css({"background-color": "white", "color": "#888"});
	$('.b162').css({"background-color": "white", "color": "#888"});
	$('.b163').css({"background-color": "white", "color": "#888"});
	$('.b164').css({"background-color": "#999", "color": "white"});
	$('.b165').css({"background-color": "white", "color": "#888"});
	$('.na16').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA16'].value = "4";
	AnswerArray4[0] = 4;
});
$("#b165").click(function() {
	$('#b161').css({"background-color": "white", "color": "#888"});
	$('.b162').css({"background-color": "white", "color": "#888"});
	$('.b163').css({"background-color": "white", "color": "#888"});
	$('.b164').css({"background-color": "white", "color": "#888"});
	$('.b165').css({"background-color": "#999", "color": "white"});
	$('.na16').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA16'].value = "5";
	AnswerArray4[0] = 5;
});

// 17
$("#na17").click(function() {
	$('#na17').css({"background-color": "#999", "color": "white"});
	$('.b172').css({"background-color": "white", "color": "#888"});
	$('.b173').css({"background-color": "white", "color": "#888"});
	$('.b174').css({"background-color": "white", "color": "#888"});
	$('.b175').css({"background-color": "white", "color": "#888"});
	$('.b171').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA17'].value = "0";
	AnswerArray4[1] = 0;
});
$("#b171").click(function() {
	$('#b171').css({"background-color": "#999", "color": "white"});
	$('.b172').css({"background-color": "white", "color": "#888"});
	$('.b173').css({"background-color": "white", "color": "#888"});
	$('.b174').css({"background-color": "white", "color": "#888"});
	$('.b175').css({"background-color": "white", "color": "#888"});
	$('.na17').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA17'].value = "1";
	AnswerArray4[1] = 1;
});
$("#b172").click(function() {
	$('#b171').css({"background-color": "white", "color": "#888"});
	$('.b172').css({"background-color": "#999", "color": "white"});
	$('.b173').css({"background-color": "white", "color": "#888"});
	$('.b174').css({"background-color": "white", "color": "#888"});
	$('.b175').css({"background-color": "white", "color": "#888"});
	$('.na17').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA17'].value = "2";
	AnswerArray4[1] = 2;
});
$("#b173").click(function() {
	$('#b171').css({"background-color": "white", "color": "#888"});
	$('.b172').css({"background-color": "white", "color": "#888"});
	$('.b173').css({"background-color": "#999", "color": "white"});
	$('.b174').css({"background-color": "white", "color": "#888"});
	$('.b175').css({"background-color": "white", "color": "#888"});
	$('.na17').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA17'].value = "3";
	AnswerArray4[1] = 3;
});
$("#b174").click(function() {
	$('#b171').css({"background-color": "white", "color": "#888"});
	$('.b172').css({"background-color": "white", "color": "#888"});
	$('.b173').css({"background-color": "white", "color": "#888"});
	$('.b174').css({"background-color": "#999", "color": "white"});
	$('.b175').css({"background-color": "white", "color": "#888"});
	$('.na17').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA17'].value = "4";
	AnswerArray4[1] = 4;
});
$("#b175").click(function() {
	$('#b171').css({"background-color": "white", "color": "#888"});
	$('.b172').css({"background-color": "white", "color": "#888"});
	$('.b173').css({"background-color": "white", "color": "#888"});
	$('.b174').css({"background-color": "white", "color": "#888"});
	$('.b175').css({"background-color": "#999", "color": "white"});
	$('.na17').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA17'].value = "5";
	AnswerArray4[1] = 5;
});

// 18
$("#na18").click(function() {
	$('#na18').css({"background-color": "#999", "color": "white"});
	$('.b182').css({"background-color": "white", "color": "#888"});
	$('.b183').css({"background-color": "white", "color": "#888"});
	$('.b184').css({"background-color": "white", "color": "#888"});
	$('.b185').css({"background-color": "white", "color": "#888"});
	$('.b181').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA18'].value = "0";
	AnswerArray4[2] = 0;
});
$("#b181").click(function() {
	$('#b181').css({"background-color": "#999", "color": "white"});
	$('.b182').css({"background-color": "white", "color": "#888"});
	$('.b183').css({"background-color": "white", "color": "#888"});
	$('.b184').css({"background-color": "white", "color": "#888"});
	$('.b185').css({"background-color": "white", "color": "#888"});
	$('.na18').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA18'].value = "1";
	AnswerArray4[2] = 1;
});
$("#b182").click(function() {
	$('#b181').css({"background-color": "white", "color": "#888"});
	$('.b182').css({"background-color": "#999", "color": "white"});
	$('.b183').css({"background-color": "white", "color": "#888"});
	$('.b184').css({"background-color": "white", "color": "#888"});
	$('.b185').css({"background-color": "white", "color": "#888"});
	$('.na18').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA18'].value = "2";
	AnswerArray4[2] = 2;
});
$("#b183").click(function() {
	$('#b181').css({"background-color": "white", "color": "#888"});
	$('.b182').css({"background-color": "white", "color": "#888"});
	$('.b183').css({"background-color": "#999", "color": "white"});
	$('.b184').css({"background-color": "white", "color": "#888"});
	$('.b185').css({"background-color": "white", "color": "#888"});
	$('.na18').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA18'].value = "3";
	AnswerArray4[2] = 3;
});
$("#b184").click(function() {
	$('#b181').css({"background-color": "white", "color": "#888"});
	$('.b182').css({"background-color": "white", "color": "#888"});
	$('.b183').css({"background-color": "white", "color": "#888"});
	$('.b184').css({"background-color": "#999", "color": "white"});
	$('.b185').css({"background-color": "white", "color": "#888"});
	$('.na18').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA18'].value = "4";
	AnswerArray4[2] = 4;
});
$("#b185").click(function() {
	$('#b181').css({"background-color": "white", "color": "#888"});
	$('.b182').css({"background-color": "white", "color": "#888"});
	$('.b183').css({"background-color": "white", "color": "#888"});
	$('.b184').css({"background-color": "white", "color": "#888"});
	$('.b185').css({"background-color": "#999", "color": "white"});
	$('.na18').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA18'].value = "5";
	AnswerArray4[2] = 5;
});

// 19
$("#na19").click(function() {
	$('#na19').css({"background-color": "#999", "color": "white"});
	$('.b192').css({"background-color": "white", "color": "#888"});
	$('.b193').css({"background-color": "white", "color": "#888"});
	$('.b194').css({"background-color": "white", "color": "#888"});
	$('.b195').css({"background-color": "white", "color": "#888"});
	$('.b191').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA19'].value = "0";
	AnswerArray4[3] = 0;
});
$("#b191").click(function() {
	$('#b191').css({"background-color": "#999", "color": "white"});
	$('.b192').css({"background-color": "white", "color": "#888"});
	$('.b193').css({"background-color": "white", "color": "#888"});
	$('.b194').css({"background-color": "white", "color": "#888"});
	$('.b195').css({"background-color": "white", "color": "#888"});
	$('.na19').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA19'].value = "1";
	AnswerArray4[3] = 1;
});
$("#b192").click(function() {
	$('#b191').css({"background-color": "white", "color": "#888"});
	$('.b192').css({"background-color": "#999", "color": "white"});
	$('.b193').css({"background-color": "white", "color": "#888"});
	$('.b194').css({"background-color": "white", "color": "#888"});
	$('.b195').css({"background-color": "white", "color": "#888"});
	$('.na19').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA19'].value = "2";
	AnswerArray4[3] = 2;
});
$("#b193").click(function() {
	$('#b191').css({"background-color": "white", "color": "#888"});
	$('.b192').css({"background-color": "white", "color": "#888"});
	$('.b193').css({"background-color": "#999", "color": "white"});
	$('.b194').css({"background-color": "white", "color": "#888"});
	$('.b195').css({"background-color": "white", "color": "#888"});
	$('.na19').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA19'].value = "3";
	AnswerArray4[3] = 3;
});
$("#b194").click(function() {
	$('#b191').css({"background-color": "white", "color": "#888"});
	$('.b192').css({"background-color": "white", "color": "#888"});
	$('.b193').css({"background-color": "white", "color": "#888"});
	$('.b194').css({"background-color": "#999", "color": "white"});
	$('.b195').css({"background-color": "white", "color": "#888"});
	$('.na19').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA19'].value = "4";
	AnswerArray4[3] = 4;
});
$("#b195").click(function() {
	$('#b191').css({"background-color": "white", "color": "#888"});
	$('.b192').css({"background-color": "white", "color": "#888"});
	$('.b193').css({"background-color": "white", "color": "#888"});
	$('.b194').css({"background-color": "white", "color": "#888"});
	$('.b195').css({"background-color": "#999", "color": "white"});
	$('.na19').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA19'].value = "5";
	AnswerArray4[3] = 5;
});
			 
// 20
$("#na20").click(function() {
	$('#na20').css({"background-color": "#999", "color": "white"});
	$('.b202').css({"background-color": "white", "color": "#888"});
	$('.b203').css({"background-color": "white", "color": "#888"});
	$('.b204').css({"background-color": "white", "color": "#888"});
	$('.b205').css({"background-color": "white", "color": "#888"});
	$('.b201').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA20'].value = "0";
	AnswerArray4[4] = 0;
});
$("#b201").click(function() {
	$('#b201').css({"background-color": "#999", "color": "white"});
	$('.b202').css({"background-color": "white", "color": "#888"});
	$('.b203').css({"background-color": "white", "color": "#888"});
	$('.b204').css({"background-color": "white", "color": "#888"});
	$('.b205').css({"background-color": "white", "color": "#888"});
	$('.na20').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA20'].value = "1";
	AnswerArray4[4] = 1;
});
$("#b202").click(function() {
	$('#b201').css({"background-color": "white", "color": "#888"});
	$('.b202').css({"background-color": "#999", "color": "white"});
	$('.b203').css({"background-color": "white", "color": "#888"});
	$('.b204').css({"background-color": "white", "color": "#888"});
	$('.b205').css({"background-color": "white", "color": "#888"});
	$('.na20').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA20'].value = "2";
	AnswerArray4[4] = 2;
});
$("#b203").click(function() {
	$('#b201').css({"background-color": "white", "color": "#888"});
	$('.b202').css({"background-color": "white", "color": "#888"});
	$('.b203').css({"background-color": "#999", "color": "white"});
	$('.b204').css({"background-color": "white", "color": "#888"});
	$('.b205').css({"background-color": "white", "color": "#888"});
	$('.na20').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA20'].value = "3";
	AnswerArray4[4] = 3;
});
$("#b204").click(function() {
	$('#b201').css({"background-color": "white", "color": "#888"});
	$('.b202').css({"background-color": "white", "color": "#888"});
	$('.b203').css({"background-color": "white", "color": "#888"});
	$('.b204').css({"background-color": "#999", "color": "white"});
	$('.b205').css({"background-color": "white", "color": "#888"});
	$('.na20').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA20'].value = "4";
	AnswerArray4[4] = 4;
});
$("#b205").click(function() {
	$('#b201').css({"background-color": "white", "color": "#888"});
	$('.b202').css({"background-color": "white", "color": "#888"});
	$('.b203').css({"background-color": "white", "color": "#888"});
	$('.b204').css({"background-color": "white", "color": "#888"});
	$('.b205').css({"background-color": "#999", "color": "white"});
	$('.na20').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA20'].value = "5";
	AnswerArray4[4] = 5;
});

/* CONSOLIDATION */
// 21
$("#na21").click(function() {
	$('#na21').css({"background-color": "#999", "color": "white"});
	$('.b212').css({"background-color": "white", "color": "#888"});
	$('.b213').css({"background-color": "white", "color": "#888"});
	$('.b214').css({"background-color": "white", "color": "#888"});
	$('.b215').css({"background-color": "white", "color": "#888"});
	$('.b211').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA21'].value = "0";
	AnswerArray5[0] = 0;
});
$("#b211").click(function() {
	$('#b211').css({"background-color": "#999", "color": "white"});
	$('.b212').css({"background-color": "white", "color": "#888"});
	$('.b213').css({"background-color": "white", "color": "#888"});
	$('.b214').css({"background-color": "white", "color": "#888"});
	$('.b215').css({"background-color": "white", "color": "#888"});
	$('.na21').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA21'].value = "1";
	AnswerArray5[0] = 1;
});
$("#b212").click(function() {
	$('#b211').css({"background-color": "white", "color": "#888"});
	$('.b212').css({"background-color": "#999", "color": "white"});
	$('.b213').css({"background-color": "white", "color": "#888"});
	$('.b214').css({"background-color": "white", "color": "#888"});
	$('.b215').css({"background-color": "white", "color": "#888"});
	$('.na21').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA21'].value = "2";
	AnswerArray5[0] = 2;
});
$("#b213").click(function() {
	$('#b211').css({"background-color": "white", "color": "#888"});
	$('.b212').css({"background-color": "white", "color": "#888"});
	$('.b213').css({"background-color": "#999", "color": "white"});
	$('.b214').css({"background-color": "white", "color": "#888"});
	$('.b215').css({"background-color": "white", "color": "#888"});
	$('.na21').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA21'].value = "3";
	AnswerArray5[0] = 3;
});
$("#b214").click(function() {
	$('#b211').css({"background-color": "white", "color": "#888"});
	$('.b212').css({"background-color": "white", "color": "#888"});
	$('.b213').css({"background-color": "white", "color": "#888"});
	$('.b214').css({"background-color": "#999", "color": "white"});
	$('.b215').css({"background-color": "white", "color": "#888"});
	$('.na21').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA21'].value = "4";
	AnswerArray5[0] = 4;
});
$("#b215").click(function() {
	$('#b211').css({"background-color": "white", "color": "#888"});
	$('.b212').css({"background-color": "white", "color": "#888"});
	$('.b213').css({"background-color": "white", "color": "#888"});
	$('.b214').css({"background-color": "white", "color": "#888"});
	$('.b215').css({"background-color": "#999", "color": "white"});
	$('.na21').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA21'].value = "5";
	AnswerArray5[0] = 5;
});

// 22
$("#na22").click(function() {
	$('#na22').css({"background-color": "#999", "color": "white"});
	$('.b222').css({"background-color": "white", "color": "#888"});
	$('.b223').css({"background-color": "white", "color": "#888"});
	$('.b224').css({"background-color": "white", "color": "#888"});
	$('.b225').css({"background-color": "white", "color": "#888"});
	$('.b221').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA22'].value = "0";
	AnswerArray5[1] = 0;
});
$("#b221").click(function() {
	$('#b221').css({"background-color": "#999", "color": "white"});
	$('.b222').css({"background-color": "white", "color": "#888"});
	$('.b223').css({"background-color": "white", "color": "#888"});
	$('.b224').css({"background-color": "white", "color": "#888"});
	$('.b225').css({"background-color": "white", "color": "#888"});
	$('.na22').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA22'].value = "1";
	AnswerArray5[1] = 1;
});
$("#b222").click(function() {
	$('#b221').css({"background-color": "white", "color": "#888"});
	$('.b222').css({"background-color": "#999", "color": "white"});
	$('.b223').css({"background-color": "white", "color": "#888"});
	$('.b224').css({"background-color": "white", "color": "#888"});
	$('.b225').css({"background-color": "white", "color": "#888"});
	$('.na22').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA22'].value = "2";
	AnswerArray5[1] = 2;
});
$("#b223").click(function() {
	$('#b221').css({"background-color": "white", "color": "#888"});
	$('.b222').css({"background-color": "white", "color": "#888"});
	$('.b223').css({"background-color": "#999", "color": "white"});
	$('.b224').css({"background-color": "white", "color": "#888"});
	$('.b225').css({"background-color": "white", "color": "#888"});
	$('.na22').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA22'].value = "3";
	AnswerArray5[1] = 3;
});
$("#b224").click(function() {
	$('#b221').css({"background-color": "white", "color": "#888"});
	$('.b222').css({"background-color": "white", "color": "#888"});
	$('.b223').css({"background-color": "white", "color": "#888"});
	$('.b224').css({"background-color": "#999", "color": "white"});
	$('.b225').css({"background-color": "white", "color": "#888"});
	$('.na22').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA22'].value = "4";
	AnswerArray5[1] = 4;
});
$("#b225").click(function() {
	$('#b221').css({"background-color": "white", "color": "#888"});
	$('.b222').css({"background-color": "white", "color": "#888"});
	$('.b223').css({"background-color": "white", "color": "#888"});
	$('.b224').css({"background-color": "white", "color": "#888"});
	$('.b225').css({"background-color": "#999", "color": "white"});
	$('.na22').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA22'].value = "5";
	AnswerArray5[1] = 5;
});

// 23
$("#na23").click(function() {
$('#na23').css({"background-color": "#999", "color": "white"});
$('.b232').css({"background-color": "white", "color": "#888"});
$('.b233').css({"background-color": "white", "color": "#888"});
$('.b234').css({"background-color": "white", "color": "#888"});
$('.b235').css({"background-color": "white", "color": "#888"});
$('.b231').css({"background-color": "white", "color": "#888"});
document.MainForm.elements['QA23'].value = "0";
AnswerArray5[2] = 0;
});
$("#b231").click(function() {
	$('#b231').css({"background-color": "#999", "color": "white"});
	$('.b232').css({"background-color": "white", "color": "#888"});
	$('.b233').css({"background-color": "white", "color": "#888"});
	$('.b234').css({"background-color": "white", "color": "#888"});
	$('.b235').css({"background-color": "white", "color": "#888"});
	$('.na23').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA23'].value = "1";
	AnswerArray5[2] = 1;
});
$("#b232").click(function() {
	$('#b231').css({"background-color": "white", "color": "#888"});
	$('.b232').css({"background-color": "#999", "color": "white"});
	$('.b233').css({"background-color": "white", "color": "#888"});
	$('.b234').css({"background-color": "white", "color": "#888"});
	$('.b235').css({"background-color": "white", "color": "#888"});
	$('.na23').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA23'].value = "2";
	AnswerArray5[2] = 2;
});
$("#b233").click(function() {
	$('#b231').css({"background-color": "white", "color": "#888"});
	$('.b232').css({"background-color": "white", "color": "#888"});
	$('.b233').css({"background-color": "#999", "color": "white"});
	$('.b234').css({"background-color": "white", "color": "#888"});
	$('.b235').css({"background-color": "white", "color": "#888"});
	$('.na23').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA23'].value = "3";
	AnswerArray5[2] = 3;
});
$("#b234").click(function() {
	$('#b231').css({"background-color": "white", "color": "#888"});
	$('.b232').css({"background-color": "white", "color": "#888"});
	$('.b233').css({"background-color": "white", "color": "#888"});
	$('.b234').css({"background-color": "#999", "color": "white"});
	$('.b235').css({"background-color": "white", "color": "#888"});
	$('.na23').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA23'].value = "4";
	AnswerArray5[2] = 4;
});
$("#b235").click(function() {
	$('#b231').css({"background-color": "white", "color": "#888"});
	$('.b232').css({"background-color": "white", "color": "#888"});
	$('.b233').css({"background-color": "white", "color": "#888"});
	$('.b234').css({"background-color": "white", "color": "#888"});
	$('.b235').css({"background-color": "#999", "color": "white"});
	$('.na23').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA23'].value = "5";
	AnswerArray5[2] = 5;
});

// 24
$("#na24").click(function() {
	$('#na24').css({"background-color": "#999", "color": "white"});
	$('.b242').css({"background-color": "white", "color": "#888"});
	$('.b243').css({"background-color": "white", "color": "#888"});
	$('.b244').css({"background-color": "white", "color": "#888"});
	$('.b245').css({"background-color": "white", "color": "#888"});
	$('.b241').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA24'].value = "0";
	AnswerArray5[3] = 0;
});
$("#b241").click(function() {
	$('#b241').css({"background-color": "#999", "color": "white"});
	$('.b242').css({"background-color": "white", "color": "#888"});
	$('.b243').css({"background-color": "white", "color": "#888"});
	$('.b244').css({"background-color": "white", "color": "#888"});
	$('.b245').css({"background-color": "white", "color": "#888"});
	$('.na24').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA24'].value = "1";
	AnswerArray5[3] = 1;
});
$("#b242").click(function() {
	$('#b241').css({"background-color": "white", "color": "#888"});
	$('.b242').css({"background-color": "#999", "color": "white"});
	$('.b243').css({"background-color": "white", "color": "#888"});
	$('.b244').css({"background-color": "white", "color": "#888"});
	$('.b245').css({"background-color": "white", "color": "#888"});
	$('.na24').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA24'].value = "2";
	AnswerArray5[3] = 2;
});
$("#b243").click(function() {
	$('#b241').css({"background-color": "white", "color": "#888"});
	$('.b242').css({"background-color": "white", "color": "#888"});
	$('.b243').css({"background-color": "#999", "color": "white"});
	$('.b244').css({"background-color": "white", "color": "#888"});
	$('.b245').css({"background-color": "white", "color": "#888"});
	$('.na24').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA24'].value = "3";
	AnswerArray5[3] = 3;
});
$("#b244").click(function() {
	$('#b241').css({"background-color": "white", "color": "#888"});
	$('.b242').css({"background-color": "white", "color": "#888"});
	$('.b243').css({"background-color": "white", "color": "#888"});
	$('.b244').css({"background-color": "#999", "color": "white"});
	$('.b245').css({"background-color": "white", "color": "#888"});
	$('.na24').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA24'].value = "4";
	AnswerArray5[3] = 4;
});
$("#b245").click(function() {
	$('#b241').css({"background-color": "white", "color": "#888"});
	$('.b242').css({"background-color": "white", "color": "#888"});
	$('.b243').css({"background-color": "white", "color": "#888"});
	$('.b244').css({"background-color": "white", "color": "#888"});
	$('.b245').css({"background-color": "#999", "color": "white"});
	$('.na24').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA24'].value = "5";
	AnswerArray5[3] = 5;
});

// 25
$("#na25").click(function() {
	$('#na25').css({"background-color": "#999", "color": "white"});
	$('.b252').css({"background-color": "white", "color": "#888"});
	$('.b253').css({"background-color": "white", "color": "#888"});
	$('.b254').css({"background-color": "white", "color": "#888"});
	$('.b255').css({"background-color": "white", "color": "#888"});
	$('.b251').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA25'].value = "0";
	AnswerArray5[4] = 0;
});
$("#b251").click(function() {
	$('#b251').css({"background-color": "#999", "color": "white"});
	$('.b252').css({"background-color": "white", "color": "#888"});
	$('.b253').css({"background-color": "white", "color": "#888"});
	$('.b254').css({"background-color": "white", "color": "#888"});
	$('.b255').css({"background-color": "white", "color": "#888"});
	$('.na25').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA25'].value = "1";
	AnswerArray5[4] = 1;
});
$("#b252").click(function() {
	$('#b251').css({"background-color": "white", "color": "#888"});
	$('.b252').css({"background-color": "#999", "color": "white"});
	$('.b253').css({"background-color": "white", "color": "#888"});
	$('.b254').css({"background-color": "white", "color": "#888"});
	$('.b255').css({"background-color": "white", "color": "#888"});
	$('.na25').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA25'].value = "2";
	AnswerArray5[4] = 2;
});
$("#b253").click(function() {
	$('#b251').css({"background-color": "white", "color": "#888"});
	$('.b252').css({"background-color": "white", "color": "#888"});
	$('.b253').css({"background-color": "#999", "color": "white"});
	$('.b254').css({"background-color": "white", "color": "#888"});
	$('.b255').css({"background-color": "white", "color": "#888"});
	$('.na25').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA25'].value = "3";
	AnswerArray5[4] = 3;
});
$("#b254").click(function() {
	$('#b251').css({"background-color": "white", "color": "#888"});
	$('.b252').css({"background-color": "white", "color": "#888"});
	$('.b253').css({"background-color": "white", "color": "#888"});
	$('.b254').css({"background-color": "#999", "color": "white"});
	$('.b255').css({"background-color": "white", "color": "#888"});
	$('.na25').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA25'].value = "4";
	AnswerArray5[4] = 4;
});
$("#b255").click(function() {
	$('#b251').css({"background-color": "white", "color": "#888"});
	$('.b252').css({"background-color": "white", "color": "#888"});
	$('.b253').css({"background-color": "white", "color": "#888"});
	$('.b254').css({"background-color": "white", "color": "#888"});
	$('.b255').css({"background-color": "#999", "color": "white"});
	$('.na25').css({"background-color": "white", "color": "#888"});
	document.MainForm.elements['QA25'].value = "5";
	AnswerArray5[4] = 5;
});
