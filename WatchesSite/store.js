
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

var FirstName = React.createClass({ 

render : function() {


const data = this.props.data;

const dataList = data.map(watch=>{
	return(
			<figure className="store-watch-object"><img src={watch.img} className="store-fiure-img "/>
				    <figcaption className="store-title-figure"><strong>{watch.name}</strong> {watch.model}</figcaption>
				    <figcaption className="store-price-figure">Price:<strong> {watch.price}$</strong><span> {watch.off}% OFF</span></figcaption>
			</figure>
			
	)
	//console.log(object.name , object.age);

})



       return (

       		<div className="store-app-all-wraper">
<div className="store-filters-wraper">fsafaf</div>

        	<div className="store-articules-wraper">
	        	{dataList}
	        </div>
	        </div>
        )
    }


});
/*

















var DATA1 = { 



flag: { 
        flag1:'assets/flags/bulg.png',
        flag2:'assets/flags/germ.png',
        flag3:'assets/flags/belg.png',
        flag4:'assets/flags/ital.png',
        flag5:'',
        flag6:''
                }, 


country: { 
        country1:'Bulgaria',
        country2:'Germany',
        country3:'Belgium',
        country4:'Italy',
        country5:'Belgium',
        country6:'Italy'
                }  , 


location: { 
        location1:'Plovdiv, 18 Jelezarska Str.',
        location2:'Frankfurt, 13 Münchener Str.',
        location3:'Dortmund, 3 Kleppingstraße Str.',
        location4:'Brussels, Grand-Place',
        location5:'Rome, 4 Via Sistina ',
        location6:'Sofia, Vitosha bul.'
                }  ,


 phone: { 
        phone1:'+359/ 889 190 860',
        phone2:'+49/022 453 1225',
        phone3:'+49/034 532 3328',
        phone4:'+74/993 783 7284',
        phone5:'+234/ 748 739 003',
        phone6:'+359/ 998 344 533'

                }
<figure class="figures fig1"><img src="assets/watch1.png" class="watches watch1">
                    <figcaption class="title-figure"><strong>Versace</strong> V-Helix Ivory Dial Leather Ladies Watch </figcaption>
                    <figcaption class="price-figure">Price: 399$ <span><strong>30% OFF</strong></span>
                    </figcaption>
                </figure>
                <figure class="figures fig2"><img src="assets/watch2.png" class="watches watch2">
                    <figcaption class="title-figure"><strong>Frederique Constant</strong> Classics Silver Dial Men's Watch  </figcaption>
                    <figcaption class="price-figure">Price: 679$ <span><strong>35% OFF</strong></span>
                    </figcaption>
                </figure>
                <figure class="figures fig3"><img src="assets/watch3.png" class="watches watch3">
                    <figcaption class="title-figure"><strong>Arowatch</strong> Ivory Leather Man Watch </figcaption>
                    <figcaption class="price-figure">Price: 788$ <span><strong>45% OFF</strong></span>
                    </figcaption>
                </figure>

                <figure class="figures fig4"><img src="assets/watch4.png" class="watches watch4">
                    <figcaption class="title-figure"><strong>Technomarine</strong> Medusa Chronograph White Dial </figcaption>
                    <figcaption class="price-figure">Price: 299$ <span><strong>20% OFF</strong></span>
                    </figcaption>
                </figure>
                <figure class="figures fig5"><img src="assets/watch5.png" class="watches watch5">
                    <figcaption class="title-figure"><strong>Tissot</strong> Classic Tradition Chronograph Men's Watch </figcaption>
                    <figcaption class="price-figure">Price: 366$ <span><strong>55% OFF</strong></span>
                    </figcaption>
                </figure>
                <figure class="figures fig6"><img src="assets/watch6.png" class="watches watch6">
                    <figcaption class="title-figure"><strong>Tissot</strong> Heritage Visodate Automatic Men's Watch </figcaption>
                    <figcaption class="price-figure">Price: 577$ <span><strong>64% OFF</strong></span>
                    </figcaption>
                </figure>
{name:'', model:'', img:'', price:'646', off:'33'},
{name:'', model:'', img:'', price:'545', off:'16'},
{name:'', model:'', img:'', price:'126', off:'43'},
{name:'', model:'', img:'', price:'644', off:'53'},
{name:'', model:'', img:'', price:'244', off:'23'},
{name:'', model:'', img:'', price:'122', off:'12'},
{name:'', model:'', img:'', price:'344', off:'42'},
{name:'', model:'', img:'', price:'563', off:'54'}

};*/
var data2 = [
{name:'Versace', model:'V-Helix Ivory Dial Leather Ladies Watch', img:'assets/watch1.png', price:'455', off:'23'},
{name:'Frederique Constant', model:' Classics Silver Dial Men Watch ', img:'assets/watch2.png', price:'388', off:'43'},
{name:'Arowatch', model:' Ivory Leather Man Watch ', img:'assets/watch3.png', price:'345', off:'35'},
{name:'Technomarine', model:' Medusa Chronograph White Dial ', img:'assets/watch4.png', price:'677', off:'35'},
{name:'Tissot', model:' Classic Tradition Chronograph Men Watch', img:'assets/watch5.png', price:'342', off:'23'},
{name:'Tissot', model:' Heritage Visodate Automatic Men Watch', img:'assets/watch6.png', price:'353', off:'56'}

];



ReactDOM.render( <FirstName data={data2}/> , document.getElementById('store-react-father'));





/*
construkciq na figure 

<figure class="figures fig1"><img src="assets/watch1.png" class="watches watch1">
    <figcaption class="title-figure"><strong>Versace</strong> V-Helix Ivory Dial Leather Ladies Watch </figcaption>
    <figcaption class="price-figure">Price: 399$ <span><strong>30% OFF</strong></span>
    </figcaption>
</figure>


*/




























































