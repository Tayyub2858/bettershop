import { useState } from "react"
import AllpurchestableData from './AllpurchestableData';

function AllPurchesData () {
    
    // select all checkbox  
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setSelectedItems(selectAll ? [] : AllpurchestableData.map(item => item.id));
      };
      const handleItemChange = (itemId) => {
        if (selectedItems.includes(itemId)) {
          setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else {
          setSelectedItems([...selectedItems, itemId]);
        }
      };


  return {
    handleSelectAll,
    handleItemChange,
    selectAll,
    selectedItems,
    AllpurchestableData,
  }
}

export default AllPurchesData;
