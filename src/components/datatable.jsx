import React from "react";

function Datatable({ patientRecords }){
  const columns=patientRecords[0] && Object.keys(patientRecords[0])
    return(  
    <table>
        <thead>
          <tr>
            {patientRecords[0] && columns.map((headings)=>
              <th>{headings}</th>
            )}
            </tr>
          </thead>
          <tbody>
            {patientRecords.map(patients=>(
              <tr>
                {
                  columns.map(column=><td>
                    {patients[column]}
                  </td>)
                }
                </tr>
            ))}
            </tbody>
       </table> )
}

export default Datatable