export default function About(params) {
    return (
        <>
            <div className="container-fluid about-container" id="about">
                <div className="card container mx-auto">
                    <div className="card-body">
                        <h5 className="card-title text-center">Who We Are</h5>
                        <p className="card-text text-center">At <strong>Xact Marketing</strong>, we believe hygiene and cleanliness are the foundation of healthy living and thriving businesses.</p>
                        <p className="card-text text-center">For years, we have proudly served as a reliable distributor of high-quality tissues, cleaning liquids, and hygiene products. Whether you are a household looking for everyday essentials, a business in need of bulk supplies, or an institution demanding consistent quality, we are here to deliver.</p>
                    </div>
                </div>
                {/* about-quality */}
            </div>
            <div className="container-fluid about-quality pt-3">
                <h5 className="about-qualty-header">Our Promise:</h5>
                <div className="row g-3 px-2">
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text text-center"><img src="/icons/trust.png" alt="" style={{ width: "80px", objectFit: "contain" }} /></p>
                                <h5 className="card-title text-center">Trusted Products</h5>
                                <p className="card-text text-center">We partner with leading manufacturers to bring you premium tissues and cleaning solutions that meet the highest quality standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text text-center"><img src="/icons/supply.png" alt="" style={{ width: "80px", objectFit: "contain" }} /></p>
                                <h5 className="card-title text-center">Reliable Supply</h5>
                                <p className="card-text text-center">With a strong distribution network, we ensure your hygiene products are always delivered on time, every time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 flex-grow-1">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text text-center"><img src="/icons/price.png" alt="" style={{ width: "80px", objectFit: "contain" }} /></p>
                                <h5 className="card-title text-center">Affordable Prices</h5>
                                <p className="card-text text-center">Our competitive pricing makes top-quality hygiene essentials accessible for both retail and bulk buyers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}