

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




var FirstName = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-input-wraper">
	        	<label for="f-name-input" className="contact-input-label">{this.props.label}</label>
	        	<input type="text" name="fname" className="contacts-input" placeholder="eg: Georgi" id="f-name-input" />
        	</div>
        )
    }


});

var LastName = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-input-wraper">
	        	<label for="l-name-input" className="contact-input-label">{this.props.label}</label>
        		<input type="text" name="lname" className="contacts-input" placeholder="eg: Dimitranov" id="l-name-input" />
        	</div>
        )
    }


});

var Email = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contacts-form-div-main-parent">
	        	<label for="email-input" className="contact-input-label">{this.props.label}</label>
        		<input type="email" name="lname" className="contacts-input" placeholder="eg: g_dimitranov@abv.bg" id="email-input" />
        	</div>
        )
    }


});





var MesageForm = React.createClass({ 

 render : function() {
       
        return (
        	<div >
        		<FirstName label="First Name" />
		        	<FirstName label="First Name" />
		        	<LastName label="Last Name" />
		        
        	</div>
        )
    }


});







ReactDOM.render(<MesageForm />,document.getElementById('testdivreact'));


*/