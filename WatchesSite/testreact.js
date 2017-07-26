

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


var MainFatherDiv = React.createClass({ 

 render : function() {
       var rand = Math.floor(Math.random() * 10) + 1;
       
var imageAsste = (rand>5) ? "image-letter.png" : "image-letter-2.png";

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
        				f
        			</div>
		        
        	</div>
        )
    }


});








ReactDOM.render(<MainFatherDiv />,document.getElementById('testdivreact'));

