import {BsArrowRight} from "react-icons/all";
import GadgetsImage from "../assets/Gadget-PNG-Pic.png";

const Home = () => {
    return (
        <div className={"vh-100 vw-100"}>
            <section>
                <div className={"container"}>
                    <div className={"d-flex p-3"}>
                        <div className={"search-container"}>
                            <h2 className={"text-light text-center text-sm-start"}>SHOP OUR LATEST AVAILABLE STOCK HERE</h2>
                            <div className="d-flex flex-column form-group flex-md-row align-content-sm-start">
                                <input type="email" className="form-control" placeholder="Enter Search Term (e.g iPhone x, 128GB or A1)"/>
                                <button className="m-3 mt-sm-3 mt-md-0 ms-md-2 m-sm-0 btn btn-primary fw-bold"><span className={"d-flex align-items-center justify-content-center"}>SEARCH<BsArrowRight size={"1.5rem"} /></span></button>
                            </div>
                        </div>
                        <div className={"d-none d-sm-flex align-items-end"}>
                            <img className="img-fluid ms-sm-4" src={GadgetsImage}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"text-light"}>

            </section>

        </div>
    )
}

export default Home;
