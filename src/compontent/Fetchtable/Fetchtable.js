import React from 'react'
import data from '../../testjsonfile/fetchdata';
import './fetchtable.css';

function Fetchtable() {
  return (
    <div className='fetch-table'>
        <table width="100%">
            <thead>
                <tr>
                    <td>Type</td>
                    <td>Section</td>
                    <td>Description</td>
                    <td>Advacate-Booking</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>{
                        return( <tr key={index}>
                            <td>{item.type}</td>
                            <td>{item.section}</td>
                            <td>{item.description}</td>
                            <td><button>Booking</button></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Fetchtable