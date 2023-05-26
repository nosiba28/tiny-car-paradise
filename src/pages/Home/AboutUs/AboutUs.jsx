
const AboutUs = () => {
   
    return (
        <div className="bg-purple-800" data-aos="fade-left">
        <h2 className="text-white text-4xl font-bold text-center pt-16 pb-4">About Us!</h2>
         
         <div className="hero min-h-screen p-11" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1545094729-5e4860fc9452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNhciUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Get Ready to Race with Your Cars</h1>
                    <p className="mb-5">Speedy Wheels Inc. is a renowned toy car sponsor company that specializes in creating exhilarating experiences for children. With a strong commitment to innovation and quality, we strive to bring the joy of speed and excitement into the lives of young car enthusiasts worldwide. Our mission is to foster imagination, encourage creativity, and cultivate a passion for cars among children. We offer a diverse range of toy cars, including sleek sports cars for racing enthusiasts, rugged off-road vehicles for adventurous play, classic cars that evoke nostalgia, and customizable options that allow children to personalize their toy cars.</p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default AboutUs;