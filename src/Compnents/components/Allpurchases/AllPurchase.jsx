import React from 'react';
import './AllPurchaseStyle.css';
import DrawerDasboard from '../../Pages/Drawer/Drawer';
import Addpurchase from './AddPurchase/Addpurchase';
import { CiSearch } from 'react-icons/ci'
import AllPurchesData from './AllPurchesData';
import { Link } from 'react-router-dom';
function AllPurchase() {
  const {
    AllpurchestableData,
    handleSelectAll,
    handleItemChange,
    selectAll,
    selectedItems,
  } = AllPurchesData();

  return (
    <>
      <DrawerDasboard />
      <Addpurchase />
      <div className='allpurches-container'>
        <div class="input-container">
          <input type="text" placeholder="Po IDs" />
          <input type="text" placeholder="Search Marchent.." />
          <input type="text" placeholder="Search Supplier..." />
          <select className='input-selection'>
            <option value="" >Search Status...</option>
            <option value="Darft">Darft</option>
            <option value="Requested">Requested</option>
            <option value="Business Approval">Business Approval</option>
            <option value="Budget Approval">Budget Approval</option>
            <option value="Ordered">Ordered</option>
            <option value="Recevied">Recevied</option>
            <option value="Master">Master</option>
            <option value="Quantity Checked">Quantity Checked</option>
            <option value="Quality Checked">Quality Checked</option>
            <option value="Put Away">Put Away</option>
            <option value="Close">Close</option>
          </select>
          <input type="date" placeholder="Start date" />
          <input type="date" placeholder="End date" />
          <button className='filter-btn'> Advance Filters</button><br />
        </div>
        <div className='find-btn-div'>
          <button className='find-btn'><CiSearch style={{ fontSize: "20px", position: "absolute", right: '10.2%' }} />Find</button>
        </div>
        <div class="table-wrapper">
          <table class="sticky-last-column-table">
            <thead>
              <tr>
                <th><input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                /></th>
                <th>Ref.No</th>
                <th>Masking Name</th>
                <th>PO Type</th>
                <th>Marchent</th>
                <th>Suppiler</th>
                <th>Qty</th>
                <th>Dmg</th>
                <th>Miss</th>
                <th>Rec</th>
                <th>Rs.Dmg</th>
                <th>Rs.Miss</th>
                <th>Status</th>
                <th>Pre Order</th>
                <th>Payment</th>
                <th>GrandTotal</th>
                <th className="sticky">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                AllpurchestableData.map((tabledata) => (
                  <tr key={tabledata.id}>
                    <td><input type="checkbox" checked={selectedItems.includes(tabledata.id)} onChange={() => handleItemChange(tabledata.id)} /></td>
                    <td><Link to={`/details/${tabledata.id}`} className='RefNo'>{tabledata.RefNo}</Link></td>
                    <td>{tabledata.MaskingName}</td>
                    <td>{tabledata.PoType}</td>
                    <td>{tabledata.Marchent}</td>
                    <td>{tabledata.Suppiler}</td>
                    <td>{tabledata.Qty}</td>
                    <td>{tabledata.Dmg}</td>
                    <td>{tabledata.Miss}</td>
                    <td>{tabledata.Rec}</td>
                    <td>{tabledata.RsDmg}</td>
                    <td>{tabledata.RsMiss}</td>
                    <td><button className='status-btn'>{tabledata.Status}</button></td>
                    <td><button className='pre-order-btn'>{tabledata.PreOrder}</button></td>
                    <td><button className='pre-order-btn'>{tabledata.Payment}</button></td>
                    <td>{tabledata.GrandTotal}</td>
                    <td className="sticky">{tabledata.Action}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>

  )
}

export default AllPurchase
