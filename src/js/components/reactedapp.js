var React = require('react/addons');
var Question = require('../components/question');
var $ = require('jQuery');
// var mockjax = require('jquery.mockjax')($);


var ReactedApp =
	React.createClass({
		displayName: 'Foobar',
		componentWillMount: function(a, b) {
			console.log(a, b);
		},
		componentWillReceiveProps:function(nextProps){
			if(nextProps.data){
				this.renderChart(nextProps.data)
			}
		},
		renderChart(dataset){
			// d3.select('#' + this.props.target).selectAll('div')
		  //   .data(dataset)
		  //   .enter()
		  //   .append('div')
		  //   .attr('class', 'bar')
		  //   .style('height', function (d) {
		  //     return d.val * 5 + 'px';
		  //   });
			console.log('dataset');
		},
		handleQuestionSkip(params) {
			console.log(params)
			this.loadNextQuestion()
		},

		loadNextQuestion() {
			jquery.mockjax({
				url: '/results-api',
				responseTime: 200,
				proxy: '/data/results.json'
			});
		},

		render(){
			return (
				<div id="hey">
					<Question
						onQuestionSkip={this.handleQuestionSkip}
						title="Question number one"
						type="checkboxes"
						answers={[
							{text: 'I have a bike'},
							{text: 'I have a car'}
						]}/>,
				</div>
			)
		}
	});

module.exports = ReactedApp;

React.render(
  	<ReactedApp target="foobar" />,
  	document.getElementById('reactapp'))
