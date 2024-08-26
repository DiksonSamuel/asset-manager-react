import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoList, fetchStockList, deleteAsset, setAssets, calculatePercentageChangeForAssets } from '../store/slices/assetSlice';
import AssetForm from '../components/AssetForm';
import AssetTable from '../components/AssetTable';
import AlertDialog from '../components/AlertDailog';
import Strings from '../utils/strings';
import { CircularProgress } from '@mui/material';

const Assets = () => {
  const [openForm, setOpenForm] = useState(false);
  const [currentAsset, setCurrentAsset] = useState(null);
  const [openDailog, setOpenDailog] = useState(null)

  const dispatch = useDispatch();
  const assets = useSelector(state => state.asset.assets);
  const loader = useSelector(state => state.asset.calculatePercentageLoader);

  // useEffect(() => {
  //   dispatch(fetchCryptoList());
  //   dispatch(fetchStockList());
  // }, [dispatch]);

  useEffect(() => {
    if (assets.length > 0) {
      // Filter only crypto and stock assets
      const assetsToUpdate = assets.filter(asset => asset.type === 'Crypto');

      if (assetsToUpdate.length > 0) {
        dispatch(calculatePercentageChangeForAssets(assetsToUpdate));
      }
    }
  }, [dispatch, assets]);

  const handleOpenForm = (asset = null) => {
    setCurrentAsset(asset);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setCurrentAsset(null);
  };

  const handleDelete = (id) => {
    setOpenDailog(id)
  };

  const handleEdit = (asset) => {
    setCurrentAsset(asset);
    setOpenForm(true);
  };

  if(loader) {
    return(
      <div className="p-8 flex flex-1">
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className="p-8 flex flex-1">

      <AssetTable
        assets={assets}
        onDelete={handleDelete}
        onEdit={handleEdit}
        handleOpenForm={handleOpenForm}
      />
      <AssetForm
        open={openForm}
        onClose={handleCloseForm}
        asset={currentAsset}
      />
      <AlertDialog
        open={openDailog != null}
        handleClose={() => setOpenDailog(null)}
        handleConfirm={() => {
          dispatch(deleteAsset(openDailog))
          setOpenDailog(null)
        }}
        title={Strings.areYouSure}
        description={Strings.assetDeleteConfirmationMessage}
        cancelButton={Strings.cancel}
        confirmButton={Strings.confirm}
        confirmColor='!text-red'
      />
    </div>
  );
};

export default Assets;
