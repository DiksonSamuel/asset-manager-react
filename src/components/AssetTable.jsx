import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField, Button, IconButton } from '@mui/material';
import { ArrowDownward, ArrowUpward, Delete, Edit } from '@mui/icons-material';
import Strings from '../utils/strings';

const AssetTable = ({ assets, onDelete, onEdit, handleOpenForm }) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tableList, setTableList] = useState([]);

  useEffect(() => {
    const filteredAssets = assets.filter(asset =>
      asset.name.toLowerCase().includes(search.toLowerCase())
    );

    const paginatedAssets = filteredAssets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    setTableList(paginatedAssets);
  }, [assets, search, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="w-full px-4 py-[0px]">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4">
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 sm:mb-0 w-full sm:w-1/3 bg-white"
        />
        <Button
          onClick={() => handleOpenForm()}
          variant="contained"
          color="primary"
          className="w-full sm:w-auto"
        >
          {Strings.addAsset}
        </Button>
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <TableContainer style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow className='bg-light-blue'>
                <TableCell className="text-gray-600 font-semibold">{Strings.name}</TableCell>
                <TableCell className="text-gray-600 font-semibold">{Strings.type}</TableCell>
                <TableCell className="text-gray-600 font-semibold">{Strings.quantity}</TableCell>
                <TableCell className="text-gray-600 font-semibold">{Strings.totalPrice}</TableCell>
                <TableCell className="text-gray-600 font-semibold">{Strings.percentageChange}</TableCell>
                <TableCell className="text-gray-600 font-semibold">{Strings.purchaseDate}</TableCell>
                <TableCell className="text-gray-600 font-semibold">{Strings.actions}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableList.map((asset, index) => (
                <TableRow key={index} className="hover:bg-gray-100 transition">
                  <TableCell className="p-4">{asset.name}</TableCell>
                  <TableCell className="p-4">{asset.type}</TableCell>
                  <TableCell className="p-4">{asset.quantity}</TableCell>
                  <TableCell className="p-4">${asset.price}</TableCell>
                  <TableCell className="p-4">
                    {asset.percentageChange !== undefined ? (
                      <>
                        {asset.percentageChange > 0 ? (
                          <span className="flex items-center">
                            {asset.percentageChange}% <ArrowUpward fontSize="small" className="ml-1 !text-green" />
                          </span>
                        ) : asset.percentageChange < 0 ? (
                          <span className="flex items-center">
                            {asset.percentageChange}% <ArrowDownward fontSize="small" className="ml-1 !text-red" />
                          </span>
                        ) : (
                          <span>{asset.percentageChange}%</span>
                        )}
                      </>
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                  <TableCell className="p-4">{asset.dateOfPurchase || 'N/A'}</TableCell>
                  <TableCell className="p-4">
                    <IconButton color="primary" onClick={() => onEdit(asset)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => onDelete(asset.id)}>
                      <Delete className='!text-red' />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="bg-white p-4">
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={assets.filter(asset => asset.name.toLowerCase().includes(search.toLowerCase())).length}  // Corrected count to be based on filtered assets
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AssetTable;
