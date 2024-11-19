import React from 'react'
import TablazatSor from './TablazatSor'



export default function Tablazat(props) {

  return (
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.lista.map((elem, index)=>{
                        return (
                            <TablazatSor jel={elem} key={index} index={index}/>
                        )
                    })
                }
            </tbody>
        </table>


    </div>
  )
}