var React = require('react/addons');
var Question = require('../components/question');
var $ = require('jQuery');
var jquery = $;
$.mockjax = require('jquery-mockjax')($, window);

var ReactedApp =
	React.createClass({
		displayName: 'Foobar',
		componentWillMount(a, b) {
			console.log('will mount props', this.props);
		},

		componentDidMount() {
			console.log('did mount props', this.props);
		},

		componentWillReceiveProps(nextProps){
		},

		getInitialState: function() {
			return {
				questionNumber: 0
			}
		},

		handleQuestionSkip(params) {
			console.log(params)
			this.loadNextQuestion()
		},

		loadNextQuestion() {
			var qN = this.state.questionNumber
			if (qN <= this.props.questionsArr.length - 2) {
				this.setState({questionNumber: qN+1});
			}
		},

		handleLoadNextPrevious(params) {
			var qN = this.state.questionNumber

			// load next
			if ((this.state.questionNumber < params.questionNumberToLoad) &&
				  (qN > this.props.questionsArr.length - 2)) {
					return
			}

			//load prev
			if ((this.state.questionNumber > params.questionNumberToLoad) &&
				  (qN <= 0)) {
					return
			}

			this.setState({questionNumber: params.questionNumberToLoad});
		},

		render(){
			var q = this.props.questionsArr[this.state.questionNumber];
			return (
				<div>
					<Question
						id={this.state.questionNumber}
						onQuestionNextPrevious={this.handleLoadNextPrevious}
						title={q.title}
						type={q.type}
						answers={q.answers}/>,
				</div>
			)
		}
	});

module.exports = ReactedApp;


// init
$.mockjax({
	url: '/results-api',
	responseTime: 200,
	proxy: '/data/questions.json'
});

// load questions
$.ajax({
	url: '/results-api',
	type: 'GET',
	dataType: 'json'
}).success(function(data){
	if (!data.questions) {
		return
	}
	React.render(
		<ReactedApp target="foobar" questionsArr={data.questions} />,
		document.getElementById('reactapp'))
}).error(function(e, f, g){
	console.log('Something went wrong when fetching questions', e, f, g)
})
