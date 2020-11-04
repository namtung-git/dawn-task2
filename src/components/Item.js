import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import '../assets/css/Item.css'

export default function Item(props) {
  return (
    <div className="list-item">
      <IconButton size="small" onClick={() => {props.onDelete(props.id)}} aria-label="delete" >
        <CloseIcon />
      </IconButton>      
      <div className="content">
        {props.content}
      </div> 
    </div>
  );
}
