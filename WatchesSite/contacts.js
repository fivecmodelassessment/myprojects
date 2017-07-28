var btns  = React.createClass({



render: function () {
	return (
		<div>
			<button>first btn</button>
			<button>sec btn</button>
			<button>tird btn</button>
		</div>

		)
	
}

});

var input  = React.createClass({



render: function () {
	return (
		<div>
			<btns />
			<input type="text" />
			
		</div>

		)
	
}

});


ReactDOM.render(<input/>,document.getElementById('reactDiv'));