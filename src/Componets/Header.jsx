import React from 'react'

function Header() {
  return (
    <div>
       <header className='container mx-auto mt-9 '>
     <div className='flex  items-center  justify-between'>
     <div>
        <h3 className='font-bold  text-xl text-[#87CEEB]'>CRYPTOFOLIO</h3>
      </div>
      <div>
        <select>
          <option>USD</option>
          <option>RUB</option>
          <option>UZS</option>
        </select>
        <button className='border border-[#87CEEB]  bg-[#87CEEB] text-black px-2 py-4 rounded'>WATCH LIST</button>
      </div>
     </div>
    </header>
    </div>
  )
}

export default Header
