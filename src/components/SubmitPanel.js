import React from "react";
import "../assets/css/SubmitPanel.css";
import AddForm from "./AddForm";
import ItemList from "./ItemList";
import Button from "@material-ui/core/Button";

class SubmitPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      submitted: false,
    };

    //Biding event handlers
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAdd(q) {
    this.setState({ questions: [...this.state.questions, q],
                    submitted: false });
  }

  handleDelete(index) {
    const newArr = [...this.state.questions];
    newArr.splice(index, 1);
    this.setState({ questions: newArr });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.questions.length === 0) {
      this.setState({ submitted: false });
    }
    else {
      this.setState({ submitted: true });
    }
    this.props.onPanelSubmit(this.state.questions);
    this.setState({ questions: [] });
  }



  render() {
    return (
      <div>
        <p>Enter your questions:</p>
        <ItemList items={this.state.questions} onDelete={this.handleDelete} />
        <AddForm onFormAdd={this.handleAdd} />
        <div className="submit-btn">
          <Button variant="contained" color={this.state.submitted ? "primary" : "default"} onClick={this.handleSubmit}>
            {this.state.submitted ? "Submitted!" : "Submit"}
          </Button>
        </div>
      </div>
    );
  }
}

export default SubmitPanel;
