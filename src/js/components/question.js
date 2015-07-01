var React = require('react/addons');
var _counter = 0;

var Question =
	React.createClass({
		displayName: 'Question View',
		componentWillMount() {
		},

		componentWillReceiveProps(nextProps){
			console.warn('q will receive props', nextProps);
		},

		renderCheckbox(answer, i) {
			return (
				<span key={i}>
					<input type="checkbox" placeholder={answer.text} value={answer.text}  ref="text"  />{answer.text}
				</span>
			)
		},

		renderRadiobutton(answer, i) {
			return (
				<span key={i}>
					<input type="radio" placeholder={answer.text} value={answer.text} ref="text"  />{answer.text}
				</span>
			)
		},

		checkbox() {
			var self = this;
			var checkboxes = [];
			this.props.answers.forEach(
				(answer, i) => checkboxes.push(self.renderCheckbox(answer, i))
			)

			return(
				<div>
					{checkboxes}
				</div>
			)
		},

		radio() {
			var self = this;
			var radiobuttons = [];
			this.props.answers.forEach(
				(answer, i) => radiobuttons.push(self.renderRadiobutton(answer, i))
			)

			return(
				<div>
					{radiobuttons}
				</div>
			)
		},

		handleSkip(e) {
			e.preventDefault();
			this.props.onQuestionSkip({author: 'Agata', text: this.props.title});
		},

		handleSubmit(e) {
			e.preventDefault();
			e.stopPropagation();
		},

		render(){
			var type = this.props.type || 'checkboxes';
			console.log('render q', _counter++);
			return (
				<div>
					<h1>{this.props.title}</h1>
					<div>
						<form className="commentForm" onSubmit={this.handleSubmit}>
							{	this[type]() }
							<input type="submit" value="Post" />
							<input type="button" value="Skip" onClick={this.handleSkip}/>
						</form>
					</div>
				</div>
			)
		}
	});

module.exports = Question;
