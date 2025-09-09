// facial-tissues categories

import { NavLink } from "react-router-dom";

export const ProductCard = ({ id, title, img }) => {
    return (
        <>
            <div className="col-12 col-lg-4 col-md-6">
                <div className="card">
                    <img src={img} className="card-img-top img-fluid" alt="..." style={{ height: "300px", objectFit: "contain" }} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{title}</h5>
                        <p className="card-text text-end m-1">
                            {/* <a href="#" className="btn btn-outline-primary">Explore Varients</a> */}
                            <NavLink to="/facial-tissues" className="btn btn-outline-primary">Explore Varients</NavLink>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default function Products() {
    let myProducts = [
        { id: 0, title: "Facial Tissues", img: "/img/Facial-tissue.png" },
        { id: 1, title: "Industrial Roll", img: "/img/Industrial-roll.png" },
        { id: 2, title: "Toilet Roll", img: "/img/Toilet-roll.png" },
        { id: 3, title: "Towels", img: "/img/Towels.png" }
        // { id: 4, title: "", img: "" }
    ]

    return (
        <>
            <div className="container-fluid products-container" id="products">
                <h5 className="products-header">Products:</h5>
                <div className="row g-3">
                    {/* <ProductCard id="1" title="My title" img="/img/Towels.png" /> */}
                    {
                        myProducts.map((val, index)=>{
                            return(
                                <>
                                    <ProductCard id={val.id} title={val.title} img={val.img}/>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}