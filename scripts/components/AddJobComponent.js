var React = require('react');
var JobTipsComponent = require('./JobTipsComponent.js');
var JobFormComponent = require('./JobFormComponent.js');
var NavigationComponent = require('./NavigationComponent.js');

module.exports = React.createClass({
	render: function(){
		return(
			<div>
				<NavigationComponent / >,
				<JobTipsComponent / >,
				<JobFormComponent / >,

				
				
			</div>
		);
	}
});