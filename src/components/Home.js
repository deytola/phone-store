import ReactSlider from "react-slider";
import {BsArrowRight} from "react-icons/bs";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import rootActions from "../redux/actions";
import GadgetsImage from "../assets/Gadget-PNG-Pic.png";

const Home = ({gadgetData, filterGadgets, fetchGadgets}) => {
    const MIN_PRICE = 0
    const MAX_PRICE = 2500
    const [values, setValues] = useState([MIN_PRICE, MAX_PRICE]);
    const [displayedData, setDisplayedData] = useState([]);
    const [searchData, setSearchData] = useState({
        searchTerm: "",
        category: "",
        minPrice: MIN_PRICE,
        maxPrice: MAX_PRICE,
        storageSizeString: ""
    });

    useEffect(() => {
        fetchGadgets()
    }, []);

    useEffect(() => {
        setDisplayedData(gadgetData.data);
    }, [gadgetData])



    useEffect(() => {

        const newGadgetData = gadgetData.data.filter((item) => {
            return (
                item.lowestAsk?.grade?.toLowerCase().includes(searchData.searchTerm.toLowerCase()) ||
                item.lowestAsk?.storageSize?.toLowerCase().includes(searchData.searchTerm.toLowerCase()) ||
                item.lowestAsk?.price == searchData.searchTerm ||
                item.name.toLowerCase().includes(searchData.searchTerm.toLowerCase())
            );
        });
        searchData.searchTerm.length === 0
            ? setDisplayedData(gadgetData.data)
            : setDisplayedData(newGadgetData);
    }, [searchData.searchTerm]);

    useEffect(() => {
        const newGadgetData = gadgetData.data.filter((item) => {
            return (
                item.lowestAsk?.storageSize?.toLowerCase().includes(searchData.storageSizeString.toLowerCase())
            );
        });
        searchData.storageSizeString.length === 0
            ? setDisplayedData(gadgetData.data)
            : setDisplayedData(newGadgetData);
    }, [searchData.storageSizeString]);





    return (
        <div className={"full-width full-height"}>
            <section>
                <div className={"d-flex p-3"}>
                    <div className={"search-container"}>
                        <h2 className={"text-light text-center text-sm-start"}>SHOP OUR LATEST AVAILABLE STOCK HERE</h2>
                        <div className="d-flex flex-column form-group flex-md-row align-content-sm-start">
                            <input type="email" className="form-control" value={searchData.searchTerm} onChange={(e) => setSearchData({...searchData, searchTerm: e.target.value})} placeholder="Enter Search Term (e.g iPhone x, 128GB or A1)"/>
                            <button className="m-3 mt-sm-3 mt-md-0 ms-md-2 m-sm-0 btn btn-primary fw-bold"><span className={"d-flex align-items-center justify-content-center"}>SEARCH<BsArrowRight size={"1.5rem"} /></span></button>
                        </div>
                    </div>
                    <div className={"d-none d-sm-flex align-items-end"}>
                        <img className="img-fluid ms-sm-4 img-size" src={GadgetsImage}/>
                    </div>
                </div>
            </section>
            <section className={"text-light p-3"}>
                <div className={"d-flex"}>
                    <div className={"w-70 h-100 bg-secondary p-3 me-3"}>
                        <h6 className={"text-start fw-bold"}>Categories</h6>
                        <div className={"d-flex flex-column ps-3 align-items-start"}>
                            {
                                ["All", "iphone", "Samsung", "ipad", "Macbook", "Airpods"].map((category) => {
                                    return (<h6 className={"m-2"}>{category}</h6>)
                                })
                            }
                        </div>
                        <h6 className={"text-start fw-bolder mt-5"}>Price Filter</h6>
                        <div className={"d-flex flex-column align-items-start"}>
                            <h8 className={"text-md-center"}>${values[0]}  -  ${values[1]}</h8>
                            <ReactSlider
                                value={values}
                                defaultValue={[MIN_PRICE, MAX_PRICE]}
                                min={MIN_PRICE}
                                max={MAX_PRICE}
                                onChange={setValues}
                                className="horizontal-slider"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                            />
                            <div className={"d-flex flex-column align-items-center"}>
                                <input type="number" value={searchData.minPrice} onChange={(e) => setSearchData({...searchData, minPrice: parseFloat(e.target.value)})} onBlur={() => filterGadgets(searchData)} className="form-input mt-4 mb-1" placeholder={"Min"}/>
                                <span>|</span>
                                <input type="number" value={searchData.maxPrice} onChange={(e) => setSearchData({...searchData, maxPrice: parseFloat(e.target.value)})} onBlur={() => filterGadgets(searchData)} className="form-input mt-2" placeholder={"Max"}/>
                            </div>
                        </div>
                        <h6 className={"text-start fw-bold mt-5"}>Storage</h6>
                        <div className={"d-flex flex-column ps-3 align-items-start"}>
                            <div className="form-check">
                                <input className={"form-check-input"} type={"radio"} name={"storage"} value={"32GB"} onChange={(e) => setSearchData({...searchData, storageSizeString: `${e.target.value}`})}
                                       id={"flexRadio32"} />
                                <label className={"form-check-label"} htmlFor={"flexRadio32"}>
                                    32GB
                                </label>
                            </div>
                            <div className="form-check">
                                <input className={"form-check-input"} type={"radio"} name={"storage"} value={"64"} onChange={(e) => setSearchData({...searchData, storageSizeString: `${e.target.value}`})}
                                       id={"flexRadio64"} />
                                <label className={"form-check-label"} htmlFor={"flexRadio64"}>
                                    64GB
                                </label>
                            </div>
                            <div className="form-check">
                                <input className={"form-check-input"} type={"radio"} name={"storage"} value={"128"} onChange={(e) => setSearchData({...searchData, storageSizeString: `${e.target.value}`})}
                                       id={"flexRadio128"} />
                                <label className={"form-check-label"} htmlFor={"flexRadio128"}>
                                    128GB
                                </label>
                            </div>
                            <div className="form-check">
                                <input className={"form-check-input"} type={"radio"} name={"storage"} value={"256"} onChange={(e) => setSearchData({...searchData, storageSizeString: `${e.target.value}`})}
                                       id={"flexRadio256"} />
                                <label className={"form-check-label"} htmlFor={"flexRadio256"}>
                                    256GB
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={"w-100 h-100"}>
                        <div>
                            <div className={"row text-center text-dark g-4"}>
                                {
                                    gadgetData.loading ? (
                                    <h2 className={"text-light"}>Loading...</h2>
                                    ) : gadgetData.error ? (
                                    <h2 className={"text-light"}>postData.error</h2>
                                    ) :
                                        displayedData.map((gadget) => {
                                        return (
                                            <div key={gadget._id} className={"col-3 text-light"}>
                                                <div className="card pt-3  bg-secondary" style={{width: "13rem"}}>
                                                    <div className={"d-flex justify-content-end"}>
                                                        {
                                                            gadget.lowestAsk?.grade ? <button type="button" className="btn bg-secondary rounded-0 text-light border-light disabled btn-outline-info m-1">{gadget.lowestAsk?.grade}</button> : <span className={"m-1"}>N/A</span>
                                                        }
                                                    </div>
                                                    <img src={gadget.imgUrl} className="card-img-top"/>
                                                    <div className="card-body">
                                                        <h5 className="card-title text-start">{gadget.name}</h5>
                                                        <p className="card-text text-start ">{gadget.lowestAsk?.carrier && gadget.lowestAsk?.storageSize ? `${gadget.lowestAsk?.carrier} | ${gadget.lowestAsk?.storageSize}`  : "N/A"}</p>
                                                        <p className="card-text text-start ">Unit price</p>
                                                        <h3 className="card-text text-start ">{gadget.lowestAsk?.price ? `$${gadget.lowestAsk?.price}` : "N/A"}</h3>
                                                        <p className="card-text text-start ">{gadget.quantity ? `${gadget.quantity} Available` : "N/A"}</p>
                                                        <a href="#" className="btn btn-primary w-10">BUY</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        userData: state.users,
        gadgetData: state.gadgets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(rootActions.fetchUsers()),
        fetchGadgets: () => dispatch(rootActions.fetchGadgets()),
        filterGadgets: (searchData) => dispatch(rootActions.filterGadgets(searchData)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Home);
