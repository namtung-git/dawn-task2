import '../assets/css/ItemList.css'
import Item from "./Item"

export default function ItemList(props) {
  const items = props.items.map((item, index) => {
    return (
      <Item content={item} key={index} id={index} onDelete={props.onDelete} />
    );
  });
  return <div className="list-wrapper">{items}</div>;
}
