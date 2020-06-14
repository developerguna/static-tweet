import React from 'react';
import './table.css'


class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>JSON Data Using Map</h1>
         </div>
      );
   }
}

const TableRow = ({data})  => {
   console.log(data);
   return(
      <tr>
         {
            Object.values(data).map(item =>
               {
                  return <td>{item}</td>
               })
         }
      </tr>
   )

}



const TableHeader = ({ datah }) => {
   console.log(datah);
   return (
      <tr>
         {
            Object.keys(datah).map((item => {
               return <th>{item}</th>
            }))
         }
      </tr>
   )
}

class Table extends React.Component {
   constructor(props) {
      super();


      this.state =
      {
         data: props.datatable,
         tableheader: props.datatable[0]
      }
   }
   render() {
      return (
         <div>
            <Header />
            <table className="tabledata">
               <thead>
                  <TableHeader datah={this.state.tableheader} />
               </thead>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key={i.toString()}
                     data={person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

export default Table;
 

