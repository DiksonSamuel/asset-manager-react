import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoList, fetchStockList, deleteAsset, setAssets } from '../store/slices/assetSlice';
import AssetForm from '../components/AssetForm';
import AssetTable from '../components/AssetTable';

const Assets = () => {
  const [openForm, setOpenForm] = useState(false);
  const [currentAsset, setCurrentAsset] = useState(null);

  const dispatch = useDispatch();
  const assets = useSelector(state => state.asset.assets);

  useEffect(() => {
    dispatch(fetchCryptoList());
    dispatch(fetchStockList());
  }, [dispatch]);

  const handleOpenForm = (asset = null) => {
    setCurrentAsset(asset);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setCurrentAsset(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteAsset(id));
  };

  const handleEdit = (asset) => {
    setCurrentAsset(asset);
    setOpenForm(true);
  };

  return (
    <div className="p-8 flex flex-1">
      
      <AssetTable assets={assets} onDelete={handleDelete} onEdit={handleEdit} handleOpenForm={handleOpenForm} />
      <AssetForm open={openForm} onClose={handleCloseForm} asset={currentAsset} />
    </div>
  );
};

export default Assets;
