import React from 'react';
import '../css/home.css';

export default function Home() {
  return (
    <>
    <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
                <i className="fas fa-mountain text-3xl text-blue-500 mr-2"></i>
                <a href="#" className="text-2xl font-bold text-gray-800">Himalayan Wanderlust</a>
            </div>
            
            <nav className="hidden md:flex space-x-8">
                <a href="#home" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Home</a>
                <a href="#destinations" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Destinations</a>
                <a href="#packages" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Packages</a>
                <a href="#gallery" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Gallery</a>
                <a href="#testimonials" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Testimonials</a>
                <a href="#contact" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Contact</a>
            </nav>
            
            <div className="md:hidden">
                <button id="menu-toggle" className="text-gray-700 focus:outline-none">
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
        
        {/* <!-- Mobile Menu --> */}
        <div id="mobile-menu" className="mobile-menu bg-white w-full md:hidden">
            <div className="px-4 py-2 flex flex-col space-y-2">
                <a href="#home" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Home</a>
                <a href="#destinations" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Destinations</a>
                <a href="#packages" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Packages</a>
                <a href="#gallery" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Gallery</a>
                <a href="#testimonials" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Testimonials</a>
                <a href="#contact" className="nav-link text-gray-700 hover:text-blue-500 font-medium py-2">Contact</a>
            </div>
        </div>
    </header>

    {/* <!-- Hero Section --> */}
    <section id="home" className="hero min-h-screen flex items-center justify-center text-white pt-20">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover the Magic of North Indian Mountains</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Experience breathtaking landscapes, serene valleys, and thrilling adventures in the majestic Himalayas</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#packages" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">Explore Tours</a>
                <a href="#contact" className="bg-transparent hover:bg-white hover:text-gray-900 border-2 border-white text-white font-bold py-3 px-6 rounded-full transition duration-300">Contact Us</a>
            </div>
        </div>
    </section>

    {/* <!-- Destinations Section --> */}
    <section id="destinations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Explore the most breathtaking destinations in North India's mountain ranges</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Destination 1 --> */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
                    <div className="h-64 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                             alt="Leh-Ladakh" className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Leh-Ladakh</h3>
                        <p className="text-gray-600 mb-4">The land of high passes with stunning landscapes, Buddhist monasteries, and thrilling roads.</p>
                        <div className="flex items-center text-yellow-500 mb-3">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span className="text-gray-600 ml-2">4.7 (1.2k reviews)</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-blue-600 font-bold">From ₹15,999</span>
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Explore <i className="fas fa-arrow-right ml-1"></i></a>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Destination 2 --> */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
                    <div className="h-64 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1563906267088-b916b4508f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                             alt="Shimla-Manali" className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Shimla & Manali</h3>
                        <p className="text-gray-600 mb-4">Queen of hills meets the valley of gods - perfect blend of colonial charm and natural beauty.</p>
                        <div className="flex items-center text-yellow-500 mb-3">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span className="text-gray-600 ml-2">4.8 (980 reviews)</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-blue-600 font-bold">From ₹12,499</span>
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Explore <i className="fas fa-arrow-right ml-1"></i></a>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Destination 3 --> */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
                    <div className="h-64 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                             alt="Rishikesh" className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Rishikesh & Mussoorie</h3>
                        <p className="text-gray-600 mb-4">Yoga capital meets the queen of hills - spiritual awakening amidst Himalayan beauty.</p>
                        <div className="flex items-center text-yellow-500 mb-3">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <span className="text-gray-600 ml-2">4.5 (850 reviews)</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-blue-600 font-bold">From ₹9,999</span>
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Explore <i className="fas fa-arrow-right ml-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    View All Destinations <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>

    {/* <!-- Packages Section --> */}
    <section id="packages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Best Packages</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Carefully curated experiences for every type of traveler</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Package 1 --> */}
                <div className="package-card bg-white rounded-xl shadow-lg overflow-hidden transition duration-300">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1580655653883-eb1a9de3a0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                             alt="Leh-Ladakh Adventure" className="w-full h-64 object-cover"/>
                        <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                            Best Seller
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Leh-Ladakh Bike Adventure</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">15 Days</span>
                        </div>
                        <p className="text-gray-600 mb-4">Ride through the highest motorable roads, visit Pangong Lake, Nubra Valley, and experience Ladakhi culture.</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Biking</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Camping</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Cultural</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-gray-500 line-through">₹28,999</span>
                                <span className="text-blue-600 font-bold text-xl ml-2">₹24,999</span>
                                <span className="text-green-600 text-sm font-medium ml-2">(14% OFF)</span>
                            </div>
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Book Now</a>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Package 2 --> */}
                <div className="package-card bg-white rounded-xl shadow-lg overflow-hidden transition duration-300">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80" 
                             alt="Shimla-Manali Family Tour" className="w-full h-64 object-cover"/>
                        <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                            Family Special
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Shimla-Manali Family Escape</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">8 Days</span>
                        </div>
                        <p className="text-gray-600 mb-4">Perfect family vacation with toy train rides, apple orchards, snow points, and comfortable stays.</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Family</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Sightseeing</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Relaxation</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-gray-500 line-through">₹18,999</span>
                                <span className="text-blue-600 font-bold text-xl ml-2">₹15,499</span>
                                <span className="text-green-600 text-sm font-medium ml-2">(18% OFF)</span>
                            </div>
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Book Now</a>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Package 3 --> */}
                <div className="package-card bg-white rounded-xl shadow-lg overflow-hidden transition duration-300">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80" 
                             alt="Rishikesh Adventure" className="w-full h-64 object-cover"/>
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                            Adventure
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Rishikesh Extreme Adventure</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">5 Days</span>
                        </div>
                        <p className="text-gray-600 mb-4">White water rafting, bungee jumping, camping by the Ganges, and yoga sessions in the adventure capital.</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Adventure</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Rafting</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Yoga</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-gray-500 line-through">₹12,999</span>
                                <span className="text-blue-600 font-bold text-xl ml-2">₹9,999</span>
                                <span className="text-green-600 text-sm font-medium ml-2">(23% OFF)</span>
                            </div>
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <a href="#" className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 border-2 border-blue-600 rounded-full transition duration-300">
                    View All Packages <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>

    {/* <!-- Why Choose Us Section --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Himalayan Wanderlust</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">We go the extra mile to make your mountain experience unforgettable</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-map-marked-alt text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Our team consists of mountain experts who know every trail, every view point, and every hidden gem.</p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Safety First</h3>
                    <p className="text-gray-600">All our adventure activities follow strict safety protocols with certified equipment and trained guides.</p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-rupee-sign text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Best Value</h3>
                    <p className="text-gray-600">We offer premium experiences at competitive prices with no hidden costs.</p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-heart text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Travel</h3>
                    <p className="text-gray-600">We're committed to eco-friendly tourism that benefits local communities.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Gallery Section --> */}
    <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">A glimpse of the breathtaking experiences that await you</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="gallery-item rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580655653883-eb1a9de3a0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                         alt="Mountain View" className="w-full h-48 object-cover transition duration-300"/>
                </div>
                <div className="gallery-item rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80" 
                         alt="Valley" className="w-full h-48 object-cover transition duration-300"/>
                </div>
                <div className="gallery-item rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                         alt="River" className="w-full h-48 object-cover transition duration-300"/>
                </div>
                <div className="gallery-item rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                         alt="Monastery" className="w-full h-48 object-cover transition duration-300"/>
                </div>
                <div className="gallery-item rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1563906267088-b916b4508f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                         alt="Snow" className="w-full h-48 object-cover transition duration-300"/>
                </div>
                <div className="gallery-item rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                         alt="Road" className="w-full h-48 object-cover transition duration-300"/>
                </div>
                <div className="gallery-item rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580655653883-eb1a9de3a0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                         alt="Camping" className="w-full h-48 object-cover transition duration-300"/>
                </div>
                <div className="gallery-item rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80" 
                         alt="Village" className="w-full h-48 object-cover transition duration-300"/>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    View Full Gallery <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>

    {/* <!-- Testimonials Section --> */}
    <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Hear from adventurers who've experienced the magic with us</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div className="testimonial-card bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah" className="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Sarah K.</h4>
                                <div className="flex items-center text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">"The Leh-Ladakh bike tour was the adventure of a lifetime! The team took care of everything, from bike maintenance to accommodation. The landscapes were beyond anything I imagined."</p>
                    <div className="text-sm text-gray-500">July 2023 • Leh-Ladakh Bike Adventure</div>
                </div>
                
                {/* <!-- Testimonial 2 --> */}
                <div className="testimonial-card bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Raj" className="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Raj P.</h4>
                                <div className="flex items-center text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">"Our family trip to Shimla-Manali was perfectly organized. The kids loved the toy train and snow activities, while we appreciated the comfortable hotels and knowledgeable guides."</p>
                    <div className="text-sm text-gray-500">December 2022 • Shimla-Manali Family Escape</div>
                </div>
                
                {/* <!-- Testimonial 3 --> */}
                <div className="testimonial-card bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Priya" className="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Priya M.</h4>
                                <div className="flex items-center text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">"The Rishikesh adventure package pushed me out of my comfort zone in the best way possible! The rafting was exhilarating and the yoga sessions by the Ganges were so peaceful."</p>
                    <div className="text-sm text-gray-500">March 2023 • Rishikesh Extreme Adventure</div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- CTA Section --> */}
    <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Himalayan Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Let us craft your perfect mountain getaway. Contact us today to start planning!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#contact" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-full transition duration-300">Get a Free Quote</a>
                <a href="tel:+919876543210" className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-bold py-3 px-6 rounded-full transition duration-300">
                    <i className="fas fa-phone-alt mr-2"></i> Call Us: +91 98765 43210
                </a>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Have questions or ready to book your adventure? Reach out to our team.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                        
                        <div className="mb-6">
                            <div className="flex items-start mb-4">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-map-marker-alt text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Our Office</h4>
                                    <p className="text-gray-600">123 Mountain View Road, Manali, Himachal Pradesh 175131</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start mb-4">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-envelope text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Email Us</h4>
                                    <p className="text-gray-600">info@himalayanwanderlust.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <i className="fas fa-phone-alt text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Call Us</h4>
                                    <p className="text-gray-600">+91 98765 43210 (10AM - 7PM)</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-gray-800 mb-3">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <form className="bg-gray-50 p-6 rounded-xl">
                            <div className="mb-4">
                                <label for="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            
                            <div className="mb-4">
                                <label for="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            
                            <div className="mb-4">
                                <label for="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            
                            <div className="mb-4">
                                <label for="interest" className="block text-gray-700 font-medium mb-2">Tour Interest</label>
                                <select id="interest" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select an option</option>
                                    <option value="leh-ladakh">Leh-Ladakh</option>
                                    <option value="shimla-manali">Shimla-Manali</option>
                                    <option value="rishikesh">Rishikesh</option>
                                    <option value="other">Other Destination</option>
                                </select>
                            </div>
                            
                            <div className="mb-4">
                                <label for="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                                Send Message <i className="fas fa-paper-plane ml-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <i className="fas fa-mountain text-3xl text-blue-500 mr-2"></i>
                        <span className="text-2xl font-bold">Himalayan Wanderlust</span>
                    </div>
                    <p className="text-gray-400 mb-4">Your trusted partner for unforgettable mountain adventures in North India.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                        <li><a href="#destinations" className="text-gray-400 hover:text-white transition duration-300">Destinations</a></li>
                        <li><a href="#packages" className="text-gray-400 hover:text-white transition duration-300">Packages</a></li>
                        <li><a href="#gallery" className="text-gray-400 hover:text-white transition duration-300">Gallery</a></li>
                        <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-bold mb-4">Popular Tours</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Leh-Ladakh Bike Adventure</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Shimla-Manali Family Escape</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Rishikesh Extreme Adventure</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Spiti Valley Jeep Safari</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Kashmir Great Lakes Trek</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                    <p className="text-gray-400 mb-4">Subscribe to get updates on new tours and special offers.</p>
                    <form className="flex">
                        <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-900 w-full"/>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2023 Himalayan Wanderlust. All rights reserved.</p>
            </div>
        </div>
    </footer>

    {/* <script>
        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('open');
            
            // Change icon
            const icon = this.querySelector('i');
            if (menu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                        const menuToggle = document.getElementById('menu-toggle');
                        const icon = menuToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Add shadow to header on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    </script> */}
    </>
  )
}
