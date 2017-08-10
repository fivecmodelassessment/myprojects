var List = React.createClass({
	

	renderAll:function() {
		const data = this.props.data;

				const dataList = data.map(watch=>{
					return(
							<figure key={watch.key} id={watch.id} className="store-watch-object"><img src={watch.img} className="store-fiure-img "/>
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

export default List;