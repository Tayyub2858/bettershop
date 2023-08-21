import React from 'react'
import './AddpurchaseStyle.css';
import { Modal } from '@mui/material';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import AdditionData from './AdditionData';

function Addpurchase() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {
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
        wherehouse
    } = AdditionData();
    return (
        <>
            <div>
                <button className='nav-btn' onClick={handleOpen}><AiOutlinePlus className='add-icons' /></button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='login-modal'
                >
                    <div className='Addpurchase-container'>
                        <div className='addpurches-header'>
                            <p className='new-purchese-heading1'>New Purchase Order</p>
                            <button className='purchese-close' onClick={handleClose}><AiOutlineClose style={{ fontSize: "20px" }} /></button>
                        </div>
                        <div className='purchase-details-texses'>
                            <div className='purchese-boxes'>
                                <div className='order-details'>
                                    <div className='order-heading-box'>
                                        <h3 className='order-heading-1'>Purchase Order Details</h3>
                                    </div>
                                    <div className='order-detils-input'>
                                        <div className='input-boxes-details'>
                                            <div className="search-container">
                                                <label className='input-text-label'><span style={{ color: "red" }}>*</span>Expected Date</label><br />
                                                <input type="date" className="search-input" onChange={(e) => setdate(e.target.value)} value={date} />
                                            </div>
                                            <div className="search-container">
                                                <label className='input-text-label'><span style={{ color: "red" }}>*</span>Status</label><br />
                                                <select className="search-input" value={status} onChange={handleSelectChange}>
                                                    <option value="">-- Please select --</option>
                                                    <option value="Draft">Draft</option>
                                                    <option value="Requested">Requested</option>
                                                    <option value="Business Approval">Business Approval</option>
                                                    <option value="Budget Approval">Budget Approval</option>
                                                    <option value="Ordered">Ordered</option>
                                                    <option value="Received">Received</option>
                                                    <option value="Master">Master</option>
                                                    <option value="Quantity Checked">Quantity Checked</option>
                                                    <option value="Quality Checked">Quality Checked</option>
                                                    <option value="Put Away">Put Away</option>
                                                    <option value="Close">Close</option>

                                                </select>
                                            </div>
                                            <div className="search-container">
                                                <label className='input-text-label'><span style={{ color: "red" }}>*</span> Supplier</label><br />
                                                <input
                                                    className="search-input"
                                                    type="text"
                                                    value={searchText}
                                                    onChange={handleSearch}
                                                    onFocus={() => setShowResults(true)}
                                                    placeholder="Search..."
                                                />
                                                <div
                                                    className="results-container"
                                                    ref={resultsRef}
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                >
                                                    {showResults && (
                                                        <ul className="suggestions">
                                                            {searchResults.map((result, index) => (
                                                                <li key={index} onClick={() => handleSelectResult(result)}>
                                                                    {result}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='input-boxes-details'>
                                            <div className="search-container">
                                                <label className='input-text-label'><span style={{ color: "red" }}>*</span>Order Type</label><br />
                                                <label for='Regular'>
                                                    <input
                                                        type="checkbox"
                                                        name='Regular'
                                                        value="Regular"
                                                        checked={checkbox === "Regular"}
                                                        onChange={handleCheckboxChange}
                                                    /> Regular</label><br />
                                                <label for="pre Order">
                                                    <input
                                                        type="checkbox"
                                                        name='pre order'
                                                        value="pre order"
                                                        checked={checkbox === "pre order"}
                                                        onChange={handleCheckboxChange}
                                                    /> Pre Order</label>
                                            </div>
                                            <div className="search-container">
                                                <label className='input-text-label'>Hide pre order text</label><br />
                                                <label class="toggle-container">
                                                    <input type="checkbox" class="toggle-checkbox" checked={isInputDisabled}
                                                        onChange={handleToggle} />
                                                    <div class="slider"></div>
                                                </label>
                                            </div>
                                            <div style={{ width: "300px" }}>
                                                <label className='input-text-label'>Pre Order Text</label><br />
                                                <input
                                                    type="text"
                                                    placeholder=''
                                                    disabled={isInputDisabled}
                                                    className="search-input"
                                                    onChange={(e) => setpretext(e.target.value)}
                                                    value={pretext}
                                                />
                                            </div>
                                        </div>
                                        <div className='input-boxes-details'>
                                            <div style={{ position: "relative" }}>
                                                <label className='input-text-label'>PO Type</label><br />
                                                <input type="text" className="search-input" onChange={(e) => setpotype(e.target.value)} value={potype} />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='warehouse-info'>
                                    <div className='warehouse-heading-box'>
                                        <h3 className='warehouse-heading-1'>Merchant / Warehouse Info</h3>
                                    </div>
                                    <div className='warehouse-text-boxes'>
                                        <label className='input-text-label'><span style={{ color: "red" }}>*</span>Marchent</label> <br />
                                        <input
                                            type="text"
                                            className="search-input"
                                            value={searchmarchent}
                                            onChange={HandleMarchent}
                                            onFocus={() => setshowmarchent(true)}
                                            placeholder="Search Marchent..."
                                        />
                                        <div
                                            className="results-container"
                                            ref={marchentRef}
                                            onMouseEnter={handleMouseEntermarchent}
                                            onMouseLeave={handleMouseLeavemarchent}
                                        >
                                            {showmarchent && (
                                                <ul className="suggestions">
                                                    {resultmarchent.map((result, index) => (
                                                        <li key={index} onClick={() => handleSelectResultmarchent(result)}>
                                                            {result}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        <br />
                                        <label className='input-text-label'><span style={{ color: "red" }}>*</span>Warehouse</label> <br />
                                        <select className="search-input" value={wherehouse} onChange={HandleWarehouse}>
                                            <option value="">-- Please select --</option>
                                            <option value="Bettershop(rwp)" className='warehouse-option'>Bettershop (RWP)</option>
                                            <option value="Bettershop(lhr)" className='warehouse-option'>Bettershop (LHR)</option>
                                            <option value="General Store Material" className='warehouse-option'>General Store Material</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className='additional-details'>
                                <div className='addition-box'>
                                    <h3 className='adition-heading-1'>Aditional Details</h3>
                                </div>
                                <div>
                                    <label className='additional-label'>Note</label><br />
                                    <textarea name="" id="" cols="135" rows="3" className='addition-textarea' onChange={(e) => setnote(e.target.value)} value={note}></textarea>
                                </div>
                            </div>
                            <div className='purches-btn'>
                                <button className='purchese-add-btn' onClick={HandleAddPurches}>Add Purchese</button>
                                <button className='purcese-reset-btn' onClick={HandleReset}>Reset</button>
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Addpurchase
