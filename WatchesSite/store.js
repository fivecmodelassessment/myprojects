
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

var Clicker = React.createClass({



render:function () {
	return <button className="store-filter-apply-button" onClick={this.props.clickTest}>Click4Test</button>
}

});




var List = React.createClass({
	clickEring:function () {
		console.log("ffasfsafas");	
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
						<label className="">From:<input type="number" className="filters-price-input" id="filter_from_input"/></label>
						<label className="">To:<input type="number" className="filters-price-input" id="filter_to_input"/></label>
					</div>

			</div>
			)
	}
});



var Store = React.createClass({ 

	




	render : function() {
		
				return (

		       		<div className="store-app-all-wraper">
					<div className="store-filters-wraper">
						<p className="store-results-and-filter-title-p">Filters</p>
						<Filters/>
						
					</div>

		        	<div className="store-articules-wraper">
			        	<p className="store-results-and-filter-title-p">Results <span className="store-results-and-filter-title-p">fdf</span></p>
			        	<List data={this.props.data}/>
			        </div>
			        </div>
		        )
	}


});

$(document).ready(function () {
	$("#manButton,#womanButton,#brightButton,#darkButton").hide();



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
      color:'class_white'

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
      color:'class_brown'
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
      color:'class_black'
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
      color:'class_brown'
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
      color:'class_brown'
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
      color:'class_brown'
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
      color:'class_brown'
   },
   {
      key:'8',
      id:'watch',
      name:'Psjdh',
      model:'fasfhaskjfahkjsf',
      img:'assets/watch.png',
      price:'738',
      off:'29',
      gender:'class_woman',
      color:'class_red'
   },
   {
      key:'9',
      id:'watch',
      name:'hhhdsjk',
      model:'ffjashfkja ',
      img:'assets/watch.png',
      price:'878',
      off:'23',
      gender:'class_man',
      color:'class_blue'
   },
   {
      key:'10',
      id:'watch',
      name:'eyeyey',
      model:'wuqifffasdfa',
      img:'assets/watch.png',
      price:'231',
      off:'22',
      gender:'class_woman',
      color:'class_yellow'
   },
   {
      key:'11',
      id:'watch',
      name:'rewrwe',
      model:'fdsgfsdgsdgsdg ',
      img:'assets/watch.png',
      price:'554',
      off:'12',
      gender:'class_man',
      color:'class_yellow'
   },
   {
      key:'12',
      id:'watch',
      name:'fsdfgsdg',
      model:' qwrqwrqwrqwr',
      img:'assets/watch.png',
      price:'644',
      off:'32',
      gender:'class_man',
      color:'class_green'
   },
   {
      key:'13',
      id:'watch',
      name:'fggweg',
      model:'rwqrqwrqwrqwrqwr ',
      img:'assets/watch.png',
      price:'664',
      off:'44',
      gender:'class_woman',
      color:'class_blue'
   },
   {
      key:'14',
      id:'watch',
      name:'sdgsdha',
      model:'wqwrqwrqwrq ',
      img:'assets/watch.png',
      price:'425',
      off:'11',
      gender:'class_man',
      color:'class_red'
   },
   {
      key:'15',
      id:'watch',
      name:'giuhaf',
      model:' qwreqwrq',
      img:'assets/watch.png',
      price:'117',
      off:'33',
      gender:'class_man',
      color:'class_purple'
   },
   {
      key:'16',
      id:'watch',
      name:'gfwegwegw',
      model:'qwrqgwdgvsgs ',
      img:'assets/watch.png',
      price:'545',
      off:'12',
      gender:'class_woman',
      color:'class_purple'
   }


];




ReactDOM.render( <Store data={data2}/> , document.getElementById('store-react-father'));





























































