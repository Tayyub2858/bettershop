import { useRef, useState } from "react";


function AdditionData() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false); // Initially hide results

  // search Marchent Restult  
  const [searchmarchent, setsearchmarchent] = useState('');
  const [resultmarchent, setresultmarchent] = useState([]);
  const [showmarchent, setshowmarchent] = useState(false);

  const [wherehouse , setwherehouse] = useState('')

  //   togal is disableed 
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  // collect data when form submit 

  const [date, setdate] = useState(null)
  const [status, setstatus] = useState(null);
  const [supplier, setsupplier] = useState();
  const [checkbox, setcheckbox] = useState(null);
  const [pretext, setpretext] = useState(null);
  const [potype, setpotype] = useState(null);
  const [note, setnote] = useState(null);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setcheckbox(value);
  }

  const handleSelectChange = (event) => {
    const { value } = event.target;
    
    setstatus(value);
  }
  // show Add Purches button show  
  const HandleAddPurches = () => {
    setdate("")
    setstatus("")
    setSearchText("")
    setcheckbox("")
    setpretext("")
    setpotype("")
    setnote("")
    console.log(
      date,
      status,
      searchText,
      checkbox,
      pretext,
      potype,
      note,
      searchmarchent,
      wherehouse
    )
  }

  // reset Button clear the all form fileds 
  const HandleReset = () => {
    setdate("")
    setstatus("")
    setSearchText("")
    setcheckbox("")
    setpretext("")
    setpotype("")
    setnote("")
    setsearchmarchent("")
    setwherehouse("")
  }


  // togal button is used 
  const handleToggle = () => {
    setIsInputDisabled(!isInputDisabled);
  };

  const resultsRef = useRef(null);
  const marchentRef = useRef(null)

  const HandleMarchent = (event) => {
    const value = event.target.value;
    setsearchmarchent(value)

    const marchentlist = [
      'Apple',
      'Banana',
      'Cherry',
      'Grapes',
      'Orange',
      'Pineapple',
    ];

    const marchentResult = marchentlist.filter(item => item.toLowerCase().includes(value.toLowerCase()));

    setresultmarchent(marchentResult);
    setshowmarchent(true);
  }
  const handleSelectResultmarchent = (selectedResult) => {
    setsearchmarchent(selectedResult);
    setresultmarchent([]);
    setshowmarchent(false);
  }
  const handleMouseEntermarchent = () => {
    setshowmarchent(true); // Show results on mouse enter
  };

  const handleMouseLeavemarchent = () => {
    setshowmarchent(false); // Hide results on mouse leave
  };

  // Handle wharehouse onchange text 
  const HandleWarehouse = (e) => {
    const value = e.target.value;
    setwherehouse(value)
  }

  // Supperiler Serach bar text 
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Here you would implement your search logic.
    // For this example, I'll just use a simple list of items.

    // Marchent search for 


    const itemList = [
      'Apple',
      'Banana',
      'Cherry',
      'Grapes',
      'Orange',
      'Pineapple',
    ];

    const filteredResults = itemList.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
    setShowResults(true); // Show results when typing
  };

  const handleSelectResult = (selectedResult) => {
    setSearchText(selectedResult);
    setSearchResults([]); // Clear the search results after selecting an item
    setShowResults(false); // Hide results after selection
  };

  const handleMouseEnter = () => {
    setShowResults(true); // Show results on mouse enter
  };

  const handleMouseLeave = () => {
    setShowResults(false); // Hide results on mouse leave
  };
  return (
    {
      searchResults,
      searchText,
      showResults,
      resultsRef,
      setShowResults,
      handleSearch,
      handleSelectResult,
      handleMouseEnter,
      handleMouseLeave,

      handleToggle,
      isInputDisabled,

      date, setdate,
      status, setstatus,
      supplier, setsupplier,
      checkbox, setcheckbox,
      pretext, setpretext,
      potype, setpotype,
      note, setnote,
      HandleAddPurches,
      handleCheckboxChange,
      HandleReset,
      handleSelectChange,

      searchmarchent,
      resultmarchent,
      showmarchent,
      marchentRef,
      setshowmarchent,
      HandleMarchent,
      handleMouseEntermarchent,
      handleMouseLeavemarchent,
      handleSelectResultmarchent,
      HandleWarehouse,
      wherehouse,
    }
  )
}

export default AdditionData
