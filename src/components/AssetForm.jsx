import React, { useState, useEffect } from 'react';
import { Drawer, TextField, Button, MenuItem, Select, InputLabel, IconButton, InputAdornment, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addAsset, editAsset } from '../store/slices/assetSlice';
import CloseIcon from '@mui/icons-material/Close';
import { assetInitData, cryptoListData, stockListData } from '../configs/dummyData';
import Strings from '../utils/strings';

const AssetForm = ({ open, onClose, asset }) => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState(assetInitData);
  const [error, setError] = useState(0)

  useEffect(() => {
    if (asset) {
      setFormState(asset);
    } else {
      setFormState(assetInitData);
      setError(0)
    }
  }, [asset, open]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if(formState.name.length === 0 || formState.price.length === 0 || (formState.type !== 'Bond' && formState.quantity.length === 0) || formState.dateOfPurchase.length === 0) {
      setError(1);
      return;
    }

    

    if (asset) {
      dispatch(editAsset(formState));
    } else {
      const newAsset = {
        ...formState,
        id: new Date(), // Set the computed asset ID
      };
      dispatch(addAsset(newAsset));
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

        {/* Asset Type Dropdown */}
        <div className='w-full'>
          <InputLabel>{Strings.type}</InputLabel>
          <Select
            name="type"
            value={formState.type}
            onChange={handleChange}
            className='!w-full'
          >
            <MenuItem value="Crypto">{Strings.crypto}</MenuItem>
            <MenuItem value="Stocks">{Strings.stocks}</MenuItem>
            <MenuItem value="Bond">{Strings.bond}</MenuItem>
          </Select>
        </div>

        {formState.type !== 'Bond' && (
          <div className='w-full mt-[10px]'>
            <InputLabel>{Strings.name}</InputLabel>
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
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        {formState.type !== 'Bond' && (
          <TextField
            name="quantity"
            label="Quantity"
            type="number"
            value={formState.quantity}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        )}

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
        {error === 1 && <Typography color={'red'} paddingY={2}>{Strings.completeAllFields}</Typography>}

        <Button className='!mt-[20px] h-[45px]' onClick={handleSubmit} variant="contained" color="primary" fullWidth>
          {asset ? 'Update' : 'Add'}
        </Button>
      </div>
    </Drawer>
  );
};

export default AssetForm;
