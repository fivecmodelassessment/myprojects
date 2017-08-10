
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
	

	renderAll:function() {
		const data = this.props.data;

				const dataList = data.map(watch=>{
					return(
							<figure key={watch.key} id={watch.id} className={"store-watch-object" + ' ' + watch.gender + ' ' + watch.color}><img src={watch.img} className="store-fiure-img "/>
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





var Store = React.createClass({ 

	SortMan:function () {
			
	},




	render : function() {
		
				return (

		       		<div className="store-app-all-wraper">
					<div className="store-filters-wraper">
						<p className="store-results-and-filter-title-p">Filters</p>
						<button onClick={this.SortMan} id="manButton" className="store-filter-apply-button">Man</button>
						<button onClick={this.SortWoman} id="womanButton" className="store-filter-apply-button">Woman</button>
						<Clicker clickTest={this.ClickTestFUN}/>
						<button onClick={this.SortMan} id="brightButton" className="store-filter-apply-button">Bright</button>
						<button onClick={this.SortWoman} id="darkButton" className="store-filter-apply-button">Dark</button>


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
		
		$("#manButton").click(function () {
			
			$(".store-watch-object").addClass("store-filter-transition");
			
			setTimeout(function () {
				$(".class_man").removeClass("store-filter-transition");
			},300);
		});
		$("#womanButton").click(function () {
			
			$(".store-watch-object").addClass("store-filter-transition");
			
			setTimeout(function () {
				$(".class_woman").removeClass("store-filter-transition");
			},300);
		});
		$("#brightButton").click(function () {
			
			$(".store-watch-object").addClass("store-filter-transition");
			
			setTimeout(function () {
				$(".class_bright").removeClass("store-filter-transition");
			},300);
		});
		$("#darkButton").click(function () {
			
			$(".store-watch-object").addClass("store-filter-transition");
			
			setTimeout(function () {
				$(".class_dark").removeClass("store-filter-transition");
			},300);
		});

		
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
      color:'class_bright'

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
      color:'class_bright'
   },
   {
      key:'3',
      id:'watch3',
      name:'Arowatch',
      model:' Ivory Leather Man Watch ',
      img:'assets/watch3.png',
      price:'345',
      off:'35',
      gender:'class_woman',
      color:'class_dark'
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
      color:'class_dark'
   },
   {
      key:'5',
      id:'watch5',
      name:'Tissot',
      model:' Classic Tradition Chronograph Men Watch',
      img:'assets/watch5.png',
      price:'342',
      off:'23',
      gender:'class_man',
      color:'class_dark'
   },
   {
      key:'6',
      id:'watch6',
      name:'Tissot',
      model:' Heritage Visodate Automatic Men Watch',
      img:'assets/watch6.png',
      price:'353',
      off:'56',
      gender:'class_woman',
      color:'class_bright'
   },
   {
      key:'7',
      id:'watch7',
      name:'Tissot',
      model:' Classic Tradition Chronograph Men Watch',
      img:'assets/watch5.png',
      price:'342',
      off:'23',
      gender:'class_woman',
      color:'class_bright'
   }
];




ReactDOM.render( <Store data={data2}/> , document.getElementById('store-react-father'));





























































