import React, { useState, useEffect, useRef } from 'react';

const WebCalc = () => {
  // Service data with prices in dollars
  const mainServicesData = [
    {
      id: 1,
      name: "Custom Design",
      description: "Unique design from scratch",
      price: 13,
      type: "quantity",
      unit: "per hour",
      min: 0,
      icon: "fas fa-palette"
    },
    {
      id: 2,
      name: "Responsive Development",
      description: "Mobile-optimized development",
      price: 80,
      type: "toggle",
      icon: "fas fa-mobile-alt"
    },
    {
      id: 3,
      name: "CMS Integration",
      description: "WordPress integration",
      price: 107,
      type: "toggle",
      icon: "fab fa-wordpress"
    },
    {
      id: 4,
      name: "E-commerce Setup",
      description: "Online store development",
      price: 240,
      type: "toggle",
      icon: "fas fa-shopping-cart",
      additional: {
        type: "quantity",
        label: "Products",
        price: 7,
        unit: "per product",
        min: 0
      }
    },
    {
      id: 5,
      name: "SEO Basic Setup",
      description: "Search engine optimization",
      price: 47,
      type: "toggle",
      icon: "fas fa-search"
    },
    {
      id: 6,
      name: "Hosting with SSL",
      description: "Website hosting with SSL",
      price: 7,
      type: "hosting",
      unit: "per month",
      min: 1,
      icon: "fas fa-server",
      sslOptions: [
        { label: "Free SSL", value: 0, default: true },
        { label: "Managed SSL", value: 16 }
      ]
    }
  ];

  const additionalServicesData = [
    {
      id: 7,
      name: "Content Writing",
      description: "Professional content creation",
      price: 3,
      type: "quantity",
      unit: "per page",
      min: 0,
      icon: "fas fa-pen"
    },
    {
      id: 8,
      name: "Speed Optimization",
      description: "Performance optimization",
      price: 60,
      type: "toggle",
      icon: "fas fa-tachometer-alt"
    },
    {
      id: 9,
      name: "Social Media Integration",
      description: "Connect social media platforms",
      price: 27,
      type: "toggle",
      icon: "fas fa-share-alt"
    },
    {
      id: 10,
      name: "Payment Gateway",
      description: "Online payment integration",
      price: 67,
      type: "toggle",
      icon: "fas fa-credit-card"
    },
    {
      id: 11,
      name: "Blog Setup",
      description: "Blog section with CMS",
      price: 40,
      type: "toggle",
      icon: "fas fa-blog"
    },
    {
      id: 12,
      name: "Multilingual Support",
      description: "Multiple language support",
      price: 53,
      type: "toggle",
      icon: "fas fa-language"
    },
    {
      id: 13,
      name: "Advanced Analytics",
      description: "Detailed analytics setup",
      price: 33,
      type: "toggle",
      icon: "fas fa-chart-line"
    },
    {
      id: 14,
      name: "Maintenance Package",
      description: "Ongoing website maintenance",
      price: 27,
      type: "maintenance",
      unit: "per month",
      min: 1,
      icon: "fas fa-tools"
    },
    {
      id: 15,
      name: "Security Setup",
      description: "Advanced security features",
      price: 47,
      type: "toggle",
      icon: "fas fa-shield-alt"
    },
    {
      id: 16,
      name: "Custom Forms",
      description: "Advanced form development",
      price: 20,
      type: "quantity",
      unit: "per form",
      min: 0,
      icon: "fas fa-list-alt"
    },
    {
      id: 17,
      name: "API Integration",
      description: "Third-party API integration",
      price: 60,
      type: "toggle",
      icon: "fas fa-code"
    },
    {
      id: 18,
      name: "Database Setup",
      description: "Custom database design",
      price: 80,
      type: "toggle",
      icon: "fas fa-database"
    },
    {
      id: 19,
      name: "Email Marketing",
      description: "Email campaign setup",
      price: 40,
      type: "toggle",
      icon: "fas fa-envelope"
    },
    {
      id: 20,
      name: "Branding Package",
      description: "Logo and brand identity",
      price: 67,
      type: "toggle",
      icon: "fas fa-paint-brush"
    }
  ];

  // App state
  const [packageType, setPackageType] = useState("full");
  const [pages, setPages] = useState(7);
  const [services, setServices] = useState(
    mainServicesData.map(service => ({
      ...service,
      selected: false,
      quantity: service.min || 0,
      selectedOption: service.options ? 
        (service.options.find(opt => opt.default)?.value || service.options[0].value) : null,
      months: 12,
      sslOption: service.sslOptions ? 
        (service.sslOptions.find(opt => opt.default)?.value || service.sslOptions[0].value) : null
    }))
  );
  const [additionalServices, setAdditionalServices] = useState(
    additionalServicesData.map(service => ({
      ...service,
      selected: false,
      quantity: service.min || 0,
      selectedOption: service.options ? 
        (service.options.find(opt => opt.default)?.value || service.options[0].value) : null,
      months: 12,
      sslOption: service.sslOptions ? 
        (service.sslOptions.find(opt => opt.default)?.value || service.sslOptions[0].value) : null
    }))
  );
  const [showAddServicesModal, setShowAddServicesModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countdown, setCountdown] = useState(5);
  
  const [contactInfo, setContactInfo] = useState({
    name: "",
    business: "",
    phone: "",
    email: ""
  });

  const gstRate = 18;
  const discountAmount = 0;

  // Calculate totals
  const calculateServiceTotal = (service) => {
    let serviceTotal = 0;
    
    if (!service.selected && service.type !== "quantity") return 0;
    
    switch(service.type) {
      case "quantity":
        serviceTotal = service.price * service.quantity;
        break;
        
      case "toggle":
      case "maintenance":
        serviceTotal = service.selected ? service.price : 0;
        break;
        
      case "hosting":
        serviceTotal = (service.price * service.months) + service.sslOption;
        break;
    }
    
    // Add additional costs (like e-commerce products)
    if (service.additional && service.selected) {
      serviceTotal += service.additional.price * service.quantity;
    }
    
    return serviceTotal;
  };

  const packageCost = packageType === "landing" ? 67 : 200;
  const pagesCost = packageType === "full" ? (Math.max(0, pages - 7)) * 16 : 0;
  
  const servicesCost = services.reduce((total, service) => {
    return total + calculateServiceTotal(service);
  }, 0);
  
  const additionalServicesCost = additionalServices.reduce((total, service) => {
    return total + calculateServiceTotal(service);
  }, 0);
  
  const subtotal = packageCost + pagesCost + servicesCost + additionalServicesCost;
  const gstAmount = subtotal * (gstRate / 100);
  const total = subtotal + gstAmount - discountAmount;

  // Handle package selection
  const handlePackageSelect = (pkg) => {
    setPackageType(pkg);
    if (pkg === "landing") {
      setPages(1);
    } else {
      setPages(7);
    }
  };

  // Handle page count change
  const handlePagesChange = (value) => {
    if (packageType === "full") {
      const newValue = Math.max(7, value);
      setPages(newValue);
    }
  };

  // Handle service selection
  const handleServiceSelect = (serviceId, isAdditional = false) => {
    if (isAdditional) {
      setAdditionalServices(prev => prev.map(service => 
        service.id === serviceId 
          ? { ...service, selected: !service.selected }
          : service
      ));
    } else {
      setServices(prev => prev.map(service => 
        service.id === serviceId 
          ? { ...service, selected: !service.selected }
          : service
      ));
    }
  };

  // Handle quantity change
  const handleQuantityChange = (serviceId, newQuantity, isAdditional = false, isAdditionalField = false) => {
    const updateService = (service) => {
      if (isAdditionalField) {
        return { ...service, quantity: newQuantity };
      } else if (service.type === "quantity") {
        return { ...service, quantity: newQuantity };
      } else if (service.additional) {
        return { ...service, quantity: newQuantity };
      }
      return service;
    };

    if (isAdditional) {
      setAdditionalServices(prev => prev.map(service => 
        service.id === serviceId ? updateService(service) : service
      ));
    } else {
      setServices(prev => prev.map(service => 
        service.id === serviceId ? updateService(service) : service
      ));
    }
  };

  // Handle months change
  const handleMonthsChange = (serviceId, newMonths, isAdditional = false) => {
    if (isAdditional) {
      setAdditionalServices(prev => prev.map(service => 
        service.id === serviceId ? { ...service, months: newMonths } : service
      ));
    } else {
      setServices(prev => prev.map(service => 
        service.id === serviceId ? { ...service, months: newMonths } : service
      ));
    }
  };

  // Handle SSL option change
  const handleSslOptionChange = (serviceId, newValue, isAdditional = false) => {
    if (isAdditional) {
      setAdditionalServices(prev => prev.map(service => 
        service.id === serviceId ? { ...service, sslOption: parseInt(newValue) } : service
      ));
    } else {
      setServices(prev => prev.map(service => 
        service.id === serviceId ? { ...service, sslOption: parseInt(newValue) } : service
      ));
    }
  };

  // Generate PDF
  const generatePDF = (contactInfo) => {
    // This would typically use a PDF generation library
    // For now, we'll just log the data
    console.log("Generating PDF for:", contactInfo);
    console.log("Quote details:", {
      packageType,
      pages,
      services: services.filter(s => calculateServiceTotal(s) > 0),
      additionalServices: additionalServices.filter(s => calculateServiceTotal(s) > 0),
      subtotal,
      gstAmount,
      total
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF(contactInfo);
    setShowContactModal(false);
    setShowSuccessModal(true);
    
    // Start countdown
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          // Redirect to home page
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Render service card
  const ServiceCard = ({ service, isAdditional = false }) => {
    const handleQuantityIncrease = () => {
      const currentValue = service.quantity || service.min || 0;
      handleQuantityChange(service.id, currentValue + 1, isAdditional);
    };

    const handleQuantityDecrease = () => {
      const currentValue = service.quantity || service.min || 0;
      if (currentValue > (service.min || 0)) {
        handleQuantityChange(service.id, currentValue - 1, isAdditional);
      }
    };

    const handleAdditionalQuantityIncrease = () => {
      const currentValue = service.quantity || 1;
      handleQuantityChange(service.id, currentValue + 1, isAdditional, true);
    };

    const handleAdditionalQuantityDecrease = () => {
      const currentValue = service.quantity || 1;
      if (currentValue > (service.additional?.min || 0)) {
        handleQuantityChange(service.id, currentValue - 1, isAdditional, true);
      }
    };

    const handleMonthsChangeLocal = (e) => {
      handleMonthsChange(service.id, parseInt(e.target.value), isAdditional);
    };

    const handleSslChange = (e) => {
      handleSslOptionChange(service.id, e.target.value, isAdditional);
    };

    return (
      <div 
        className={`card p-4 service-card transition-all duration-200 ${service.selected ? 'service-selected' : ''}`}
        onClick={() => {
          if (service.type === "toggle" || service.type === "maintenance") {
            handleServiceSelect(service.id, isAdditional);
          }
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full yellow-bg flex items-center justify-center mr-3">
              <i className={`${service.icon} text-white`}></i>
            </div>
            <h3 className="font-semibold">{service.name}</h3>
          </div>
          <p className="text-sm text-gray-400 mb-2 flex-grow">{service.description}</p>
          <p className="text-sm text-amber-400 mb-2">${service.price} {service.unit || ''}</p>
          
          {/* Quantity Control */}
          {service.type === "quantity" && (
            <div className="quantity-control mt-2">
              <button className="quantity-btn decrease-quantity" onClick={handleQuantityDecrease}>-</button>
              <input 
                type="number" 
                min={service.min || 0} 
                value={service.quantity} 
                className="quantity-input" 
                onChange={(e) => handleQuantityChange(service.id, parseInt(e.target.value) || service.min || 0, isAdditional)}
              />
              <button className="quantity-btn increase-quantity" onClick={handleQuantityIncrease}>+</button>
            </div>
          )}
          
          {/* Toggle Control */}
          {(service.type === "toggle" || service.type === "maintenance") && (
            <label className="inline-flex items-center cursor-pointer mt-2">
              <input 
                type="checkbox" 
                checked={service.selected}
                onChange={() => {}} // Handled by parent div click
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-700 peer-focus:ring-amber-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
              <span className="ml-2 text-sm">{service.selected ? 'Yes' : 'No'}</span>
            </label>
          )}
          
          {/* Hosting Control */}
          {service.type === "hosting" && (
            <div className="space-y-2 mt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label className="mr-2 text-sm text-gray-400">Months:</label>
                  <input 
                    type="number" 
                    min={service.min || 1} 
                    value={service.months} 
                    className="w-16 px-2 py-1 rounded number-input text-center"
                    onChange={handleMonthsChangeLocal}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-400 mr-2">SSL:</span>
                <select 
                  className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm"
                  value={service.sslOption}
                  onChange={handleSslChange}
                >
                  {service.sslOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          
          {/* Maintenance Control */}
          {service.type === "maintenance" && service.selected && (
            <div className="flex items-center mt-2">
              <label className="mr-2 text-sm text-gray-400">Months:</label>
              <input 
                type="number" 
                min={service.min || 1} 
                value={service.months} 
                className="w-16 px-2 py-1 rounded number-input text-center"
                onChange={handleMonthsChangeLocal}
              />
            </div>
          )}
          
          {/* Additional Controls (e.g., e-commerce products) */}
          {service.additional && service.selected && (
            <div className="mt-2 flex items-center">
              <label className="mr-2 text-sm text-gray-400">{service.additional.label}:</label>
              <div className="quantity-control">
                <button className="quantity-btn decrease-additional" onClick={handleAdditionalQuantityDecrease}>-</button>
                <input 
                  type="number" 
                  min={service.additional.min || 0} 
                  value={service.quantity || 1} 
                  className="quantity-input" 
                  onChange={(e) => handleQuantityChange(
                    service.id, 
                    parseInt(e.target.value) || service.additional.min || 0, 
                    isAdditional, 
                    true
                  )}
                />
                <button className="quantity-btn increase-additional" onClick={handleAdditionalQuantityIncrease}>+</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render selected services list
  const renderSelectedServices = () => {
    const selectedItems = [];
    
    // Package
    const packageName = packageType === "landing" ? "Landing Page" : "Full Website (7 pages)";
    selectedItems.push(
      <div key="package" className="flex justify-between text-sm">
        <span>{packageName}</span>
        <span>${packageCost.toLocaleString()}</span>
      </div>
    );
    
    // Additional pages
    if (packageType === "full" && pages > 7) {
      const pagesCost = (pages - 7) * 16;
      selectedItems.push(
        <div key="pages" className="flex justify-between text-sm">
          <span>Additional Pages ({pages - 7})</span>
          <span>${pagesCost.toLocaleString()}</span>
        </div>
      );
    }
    
    // Main services
    services.forEach(service => {
      const serviceTotal = calculateServiceTotal(service);
      if (serviceTotal > 0) {
        selectedItems.push(
          <div key={`main-${service.id}`} className="flex justify-between text-sm">
            <span>{service.name}</span>
            <span>${serviceTotal.toLocaleString()}</span>
          </div>
        );
      }
    });
    
    // Additional services
    additionalServices.forEach(service => {
      const serviceTotal = calculateServiceTotal(service);
      if (serviceTotal > 0) {
        selectedItems.push(
          <div key={`additional-${service.id}`} className="flex justify-between text-sm">
            <span>{service.name}</span>
            <span>${serviceTotal.toLocaleString()}</span>
          </div>
        );
      }
    });
    
    if (selectedItems.length === 0) {
      return (
        <div className="text-gray-400 text-sm text-center py-4">
          No services selected yet
        </div>
      );
    }
    
    return selectedItems;
  };

  // Input validation for contact form
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z ]/g, '');
    setContactInfo(prev => ({ ...prev, name: value }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setContactInfo(prev => ({ ...prev, phone: value }));
  };

  const handleBusinessChange = (e) => {
    setContactInfo(prev => ({ ...prev, business: e.target.value }));
  };

  const handleEmailChange = (e) => {
    setContactInfo(prev => ({ ...prev, email: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <div className="w-full h-full px-4 py-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Web Design Quote Calculator</h1>
          <p className="text-gray-400 text-lg">Select your requirements to get an estimated quote</p>
        </header>
        
        <main id="main-content" className="h-[calc(100%-120px)]">
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* Left Column - Services */}
            <div className="lg:w-7/12 h-full overflow-y-auto custom-scroll">
              {/* Website Package Selection */}
              <section className="card p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Website Package</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    className={`package-option card p-4 flex items-center space-x-4 ${packageType === "landing" ? "selected" : ""}`}
                    onClick={() => handlePackageSelect("landing")}
                  >
                    <div className="w-12 h-12 rounded-full yellow-bg flex items-center justify-center">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Landing Page</h3>
                      <p className="text-sm text-gray-400">Single page website</p>
                    </div>
                    <div className="text-amber-400 font-bold">$67</div>
                  </div>
                  
                  <div 
                    className={`package-option card p-4 flex items-center space-x-4 ${packageType === "full" ? "selected" : ""}`}
                    onClick={() => handlePackageSelect("full")}
                  >
                    <div className="w-12 h-12 rounded-full yellow-bg flex items-center justify-center">
                      <i className="fas fa-globe text-white"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Full Website</h3>
                      <p className="text-sm text-gray-400">7 pages included</p>
                    </div>
                    <div className="text-amber-400 font-bold">$200</div>
                  </div>
                </div>
              </section>
              
              {/* Number of Pages Control */}
              <section className="card p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Number of Pages</h2>
                    <p className="text-gray-400 text-sm">Additional pages beyond included ones</p>
                    {packageType === "landing" && (
                      <p className="text-xs text-amber-400 mt-1">Landing page includes only 1 page</p>
                    )}
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-4">
                    <div className={`quantity-control ${packageType === "landing" ? "pages-control-disabled" : ""}`}>
                      <button 
                        className="quantity-btn decrease-pages"
                        onClick={() => handlePagesChange(pages - 1)}
                        disabled={packageType === "landing" || pages <= 7}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        id="pages-count" 
                        min={packageType === "landing" ? 1 : 7} 
                        value={pages} 
                        className="quantity-input"
                        onChange={(e) => handlePagesChange(parseInt(e.target.value) || (packageType === "landing" ? 1 : 7))}
                        disabled={packageType === "landing"}
                      />
                      <button 
                        className="quantity-btn increase-pages"
                        onClick={() => handlePagesChange(pages + 1)}
                        disabled={packageType === "landing"}
                      >
                        +
                      </button>
                    </div>
                    <div className="text-gray-400 text-sm">($16 per page)</div>
                  </div>
                </div>
              </section>
              
              {/* Main Services Grid */}
              <section className="card p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Main Services</h2>
                  <button 
                    onClick={() => setShowAddServicesModal(true)}
                    className="text-amber-400 hover:text-amber-300 flex items-center"
                  >
                    <i className="fas fa-plus mr-2"></i> Add More Services
                  </button>
                </div>
                <div className="services-grid">
                  {services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </section>
            </div>
            
            {/* Right Column - Summary */}
            <div className="lg:w-5/12">
              <div className="card p-6 sticky top-6 h-full">
                <h2 className="text-xl font-semibold mb-4">Your Estimated Quote</h2>
                
                <div className="space-y-4 mb-6 h-[calc(100%-160px)] overflow-y-auto custom-scroll">
                  <div className="space-y-2">
                    {renderSelectedServices()}
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="font-medium">${subtotal.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>GST (18%):</span>
                      <span className="font-medium">${gstAmount.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Discount:</span>
                      <span className="font-medium text-green-400">-${discountAmount.toLocaleString()}</span>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-amber-400">${total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="w-full py-3 black-button font-bold rounded-lg transition-colors pay-button flex items-center justify-center disabled:bg-gray-600 disabled:cursor-not-allowed"
                  disabled={total <= 0}
                >
                  <i className="fas fa-paper-plane mr-2"></i> Submit Quote
                </button>
                
                <div className="text-xs text-gray-400 mt-4 text-center">
                  <p>This is an estimate. Contact us for a detailed quote.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Add More Services Modal */}
      {showAddServicesModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold">Add More Services</h3>
              <button 
                onClick={() => setShowAddServicesModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="additional-services-grid custom-scroll">
              {additionalServices.map(service => (
                <ServiceCard key={service.id} service={service} isAdditional={true} />
              ))}
            </div>
            
            <div className="flex justify-end p-6 border-t border-gray-700">
              <button 
                onClick={() => setShowAddServicesModal(false)}
                className="px-6 py-2 black-button rounded-lg transition-colors"
              >
                Save Selection
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay">
          <div className="modal-content max-w-md">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="user-name" className="block text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="user-name" 
                  required
                  placeholder="John Doe"
                  pattern="[A-Za-z ]+"
                  title="Please enter only alphabetic characters"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={contactInfo.name}
                  onChange={handleNameChange}
                />
                <p className="text-xs text-gray-400 mt-1">Only alphabetic characters and spaces allowed</p>
              </div>
              
              <div>
                <label htmlFor="business-name" className="block text-sm font-medium mb-1">Business Name</label>
                <input 
                  type="text" 
                  id="business-name" 
                  required
                  placeholder="Your Business Inc."
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={contactInfo.business}
                  onChange={handleBusinessChange}
                />
              </div>
              
              <div>
                <label htmlFor="user-phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="user-phone" 
                  required
                  placeholder="1234567890"
                  pattern="[0-9]+"
                  title="Please enter only numbers"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={contactInfo.phone}
                  onChange={handlePhoneChange}
                />
                <p className="text-xs text-gray-400 mt-1">Only numbers allowed (no symbols, spaces, or decimals)</p>
              </div>
              
              <div>
                <label htmlFor="user-email" className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="user-email" 
                  required
                  placeholder="john@example.com"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  value={contactInfo.email}
                  onChange={handleEmailChange}
                />
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full px-4 py-3 black-button rounded-lg transition-colors font-medium">
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content max-w-md text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-300 mb-2">Thank you for your custom plan! Your request is submitted and our team will contact you soon.</p>
              <p className="text-gray-300 mb-4">
                in <span>{countdown}</span> seconds you will be redirected to home page
              </p>
              <button 
                onClick={() => {
                  setShowSuccessModal(false);
                  window.location.href = '/';
                }}
                className="px-6 py-2 black-button rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :root {
          --primary-bg: #0f1419;
          --card-bg: #1a1f2e;
          --accent: #fbbf24;
          --accent-hover: #f59e0b;
          --text-primary: #f8fafc;
          --text-secondary: #94a3b8;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--primary-bg);
          color: var(--text-primary);
          overflow-x: hidden;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
        }
        
        .card {
          background-color: var(--card-bg);
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .service-card:hover {
          transform: translateY(-2px);
          transition: transform 0.2s ease;
        }
        
        .number-input {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }
        
        .pay-button {
          transition: all 0.2s ease;
        }
        
        .pay-button:hover:not(:disabled) {
          transform: scale(1.03);
        }
        
        .pay-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .fade-in {
          animation: fadeIn 0.3s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .counter-animation {
          transition: all 0.3s ease;
        }
        
        /* Focus styles for accessibility */
        input:focus, textarea:focus, select:focus, button:focus {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }
        
        /* Skip link for accessibility */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: var(--accent);
          color: white;
          padding: 8px;
          z-index: 100;
          text-decoration: none;
          border-radius: 4px;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        /* Grid layout for services */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        
        /* Additional services grid */
        .additional-services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          max-height: 70vh;
          overflow-y: auto;
          padding: 1rem;
        }
        
        /* Custom scrollbar */
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        .custom-scroll::-webkit-scrollbar-thumb {
          background: var(--accent);
          border-radius: 10px;
        }
        
        /* Quantity controls */
        .quantity-control {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .quantity-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--accent);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
        }
        
        .quantity-btn:hover {
          background-color: var(--accent-hover);
          transform: scale(1.1);
        }
        
        .quantity-input {
          width: 50px;
          text-align: center;
          margin: 0 8px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          border-radius: 4px;
          padding: 4px;
        }
        
        /* Selected service styling */
        .service-selected {
          border: 2px solid var(--accent);
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.2);
        }
        
        /* Package selection */
        .package-option {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .package-option.selected {
          background-color: rgba(251, 191, 36, 0.15);
          border: 2px solid var(--accent);
        }
        
        /* Modal styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 1rem;
        }
        
        .modal-content {
          background-color: var(--card-bg);
          border-radius: 0.75rem;
          width: 100%;
          max-width: 1200px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .additional-services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .additional-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .additional-services-grid {
            grid-template-columns: 1fr;
          }
        }
        
        /* Yellow background with white icons and black text */
        .yellow-bg {
          background-color: var(--accent);
        }
        
        .yellow-bg .text-white {
          color: #000;
        }
        
        .yellow-bg h3, .yellow-bg p {
          color: #000;
        }
        
        /* Pages control disabled state */
        .pages-control-disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        
        /* Black buttons */
        .black-button {
          background-color: #000000;
          color: white;
        }
        
        .black-button:hover {
          background-color: #333333;
        }
      `}</style>
    </div>
  );
};

export default WebCalc;