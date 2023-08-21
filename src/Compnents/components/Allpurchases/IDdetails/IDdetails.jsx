import React from 'react'
import AllpurchestableData from '../AllpurchestableData';
import { useParams } from 'react-router-dom';


function IDdetails() {
    const { id } = useParams();
    const selecteditem = AllpurchestableData.find(item => item.id === parseInt(id));
    if (!selecteditem) {
        return <div>Data are not found.!</div>
    }
    return (
        <>
            <div>
                <h1>Show Details Every Po When Click PO Ref</h1>
                <h4>Po.Ref : {selecteditem.RefNo}</h4>
                <p>Marchent : {selecteditem.Marchent}</p>
            </div>
        </>
    )
}

export default IDdetails
