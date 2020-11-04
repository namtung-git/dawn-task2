import Button from "@material-ui/core/Button";
import "../assets/css/DisplayPanel.css";

export default function DisplayPanel(props) {
    
  const questions = props.questions.map((question, index) => {
    return (
      <div key={index} id={index} className="item">
        {question}
      </div>
    );
  });

  function handleClick(e) {
    e.preventDefault();
    props.onChange(e, 1);
  }

  return (
    <div>
      <p>
        <span className="misc">Answer Status</span>
        <span>Asked Questions</span>
      </p>
      <div className="wrapper">{questions}</div>
      <div className="submit">
        <Button variant="contained" onClick={handleClick}>Submit a Question</Button>
      </div>
    </div>
  );
}
