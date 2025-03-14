import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const IconButton = () => {
  return (
    <Button variant={'outlined'} startIcon={<DeleteIcon />}>
      Delete
    </Button>
  );
};
