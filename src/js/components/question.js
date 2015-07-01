var React = require('react/addons');
var _counter = 0;

var Question =
	React.createClass({
		displayName: 'Foobar',
		componentWillMount(a, b) {
			console.log(a, b);
		},
		componentWillReceiveProps:function(nextProps){
			if(nextProps.data){
			}
		},
		renderCheckbox(answer, i) {
			return (
				<span key={i}>
					<input type="checkbox" placeholder={answer.text} value={answer.text}  ref="text"  />{answer.text}
				</span>
			)
		},

		checkboxes() {
			var self = this;
			var checkboxes = [];
			this.props.answers.forEach(function(answer, i){
				console.log(i);
				checkboxes.push(self.renderCheckbox(answer, i));
			})

			return(
				<div>
					{checkboxes}
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
			console.log('render', _counter++)
			console.log(this.props);
			var type = this.props.type || 'checkboxes';
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
