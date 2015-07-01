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

		rendeFormField(type, answer, i) {
			return (
				<span key={i}>
					<input
						type={type}
						placeholder={answer.text}
						value={answer.text}
						ref="text"  />
							{answer.text}
				</span>
			)
		},

		// radio or checbox
		renderFormElement(type) {
			var self = this;
			var formFields = [];
			this.props.answers.forEach(
				(answer, i) => formFields.push(self.rendeFormField(type, answer, i))
			)

			return(
				<div>
					{formFields}
				</div>
			)
		},

		handleSkip(e) {
			e.preventDefault();
			this.props.onQuestionNextPrevious({
				questionNumberToLoad: this.props.id+1
			});
		},

		handlePrevious(e) {
			e.preventDefault();
			this.props.onQuestionNextPrevious({
				questionNumberToLoad: this.props.id-1
			});
		},

		handleSubmit(e) {
			e.preventDefault();
			e.stopPropagation();
		},

		render(){
			console.log('render q', _counter++);
			return (
				<div>
					<h1>{this.props.title}</h1>
					<div>
						<form className="commentForm" onSubmit={this.handleSubmit}>
							{	this.renderFormElement(this.props.type) }
							<input type="submit" value="Post" />
							<input type="button" value="Previous" onClick={this.handlePrevious}/>
							<input type="button" value="Skip" onClick={this.handleSkip}/>
						</form>
					</div>
				</div>
			)
		}
	});

module.exports = Question;
