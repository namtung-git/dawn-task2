import React from "react";
import "../assets/css/AddForm.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/AddCircle";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "", isFormVisible: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.term === "") return;
    this.props.onFormAdd(this.state.term);
    this.setState((state) => ({
      term: "",
      isFormVisible: !state.isFormVisible,
    }));
  }

  handleClick() {
    this.setState((state) => ({
      isFormVisible: !state.isFormVisible,
    }));
  }

  render() {
    return (
      <div>
        {this.state.isFormVisible ? (
          <form onSubmit={this.handleSubmit} className="add-form">
            <textarea
              row="4"
              className="textarea"
              placeholder="Ask something..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button className="add-btn" onClick={this.handleSubmit}>
              Add
            </button>
            <button className="exit-btn" onClick={this.handleClick}>X</button>
          </form>
        ) : (
          <div className="prompt">
            <h4 className="prompt-text">Add another question</h4>
            <IconButton onClick={this.handleClick}>
              <AddIcon fontSize="large" />
            </IconButton>
          </div>
        )}
      </div>
    );
  }
}

export default AddForm;
