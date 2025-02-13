import React from 'react';

function Card(props) {
    const { item } = props;
    console.log(props);

  return (
    <div>
      <div className='w-[20%] text-white text-center flex items-center flex-col'>
        <img className='w-[500px]' src={item?.image} alt={item?.symbol || 'crypto-image'} />
        <h3>
            <span>{item?.symbol}&nbsp;</span>
            <span className='text-[#0ECB81]'>{item?.price_change_percentage_24h?.toFixed(2)}%</span>
        </h3>
        <h2>{Number(item?.circulating_supply).toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Card;