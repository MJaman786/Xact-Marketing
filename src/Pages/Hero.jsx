import "../Pages/Style.css"
import About from "./About";

export default function Hero() {
    return (
        <>
            <div class="container-fluid hero-container">
                <div class="card w-75 mb-3">
                    <div class="card-body">
                        <h5 class="card-title typing">Premium Hygiene Solutions Delivered with Care</h5>
                        <p class="card-text">Your trusted distributor of tissues, cleaning liquids, and hygiene essentials for homes, businesses, and institutions</p>
                        <a href="#" class="btn btn-primary my-1 mx-0 mx-md-1 mx-sm-1"><i class="bi bi-cart2 me-1"></i>Shop Products</a>
                        <a href="#" class="btn btn-primary my-1 mx-0 mx-md-1 mx-sm-1"><i class="bi bi-boxes me-1"></i> Bulk Orders</a>
                    </div>
                </div>
            </div>
            <About/>
        </>
    );
}