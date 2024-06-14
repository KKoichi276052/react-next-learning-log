import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function List({ item }) {
  const { product, quantity, packed } = item;
  return (
    <li className="flex items-center">
      <div className="	">
        <span>{quantity}</span>
        <p>{product}</p>
      </div>
      <div className="">
        <Button variant="outlined" color="success" startIcon={<DeleteIcon />}>
          Packed
        </Button>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
    </li>
  );
}
