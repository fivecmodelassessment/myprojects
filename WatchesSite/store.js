
/*var FirstName2 = React.createClass({ 

render : function() {
       return (
        	<div className="store-test-li">
	        	<p>fsdafasfaf</p>
	        </div>
        )
    }


});


var FigureAll = React.createClass({ 

render : function() {
       return (
	        	
        )
    }


});

*/

var ShopingCar= React.createClass({
	render:function () {
		return(
			<div className="cart-main-div-father">
				<div className="cart-block-div">
					<img src="assets/shoping-cart.png" className="cart-img"/>
				</div>
				<div className="cart-block-div">
					<p className="cart-items-count" id="cart-item-count">0</p>
					<p className="cart-items-price" id="cart-items-price-sum">0$</p>
				</div>
			</div>
			)
	}
});

var Clicker = React.createClass({



render:function () {
	return <button className="store-filter-apply-button" onClick={this.props.clickTest}>Click4Test</button>
}

});

var Modal4Watch = React.createClass({

	render:function () {
	
		return(
			<div className='store-watch-modal-wraper'>


				<div className='store-watch-modal'>
					<strong className="modal-close-btn" >&#10060;</strong>
					<div className="modal-arrow-left"><img src="assets/left-arrow-before.png" id="left-arrow-modal"/></div>
					<div className="modal-img-wraper"><img className="modal-img" src={data2[0].img}/></div>
					<div className="modal-data-wraper">
						<p className="modal-watch-name"><strong id="span-name">{data2[0].name}</strong></p>
						<p className="modal-watch-model"><span id="span-model">{data2[0].model}</span></p>
						<p className="modal-watch-ar_num">Item #<span id="span-ar_num">{data2[0].articule_number}</span></p>
						<p className="modal-original-price">Order now: +359 887 234 562</p>
						<p className="modal-watch-price"><i id="span-price">{"$"+data2[0].price}</i>  <span  className="modal-watch-off" id="span-off">{data2[0].off+"% off"}</span></p>
						<p className="modal-original-price">Original price:  <span id="span-ori-price"></span></p>
						<p className="modal-original-price shiping-price">Shiping price:  <span id="span-shipping"></span></p>
						<p className="modal-original-price avaliblility-p">In stock:  <span id="span-avalible"></span></p>
						<button id="buy-now-btn" className="modal-buy-btn">BUY NOW</button>
						<button id="to-cart-btn" className="modal-buy-btn">TO CART</button>
						<div className="modal-switchers-arrow">
							
							
						</div>
						
					</div>
					<div className="modal-arrow-right"><img src="assets/right-arrow-before.png"id="right-arrow-modal"/></div>
				</div>
			</div>
			)
	}


});


var List = React.createClass({
	clickEring:function () {
		console.log("hey");	
	},

	renderAll:function() {
		const data = this.props.data;

				const dataList = data.map(watch=>{

					return(
							<figure key={watch.key} onClick={this.clickEring} id={watch.id} className={"store-watch-object" + ' ' + watch.gender + ' ' + watch.color }><img src={watch.img} className="store-fiure-img "/>
								    <figcaption className="store-title-figure"><strong>{watch.name}</strong> {watch.model}</figcaption>
								    <figcaption className="store-price-figure">Price:<strong> {watch.price}$</strong><span> {watch.off}% OFF</span></figcaption>
							</figure>
							
							)
					});
				return dataList;
	},

	render:function () {
		
		return (
			<div>{this.renderAll()}</div>
			)
		}

});

var Filters = React.createClass({
	render:function () {
		return(
			<div>
				<button onClick={this.SortMan} id="FilterButton" className="store-filter-apply-button">Apply</button>
				<button onClick={this.SortMan} id="manButton" className="store-filter-apply-button">Man</button>
				<button onClick={this.SortWoman} id="womanButton" className="store-filter-apply-button">Woman</button>
				
				<button onClick={this.SortMan} id="brightButton" className="store-filter-apply-button">Bright</button>
				<button onClick={this.SortWoman} id="darkButton" className="store-filter-apply-button">Dark</button>
					<div>
						<p className="store-filters-section-title">Gender</p>
							<label className="store-filter-checkbox-label">
								<input type="checkbox" id="man-checkbox" value="man" className="store-filter-checkbox"/>Man</label>
							<label className="store-filter-checkbox-label">
								<input type="checkbox" id="woman-checkbox" value="woman" className="store-filter-checkbox"/>Woman</label>
						
					</div>
					<div>
						<p className="store-filters-section-title">Color</p>
						
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="white-checkbox" value="white" className="store-filter-checkbox"/>White</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="brown-checkbox" value="brown" className="store-filter-checkbox"/>Brown</label>		
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="black-checkbox" value="black" className="store-filter-checkbox"/>Black</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="red-checkbox" value="red" className="store-filter-checkbox"/>Red</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="yellow-checkbox" value="yellow" className="store-filter-checkbox"/>Yellow</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="green-checkbox" value="green" className="store-filter-checkbox"/>Green</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="blue-checkbox" value="blue" className="store-filter-checkbox"/>Blue</label>
						<label className="store-filter-checkbox-label">
							<input type="checkbox" id="purple-checkbox" value="purple" className="store-filter-checkbox"/>Purple</label>

					</div>
					<div>
						<p className="store-filters-section-title">Price</p>
						<label className="store-filter-checkbox-label">From:<input type="text" className="filters-price-input" id="filter_from_input"/></label>
						<label className="store-filter-checkbox-label">To:<input type="text" className="filters-price-input" id="filter_to_input"/></label>
					</div>

			</div>
			)
	}
});



var Store = React.createClass({ 

	




	render : function() {
		
				return (

		       		<div className="store-app-all-wraper">
		       		<ShopingCar/>
		       		<Modal4Watch modalData={this.props.data}/>
					<div className="store-filters-wraper">
						<p className="store-results-and-filter-title-p">Filters</p>
						<Filters/>
						
					</div>

		        	<div className="store-articules-wraper">
			        	<p className="store-results-and-filter-title-p">Results</p>
			        	<List data={this.props.data}/>
			        </div>
			        </div>
		        )
	}


});

$(document).ready(function () {
	$("#manButton,#womanButton,#brightButton,#darkButton").hide();

var counterClick ;

	var comma1="",comma2="",comma3="",comma4="",comma5="",ClMa="",ClWo="",ClBr="", ClBl="", ClWh="", ClRd="";

	$("#man-checkbox").click(function () {
		if($(this).prop('checked')){
			ClMa = ".class_man";
			
		}
		if(!$(this).prop('checked')){
			ClMa = "";
		}	
	});
	
	$("#woman-checkbox").click(function () {
		if($(this).prop('checked')){
			ClWo = ".class_woman";
		}
		if(!$(this).prop('checked')){
			ClWo = "";
		}	
	});

	$("#white-checkbox").click(function () {
		if($(this).prop('checked')){
			ClWh = ".class_white";
		}
		if(!$(this).prop('checked')){
			ClWh = "";
		}	
	});
	$("#brown-checkbox").click(function () {
		if($(this).prop('checked')){
			ClBr = ".class_brown";
		}
		if(!$(this).prop('checked')){
			ClBr = "";
		}	
	});
	$("#black-checkbox").click(function () {
		if($(this).prop('checked')){
			ClBl = ".class_black";
		}
		if(!$(this).prop('checked')){
			ClBl = "";
		}	
	});
	$("#red-checkbox").click(function () {
		if($(this).prop('checked')){
			ClRd = ".class_red";
		}
		if(!$(this).prop('checked')){
			ClRd = "";
		}	
	});




	
$("#FilterButton").bind("click",function () {
	
 



$(".store-watch-object").hide();
	
	var Price_from, Price_to;
	Price_from = $("#filter_from_input").val();
	Price_to = $("#filter_to_input").val();

	for (var i = 0 ; i <= data2.length - 1; i++) {
		if ( data2[i].price > Price_from && data2[i].price < Price_to ) {
			console.log(data2[i].name + data2[i].model + data2[i].price + " " +Price_from +" "+ Price_to );

		}
		
	}
	if ($("#woman-checkbox").prop('checked') && $("#man-checkbox").prop('checked') ) {
		$(".store-watch-object").show();
	}
	if (!$("#woman-checkbox").prop('checked') && !$("#man-checkbox").prop('checked') ) {
			
			$(ClBr).show();
			$(ClBl).show();
			$(ClWh).show();
			$(ClRd).show();

	}
	
	
	
	
	setTimeout(function () {
		
		
		if (!$("#woman-checkbox").prop('checked') && 
			!$("#man-checkbox").prop('checked') && 
			!$("#white-checkbox").prop('checked') && 
			!$("#black-checkbox").prop('checked')&& 
			!$("#brown-checkbox").prop('checked') && 
			!$("#red-checkbox").prop('checked') ) {
			
			$(".store-watch-object").show();
		}


		var RT = ClMa  + ClWo  + ClBr  + ClBl  + ClWh  + ClRd ;

		$(RT).show();

		console.log(RT);


	},200);

});


	


Modal_apearing(1);
Modal_apearing(2);
Modal_apearing(3);
Modal_apearing(4);
Modal_apearing(5);
Modal_apearing(6);
Modal_apearing(7);
Modal_apearing(8);
Modal_apearing(9);
Modal_apearing(10);
Modal_apearing(11);
Modal_apearing(12);

$(".store-watch-modal-wraper").hide();

function Modal_apearing(num) {
	
	$("#watch"+ num).click(function () {
		counterClick = num;
		console.log(counterClick);
		var  cenaPredi, cenaSega, promenenProcent, shipingIf;
		promenenProcent = 100 - data2[num-1].off;
		cenaSega=data2[num-1].price;
		cenaPredi = ((cenaSega*100)/promenenProcent).toFixed(0);
		shipingIf = (data2[num-1].shiping == "Free")? "Free" : "$"+data2[num-1].shiping;
		
		$("#span-name").text(data2[num-1].name);
	    $("#span-model").text(data2[num-1].model);
	    $("#span-price").text("$"+cenaSega);
	    $("#span-off").text(data2[num-1].off+"% off");
	    $("#span-ori-price").text("$"+cenaPredi);
	    $("#span-shipping").text(shipingIf);
	    $("#span-avalible").text(data2[num-1].availability);
	    $(".modal-img").attr("src", data2[num-1].img); 
	    $("#span-ar_num").text(data2[num-1].articule_number);
	    if(data2[num-1].availability=="YES"){
	    	$(".avaliblility-p span").css('color','green');
	    }else{
	    	$(".avaliblility-p span").css('color','red');
	    }

	});


}



$(".store-watch-object").click(function () {
	$(".store-watch-modal-wraper").show();
	$(".store-watch-modal-wraper").addClass("store-watch-modal-wraper-is-visible");
$(".store-watch-modal").addClass("store-watch-modal-is-visible");
});

$(".modal-close-btn").click(function () {
	counterClick = 0;	console.log(counterClick);
	$(".store-watch-modal-wraper").removeClass("store-watch-modal-wraper-is-visible");
$(".store-watch-modal").removeClass("store-watch-modal-is-visible");
});




$("#left-arrow-modal").hover(function() {
	
	$(this).attr('src', 'assets/left-arrow.png');
}, function() {
	
	$(this).attr('src', 'assets/left-arrow-before.png');
});


$("#right-arrow-modal").hover(function() {
	$(this).attr('src', 'assets/right-arrow.png');
}, function() {
	$(this).attr('src', 'assets/right-arrow-before.png');
});







function nextWatch(counter) {
	
		var  cenaPredi, cenaSega, promenenProcent, shipingIf;
		promenenProcent = 100 - data2[counter-1].off;
		cenaSega=data2[counter-1].price;
		cenaPredi = ((cenaSega*100)/promenenProcent).toFixed(0);
		shipingIf = (data2[counter-1].shiping == "Free")? "Free" : "$"+data2[counter-1].shiping;
		
		$("#span-name").text(data2[counter-1].name);
	    $("#span-model").text(data2[counter-1].model);
	    $("#span-price").text("$"+cenaSega);
	    $("#span-off").text(data2[counter-1].off+"% off");
	    $("#span-ori-price").text("$"+cenaPredi);
	    $("#span-shipping").text(shipingIf);
	    $("#span-avalible").text(data2[counter-1].availability);
	    $(".modal-img").attr("src", data2[counter-1].img);
	    $("#span-ar_num").text(data2[counter-1].articule_number); 
	    if(data2[counter-1].availability=="YES"){
	    	$(".avaliblility-p span").css('color','green');
	    }else{
	    	$(".avaliblility-p span").css('color','red');
	    }
}






$("#right-arrow-modal").click(function() {
counterClick++;
console.log(counterClick);
	if (counterClick == 16) {
		counterClick = 1;
	}else nextWatch(counterClick);
});


$("#left-arrow-modal").click(function() {
counterClick--;
console.log(counterClick);
	if(counterClick == 0){
		counterClick += data2.length - 1;
	}else nextWatch(counterClick);
	 



});
$(window).scroll(function  () {
	
		var  wScroll = $(this).scrollTop();
		
			

	
					
	//end of 	$(window).scroll(
});
var ActiculesInCart = new Array;
var ActiculesInCartPrice = new Array;
var AddCartClicker = 0;

$("#to-cart-btn").click(function () {
	
	AddCartClicker++;

	var _priceWith = $("#span-price").text();
	var _price = _priceWith.substring(1, 8);

	var cartPrice = parseInt(_price);
	
	for (var i = 0; i < ActiculesInCartPrice.length; i++) {
	    cartPrice += ActiculesInCartPrice[i] << 0;
	}
		ActiculesInCart.push($("#span-ar_num").text());
		ActiculesInCartPrice.push(parseInt(_price));

	$("#cart-item-count").text(ActiculesInCart.length);
	$("#cart-items-price-sum").text(cartPrice+"$");
		$("#cart-item-count").fadeOut(50).delay( 100 ).fadeIn( 200 );
		$("#cart-items-price-sum").fadeOut(50).delay( 100 ).fadeIn( 200 );
		$(".cart-img").animate({'left':(-10)+'px'},50)
		.animate({'left':(+10)+'px'},50)
		.animate({'left':(-10)+'px'},50)
		.animate({'left':(+20)+'px'},50);
		
    
    

		console.log(ActiculesInCart);
		console.log($("#span-ar_num").text());
		console.log(ActiculesInCartPrice);
		console.log(_price);
});

































// end of doc.ready()
});
var data2 =[
   
   {
      key:'1',
      id:'watch1',
      name:'Versace',
      model:'V-Helix Ivory Dial Leather Ladies Watch',
      img:'assets/watch1.png',
      price:'455',
      off:'23',
      gender:'class_man',
      color:'class_white',
      articule_number:'1342123589',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'2',
      id:'watch2',
      name:'Frederique Constant',
      model:' Classics Silver Dial Men Watch ',
      img:'assets/watch2.png',
      price:'388',
      off:'43',
      gender:'class_man',
      color:'class_brown',
      articule_number:'856235894',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'3',
      id:'watch3',
      name:'Arowatch',
      model:' Ivory Leather Man Watch ',
      img:'assets/watch3.png',
      price:'445',
      off:'35',
      gender:'class_woman',
      color:'class_black',
      articule_number:'7568785963',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'4',
      id:'watch4',
      name:'Technomarine',
      model:' Medusa Chronograph White Dial ',
      img:'assets/watch4.png',
      price:'677',
      off:'35',
      gender:'class_man',
      color:'class_brown',
      articule_number:'475642296',
      shiping:'140',
      availability:'NO'

   },
   {
      key:'5',
      id:'watch5',
      name:'Tissot',
      model:' Classic Tradition Chronograph Men Watch',
      img:'assets/watch5.png',
      price:'242',
      off:'23',
      gender:'class_man',
      color:'class_brown',
      articule_number:'52346342',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'6',
      id:'watch6',
      name:'Tissot',
      model:' Heritage Visodate Automatic Men Watch',
      img:'assets/watch6.png',
      price:'453',
      off:'56',
      gender:'class_woman',
      color:'class_brown',
      articule_number:'5326526',
      shiping:'Free',
      availability:'NO'

   },
   {
      key:'7',
      id:'watch7',
      name:'Tissot',
      model:' Classic Tradition Chronograph Men Watch',
      img:'assets/watch5.png',
      price:'242',
      off:'23',
      gender:'class_man',
      color:'class_brown',
      articule_number:'64373476324',
      shiping:'122',
      availability:'YES'

   },
   {
      key:'8',
      id:'watch8',
      name:'Psjdh',
      model:'fasfhaskjfahkjsf',
      img:'assets/watch.png',
      price:'738',
      off:'29',
      gender:'class_woman',
      color:'class_red',
      articule_number:'43563453',
      shiping:'Free',
      availability:'NO'

   },
   {
      key:'9',
      id:'watch9',
      name:'hhhdsjk',
      model:'ffjashfkja ',
      img:'assets/watch.png',
      price:'878',
      off:'23',
      gender:'class_man',
      color:'class_blue',
      articule_number:'7587422',
      shiping:'123',
      availability:'YES'

   },
   {
      key:'10',
      id:'watch10',
      name:'eyeyey',
      model:'wuqifffasdfa',
      img:'assets/watch.png',
      price:'231',
      off:'22',
      gender:'class_woman',
      color:'class_yellow',
      articule_number:'6436673',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'11',
      id:'watch11',
      name:'rewrwe',
      model:'fdsgfsdgsdgsdg ',
      img:'assets/watch.png',
      price:'554',
      off:'12',
      gender:'class_man',
      color:'class_yellow',
      articule_number:'7774343',
      shiping:'144',
      availability:'YES'

   },
   {
      key:'12',
      id:'watch12',
      name:'fsdfgsdg',
      model:' qwrqwrqwrqwr',
      img:'assets/watch.png',
      price:'644',
      off:'32',
      gender:'class_man',
      color:'class_green',
      articule_number:'7573334',
      shiping:'Free',
      availability:'NO'

   },
   {
      key:'13',
      id:'watch13',
      name:'fggweg',
      model:'rwqrqwrqwrqwrqwr ',
      img:'assets/watch.png',
      price:'664',
      off:'44',
      gender:'class_woman',
      color:'class_blue',
      articule_number:'735783483',
      shiping:'155',
      availability:'YES'

   },
   {
      key:'14',
      id:'watch14',
      name:'sdgsdha',
      model:'wqwrqwrqwrq ',
      img:'assets/watch.png',
      price:'425',
      off:'11',
      gender:'class_man',
      color:'class_red',
      articule_number:'626237627',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'15',
      id:'watch15',
      name:'giuhaf',
      model:' qwreqwrq',
      img:'assets/watch.png',
      price:'117',
      off:'33',
      gender:'class_man',
      color:'class_purple',
      articule_number:'54754235623',
      shiping:'Free',
      availability:'YES'

   },
   {
      key:'16',
      id:'watch16',
      name:'gfwegwegw',
      model:'qwrqgwdgvsgs ',
      img:'assets/watch.png',
      price:'545',
      off:'12',
      gender:'class_woman',
      color:'class_purple',
      articule_number:'346737378',
      shiping:'Free',
      availability:'NO'

   }


];




ReactDOM.render( <Store data={data2}/> , document.getElementById('store-react-father'));





























































