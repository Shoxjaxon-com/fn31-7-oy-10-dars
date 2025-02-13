import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

export default function CryptoTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'USD',
        order: 'gecko_desc',
        per_page: 10,
        page: 1,
        sparkline: false,
        price_change_percentage: '24h'
      },
    }).then(response => {
      setData(response.data);
    }).catch(error => {
      console.error('API xatosi:', error);
    });
  }, []);

  return (
   <div className='container mx-auto text-white'>
    <div>
        <div>
            <h2 className='text-center font-normal text-4xl mb-3 '>Cryptocurrency Prices by Market Cap</h2>
            <div>
                <input type="text"  placeholder='Search For a Crypto Currency..' className='border border-white w-full p-3 rounded  mb-5'/>
            </div>
        </div>
    </div>
    <div>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className='bg-[#87CEEB]'>
            <TableCell>Coin</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">24h Change</TableCell>
            <TableCell align="right">Market Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((coin) => (            
            <TableRow key={coin.id}>
              <TableCell component="th" scope="row">
                <img src={coin.image} alt={coin.name} width="25" style={{ marginRight: '10px' }} />
                {coin.symbol.toUpperCase()}<br />
                {coin.name}
              </TableCell>
              <TableCell align="right">${coin.current_price.toLocaleString()}</TableCell>
              <TableCell align="right" style={{ color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </TableCell>
              <TableCell align="right">${coin.market_cap.toLocaleString()}M</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   </div>
  );
}
