

/*

var ForTest = React.createClass({ 
 
 render : function() {
       
        return (

        				        	<div>
	        		<button>{this.props.val}</button>
	        		<a href="#">{this.props.title}</a>
        	 </div>
        )
    }


});


var ContactForm = React.createClass({ 

 render : function() {
       
        return (
        	<div>
        		<p>{this.props.title}</p>
        			<ForTest title= {this.props.title} val="1"/>
	        		<ForTest title= {this.props.title} val="2"/>
	        		<ForTest  title= {this.props.title} val="3"/>
	        </div>
        	
        )
    }


});



ReactDOM.render(<ContactForm title="button"/>,document.getElementById('testdivreact'));

*/





var Headings = React.createClass({

render:function () {
	return (<p className="contacts-send-us-msg">{this.props.heading}</p>)
}
	 	



});

var FirstName = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-input-wraper">
	        	<label for="f-name-input" className="contact-input-label">{this.props.label}</label>
	        	<input type="text" name="fname" className="contacts-input" placeholder="Georgi" id="f-name-input" />
        	</div>
        )
    }


});

var LastName = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-input-wraper">
	        	<label for="l-name-input" className="contact-input-label">{this.props.label}</label>
        		<input type="text" name="lname" className="contacts-input" placeholder="Dimitranov" id="l-name-input" />
        	</div>
        )
    }


});

var Email = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-input-wraper">
	        	<label for="email-input" className="contact-input-label">{this.props.label}</label>
        		<input type="email" name="email" className="contacts-input" placeholder=" example@gmail.com" id="email-input" />
        	</div>
        )
    }


});

var EmailConfirm = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-input-wraper">
	        	<label for="email-input" className="contact-input-label">{this.props.label}</label>
        		<input type="email" name="email-conf" className="contacts-input" placeholder="Confirm e-mail" id="email-input-conf" />
        	</div>
        )
    }


});

var TextAreaMSG = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-textarea-wraper">
	        	<label for="msg-input" className="contact-input-label">{this.props.label}</label>
        		<textarea className="contacts-textarea-field" placeholder="Message here..."/>  
        	</div>
        )
    }


});


var SubmitInfoBtn = React.createClass({ 

 render : function() {
       
        return (
        	<input type="submit" value="Send" className="contacts-submit-btn"/>
        )
    }


});



var RowDiv1 = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contacts-row-div">
        			<FirstName label="First Name" />
		        	<LastName label="Last Name" />
		        
        	</div>
        )
    }


});


var RowDiv2 = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contacts-row-div">
        			<Email label="E-mail" />
		        	<EmailConfirm label="Confirm E-mail" />
		        
        	</div>
        )
    }


});


var RowDiv3 = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contacts-row-div contact-msg-row-3">
        			
        			<TextAreaMSG label="Your message" />
		        	
		        
        	</div>
        )
    }


});


var RowDiv4 = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contacts-row-div contacts-row-submit-butn" >
        			
        			<SubmitInfoBtn  />
		        	
		        
        	</div>
        )
    }


});


//spisus s contakti
var Country = React.createClass({
    render:function () {
        return(
            <div className="contacts-table-row-td-div">
                <img src={this.props.src} className="contacts-table-img"/>
                <p className="contacts-table-row-text">{this.props.countryname}</p>
            </div>
            )
    }
});


var Location = React.createClass({
    render:function () {
        return(
            <div className="contacts-table-row-td-div">
                <img src="assets/locationicon.png" className="contacts-table-img"/>
                <p className="contacts-table-row-text">{this.props.addres}</p>
            </div>
            )
    }
});

var PhoneNumber = React.createClass({
    render:function () {
        return(
            <div className="contacts-table-row-td-div">
                <img src="assets/callphone.png" className="contacts-table-img"/>
                <p className="contacts-table-row-text">{this.props.phone}</p>
            </div>
            )
    }
});



var TableHeading = React.createClass({
    render:function () {
        return(
            
            <tr className="contacts-table-heading">
                <td>
                    <p className="contact-table-th-p">Country</p>
                </td>
                <td>
                  <p className="contact-table-th-p">Adress</p>
                </td>
                <td>
                   <p className="contact-table-th-p">Phone</p>
                </td>
            </tr>
            
            )
    }
});

var TableRow = React.createClass({
    render:function () {
        return(
            
            <tr className="contacts-table-row">
                <td>
                    <Country countryname={this.props.countryname} src={this.props.src}/>
                </td>
                <td>
                   <Location addres={this.props.addres}/>
                </td>
                <td>
                    <PhoneNumber phone={this.props.phone}/>
                </td>
            </tr>
            
            )
    }
});




var Table = React.createClass({
    render:function () {
        return(
            <table className="contact-table">
                <TableHeading/>
                <TableRow   src={this.props.data.flag.flag1}
                            countryname={this.props.data.country.country1} 
                            phone={this.props.data.phone.phone1}
                            addres={this.props.data.location.location1} 

                            />
                <TableRow   src={this.props.data.flag.flag2}
                            countryname={this.props.data.country.country2} 
                            phone={this.props.data.phone.phone2}
                            addres={this.props.data.location.location2} 

                            />
                <TableRow   src={this.props.data.flag.flag2}
                            countryname={this.props.data.country.country2} 
                            phone={this.props.data.phone.phone2}
                            addres={this.props.data.location.location2} 

                            />
                <TableRow   src={this.props.data.flag.flag3}
                            countryname={this.props.data.country.country3} 
                            phone={this.props.data.phone.phone3}
                            addres={this.props.data.location.location3} 

                            />
                 <TableRow   src={this.props.data.flag.flag4}
                            countryname={this.props.data.country.country4} 
                            phone={this.props.data.phone.phone4}
                            addres={this.props.data.location.location4} 

                            />
            </table>
            )
    }
});





//krai na spisuka s kontakci

var MainFatherDiv = React.createClass({ 

     render : function() {
           var rand = Math.floor(Math.random() * 10) + 1;
           
    var imageAsste = (rand>5) ? "image-letter.png" : "image-letter-2.png";

    //funkciq za avtomatichno izvejdane na danni vuv contact-location-and-phones-wraper .. {this.function}

            return (
            	<div>
            			<Headings heading="Send us a message"/>
    	        		<div className="contact-form-and-img-wraper">
    	        			<form className="contacts-father-div">
    	        			<RowDiv1/>
    	        			<RowDiv2/>
    	        			<RowDiv3/>
    	        			<RowDiv4/>
    	        			</form>
    	        			<div className="contact-gif-wraper">
    	        				<img src={"assets/" + imageAsste } className="contact-gif"/>
    	        			</div>
    	        		</div>

            			<Headings heading="Find or Call us"/>
            			<div className="contact-location-and-phones-wraper">
            				
                            <Table data={this.props.data} />
                                

            			</div>
    		        
            	</div>
            )
        }


});




var DATA = { 


flag: { 
        flag1:'assets/flags/bulg.png',
        flag2:'assets/flags/germ.png',
        flag3:'assets/flags/belg.png',
        flag4:'assets/flags/ital.png'
                }, 


country: { 
        country1:'Bulgaria     ',
        country2:'Germany    ',
        country3:'Belgum     ',
        country4:'Italy     '
                }  , 


location: { 
        location1:'Plovdiv str"Jelezarska" 18',
        location2:'ffffff',
        location3:'sssss',
        location4:'sdddddd'
                }  ,


 phone: { 
        phone1:'+359/ 889 190 860',
        phone2:'+49/022 453 1225',
        phone3:'+74/993 783 7284',
        phone4:'+234/ 748 739 003'
                }  

};



ReactDOM.render(<MainFatherDiv data={DATA}/>,document.getElementById('testdivreact'));



/*

class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span> ;
        
      
     
      
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
     
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }      rows.push(<ProductRow product={product} key={product.name} /> );

      lastCategory = product.category;
    


    });
    
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 6'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 



ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('testdivreact')
);


*/

