import React, { useState, useEffect } from 'react';
import { Drawer, TextField, Button, MenuItem, Select, InputLabel, FormControl, IconButton, InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addAsset, editAsset } from '../store/slices/assetSlice';
import CloseIcon from '@mui/icons-material/Close';
import { cryptoListData, stockListData } from '../configs/dummData';

const AssetForm = ({ open, onClose, asset }) => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    id: '',
    type: 'Crypto',
    name: '',
    price: '',
    quantity: '',
    dateOfPurchase: '',
    percentageChange: 0,
  });

  useEffect(() => {
    if (asset) {
      setFormState(asset);
    } else {
      setFormState({
        id: '',
        type: 'Crypto',
        name: '',
        price: '',
        quantity: '',
        dateOfPurchase: '',
        percentageChange: 0,
      });
    }
  }, [asset]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (asset) {
      dispatch(editAsset(formState));
    } else {
      dispatch(addAsset({ ...formState, id: new Date().toISOString() }));
    }
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="p-4 w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <h2>{asset ? 'Edit Asset' : 'Add Asset'}</h2>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className='w-full'>
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            value={formState.type}
            onChange={handleChange}
            className='!w-full'
          >
            <MenuItem value="Crypto">Crypto</MenuItem>
            <MenuItem value="Stocks">Stocks</MenuItem>
            <MenuItem value="Bond">Bond</MenuItem>
          </Select>
        </div>
        {formState.type !== 'Bond' && (
          <div className='w-full mt-[10px]'>
            <InputLabel>Name</InputLabel>
            <Select
              name="name"
              value={formState.name}
              onChange={handleChange}
              className='!w-full'
            >
              {formState.type === 'Crypto' && cryptoListData.map(crypto => (
                <MenuItem key={crypto.id} value={crypto.id}>{crypto.name}</MenuItem>
              ))}
              {formState.type === 'Stocks' && stockListData.map(stock => (
                <MenuItem key={stock.symbol} value={stock.symbol}>{stock.name}</MenuItem>
              ))}
            </Select>
          </div>
        )}
        {formState.type === 'Bond' && (
          <TextField
          name="name"
          label="Name"
          value={formState.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        )}
        <TextField
          name="price"
          label="Total Price"
          type="number"
          value={formState.price}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {formState.type !== 'Bond' &&<TextField
          name="quantity"
          label="Quantity"
          type="number"
          value={formState.quantity}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />}
        <TextField
          name="dateOfPurchase"
          label="Date of Purchase"
          type="date"
          value={formState.dateOfPurchase}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        
        <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
          {asset ? 'Update' : 'Add'}
        </Button>
      </div>
    </Drawer>
  );
};

export default AssetForm;
