import React from 'react'
import './table.css'
const Table = ({data}) => {
  return (
   <>
   <div className='table-container'>
   <table>
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
        </tr>
    </thead>
   {
    data.map((ite)=>{
        return (
            <tbody>
                <tr>
                <td>{ite.id}</td>
                <td>{ite.name}</td>
                <td>{ite.price}</td>
                </tr>
            </tbody>
        )
    })
   }
   </table>
   </div>
   </>
  )
}

export default Table
