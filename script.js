// Global variables
let currentPage = 'home';
let paymentData = JSON.parse(localStorage.getItem('paymentData')) || [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the website
    initWebsite();

    // Hide loading screen after 1.5 seconds
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading').classList.add('hidden');
        }, 500);
    }, 1500);
});

// Initialize website
function initWebsite() {
    loadNavigation();
    loadFooter();
    loadPage('home');

    // Set up service worker for PWA (optional)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .catch(err => console.log('Service Worker registration failed: ', err));
    }
}

// Load navigation
function loadNavigation() {
    const header = document.getElementById('header');

    header.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <div class="nav-container">
                    <a href="#" class="logo" onclick="loadPage('home'); return false;">
                        <i class="fas fa-code"></i>
                        <span>Android<span class="highlight">Mastery</span></span>
                    </a>
                    
                    <button class="menu-toggle" id="menuToggle">
                        <i class="fas fa-bars"></i>
                    </button>
                    
                    <ul class="nav-menu" id="navMenu">
                        <li><a href="#" onclick="loadPage('home'); return false;" class="nav-link active">Home</a></li>
                        <li><a href="#" onclick="loadPage('services'); return false;" class="nav-link">Services</a></li>
                        <li><a href="#" onclick="loadPage('contact'); return false;" class="nav-link">Contact</a></li>
                        <li><a href="#" onclick="loadPage('checkout'); return false;" class="nav-link btn btn-accent">Get Help Now</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    // Add event listeners for mobile menu
    document.getElementById('menuToggle').addEventListener('click', toggleMobileMenu);
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.getElementById('navMenu').classList.remove('active');
            }
        });
    });
}

// Load footer
function loadFooter() {
    const footer = document.getElementById('footer');

    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><i class="fas fa-code"></i> Android<span style="color: #00c853" class="highlight">Mastery</span></h3>
                    <p>Expert Android & Flutter development support for students and professionals.</p>
                    <div class="social-links">
                        <a href="https://github.com/ashik360/"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/ashik360/"><i class="fab fa-linkedin"></i></a>
                        <a href="https://www.t.me/ashik360/"><i class="fab fa-telegram"></i></a>
                        <a href="https://www.discord.com/ashik360/"><i class="fab fa-discord"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#" onclick="loadPage('home'); return false;">Home</a></li>
                        <li><a href="#" onclick="loadPage('services'); return false;">Services</a></li>
                        <li><a href="#" onclick="loadPage('contact'); return false;">Contact</a></li>
                        <li><a href="#" onclick="loadPage('checkout'); return false;">Get Help</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Android Development</a></li>
                        <li><a href="#">Flutter Projects</a></li>
                        <li><a href="#">Code Review</a></li>
                        <li><a href="#">Assignment Help</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <ul class="contact-info">
                        <li><i class="fas fa-envelope"></i> ashik4745@gmail.com</li>
                        <li><i class="fas fa-phone"></i> +880 1795-853197</li>
                        <li><i class="fas fa-map-marker-alt"></i> University Tech Campus</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} AndroidMastery. All rights reserved. | <a href="#" onclick="loadPage('admin'); return false;">Admin</a></p>
            </div>
        </div>
    `;
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Page loading function
function loadPage(page) {
    currentPage = page;
    const mainContent = document.getElementById('main-content');

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.textContent.toLowerCase().includes(page) ||
            (page === 'home' && link.textContent === 'Home')) {
            link.classList.add('active');
        }
    });

    // Load page content
    switch (page) {
        case 'home':
            loadHomePage();
            break;
        case 'services':
            loadServicesPage();
            break;
        case 'contact':
            loadContactPage();
            break;
        case 'checkout':
            loadOrderPage();
            break;
        case 'admin':
            loadAdminPage();
            break;
        default:
            loadHomePage();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Placeholder for page loading functions
function loadHomePage() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = `
        <!-- Hero Section -->
        <section class="hero-alt fade-in">
            <div class="container">
                <div class="hero-grid">
                    <div class="hero-intro">
                        <h1><span>Elevate</span> Your Android & Flutter Skills</h1>
                        <p>Learn smarter, build faster, and stand out as a developer. Get mentorship, resources, and real-world project guidance tailored to your journey.</p>
                        <div class="hero-actions">
                            <a href="#" class="btn btn-primary" onclick="loadPage('checkout'); return false;">
                                <i class="fas fa-graduation-cap"></i> Start Learning
                            </a>
                            <a target="_blank" class="btn btn-outline" href='https://ashik360.github.io';">
                                <i class="fas fa-briefcase"></i> Explore Portfolio
                            </a>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="assets/hero_image.png" alt="Learning Illustration" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="services">
            <div class="container">
                <h2>Our Expertise</h2>
                <div class="services-grid">
                    <div class="service-card">
                        <i class="fas fa-code"></i>
                        <h3>Code Reviews</h3>
                        <p>Detailed feedback to improve your code quality and efficiency.</p>
                    </div>
                    <div class="service-card">
                        <i class="fas fa-lightbulb"></i>
                        <h3>Project Mentorship</h3>
                        <p>Step-by-step guidance to help you build apps that shine.</p>
                    </div>
                    <div class="service-card">
                        <i class="fas fa-users"></i>
                        <h3>Community Support</h3>
                        <p>Join a network of learners and professionals for collaboration.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials">
        <div class="container">
            <h2>What Students Say</h2>
            <div class="testimonial-slider">
            <div class="testimonial active">
                <p>"I went from confused to confident in just weeks. Highly recommend!"</p>
                <span>- Sarah, CS Student</span>
            </div>
            <div class="testimonial">
                <p>"The mentorship helped me land my first internship. Truly invaluable."</p>
                <span>- Ahmed, Junior Developer</span>
            </div>
            <div class="testimonial">
                <p>"Clear explanations and practical projects made learning fun and effective."</p>
                <span>- Provat, App Enthusiast</span>
            </div>
            </div>

            <!-- Dots -->
            <div class="testimonial-dots">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            </div>
        </div>
        </section>


        <!-- Facts Section (Improved) -->
        <section class="facts-alt">
            <div class="container">
                <h2 class="facts-title">Our Impact in Numbers</h2>

                <div class="facts-grid">
                    <div class="fact-card">
                        <i class="fas fa-user-graduate fact-icon"></i>
                        <h3><span class="fact-number" data-target="50">0</span></h3>
                        <p>Students Mentored</p>
                    </div>

                    <div class="fact-card">
                        <i class="fas fa-mobile-alt fact-icon"></i>
                        <h3><span class="fact-number" data-target="80">0</span>+</h3>
                        <p>Apps Built</p>
                    </div>

                    <div class="fact-card">
                        <i class="fas fa-chart-line fact-icon"></i>
                        <h3><span class="fact-number" data-target="95">0</span>%</h3>
                        <p>Success Rate</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Call to Action -->
        <section class="cta-alt">
            <div class="container">
                <h2 style="color: #fff">Get Your Project Done With Perfections</h2>
                <p>Don’t just learn — transform your career with expert guidance and hands-on experience.</p>
                <a href="#" class="btn btn-primary" onclick="loadPage('checkout'); return false;">
                    Join Now <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </section>
    `;
    animateFacts();
}

function animateFacts() {
    const numbers = document.querySelectorAll(".fact-number");

    function runAnimation(num) {
        const target = +num.getAttribute("data-target");
        const step = target / 80; // smoother speed
        let count = 0;

        function update() {
            count += step;
            if (count >= target) {
                num.textContent = target;
            } else {
                num.textContent = Math.floor(count);
                requestAnimationFrame(update);
            }
        }

        setTimeout(() => {   // small delay for nicer effect
            update();
        }, 200);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const nums = entry.target.querySelectorAll(".fact-number");

                nums.forEach(num => {
                    num.textContent = "0"; // restart each time
                    runAnimation(num);
                });
            }
        });
    }, { threshold: 0.4 });

    observer.observe(document.querySelector('.facts-alt'));
}




function loadFeatures() {
    const featuresGrid = document.getElementById('featuresGrid');
    if (!featuresGrid) return;

    const features = [
        {
            icon: 'fas fa-code',
            title: 'Expert Code Reviews',
            description: 'Get detailed feedback on your Android/Flutter code with best practices and optimization tips.'
        },
        {
            icon: 'fas fa-project-diagram',
            title: 'Project Assistance',
            description: 'Complete help with your semester projects, assignments, and final year projects.'
        },
        {
            icon: 'fas fa-clock',
            title: '24/7 Support',
            description: 'Round-the-clock assistance for urgent deadlines and last-minute help.'
        },
        {
            icon: 'fas fa-graduation-cap',
            title: 'Concept Clarification',
            description: 'Clear explanations of complex Android & Flutter concepts in simple terms.'
        },
        {
            icon: 'fas fa-mobile-alt',
            title: 'UI/UX Design Help',
            description: 'Professional guidance on creating beautiful, responsive mobile interfaces.'
        },
        {
            icon: 'fas fa-database',
            title: 'Backend Integration',
            description: 'Help with Firebase, APIs, databases, and other backend services.'
        }
    ];

    featuresGrid.innerHTML = features.map((feature, index) => `
        <div class="feature-card animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s">
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');

    // Add animation on scroll
    animateOnScroll();
}

/* Add scroll animation function */
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll, .feature-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
}

function loadOrderPage() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = `
        <section class="services-hero fade-in">
            <div class="container">
                <h1>Expert Android & Flutter Services</h1>
                <p>Choose from our flexible service plans designed specifically for students. Get the help you need to excel in your Android app development course.</p>
            </div>
        </section>
        
        <section class="pricing-section">
            <div class="pricing-container">
                <h2>Choose Your Plan</h2>
                <p class="text-center" style="max-width: 700px; margin: 0 auto 30px; color: var(--light-text);">Select the perfect plan for your needs. All plans include 24/7 support and code reviews.</p>
                
                <div class="pricing-grid" id="pricingGrid">
                    <!-- Pricing cards will be loaded here -->
                </div>
            </div>
        </section>

        <!-- NEW: PAYMENT + FORM SECTION (same as checkout page) -->
        <section class="checkout-section">
            <div class="container">

                <div id="paymentInstructions" class="payment-instructions" style="display:none;">
                    <h2>Payment Instructions</h2>
                    <p>You have selected: <strong id="selectedPackageName"></strong></p>
                    <p>Amount Due: <strong id="selectedPackagePrice"></strong></p>

                    <div class="instruction-grid">

                        <!-- Send Money -->
                        <div class="instruction-box">
                            <h3>Send Money via bKash</h3>
                            <p>1. Open your bKash app or dial *247#</p>
                            <p>2. Select <strong>Send Money</strong></p>
                            <p>3. Enter this number: <strong>01795853197 (bKash Personal)</strong></p>
                            <p>4. Enter the amount <strong class="selectedPackagePrice"></strong></p>
                            <p>5. Enter reference as your Student ID Eg. 19-025</p>
                            <p>6. Confirm the transaction</p>
                        </div>

                        <!-- Cash In -->
                        <div class="instruction-box">
                            <h3>Cash In via Agent</h3>
                            <p>1. Visit your nearest bKash Agent</p>
                            <p>2. Provide this number: <strong>01795853197 (bKash Personal)</strong></p>
                            <p>3. Give the agent the amount <strong class="selectedPackagePrice"></strong></p>
                            <p>4. Collect your receipt and confirm</p>
                        </div>
                    </div>

                    <!-- Important Notice -->
                    <div class="alert-box" style="background: #e8f5e9; border-left: 4px solid #4CAF50; padding: 15px; margin: 20px 0; border-radius: 5px;">
                        <p style="margin: 0; color: #2e7d32;">
                            <strong>Important:</strong> Complete the payment via bKash first, then fill out the form below to submit your payment details.
                        </p>
                    </div>

                    <!-- Google Form -->
                    <div id="googleFormContainer">
                        <div style="text-align: center; margin: 20px 0;">
                            <div class="loader" id="formLoader"></div>
                            <p>Loading payment form...</p>
                        </div>
                    </div>

                    <!-- Alternative instructions -->
                    <div class="alternative-instructions" style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: var(--border-radius);">
                        <h4 style="margin-bottom: 10px;">If the form doesn't load:</h4>
                        <p style="margin-bottom: 10px;">1. Click <a href="https://forms.gle/hxYGtNxX8tkzhCMt5" target="_blank">here to open the form in a new tab</a></p>
                        <p>2. Or send your details to: <a target="_blank" href="https://wa.me/+8801795853197">WhatsApp Inbox</a></p>
                    </div>

                </div>
            </div>
        </section>

    `;

    setTimeout(() => {
        loadPricingCards();
        loadFAQ();
        animateOnScroll();

        // load the Google Form also on services page
        loadGoogleForm();
    }, 100);
}
function loadServicesPage() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = `
        <section class="services-hero fade-in">
            <div class="container">
                <h1>Expert Android & Flutter Services</h1>
                <p>Choose from our flexible service plans designed specifically for students. Get the help you need to excel in your Android app development course.</p>
            </div>
        </section>
        
        <section class="pricing-section">
            <div class="pricing-container">
                <h2>Choose Your Plan</h2>
                <p class="text-center" style="max-width: 700px; margin: 0 auto 30px; color: var(--light-text);">Select the perfect plan for your needs. All plans include 24/7 support and code reviews.</p>
                
                <div class="pricing-grid" id="pricingGrid">
                    <!-- Pricing cards will be loaded here -->
                </div>
            </div>
        </section>

        <!-- NEW: PAYMENT + FORM SECTION (same as checkout page) -->
        <section class="checkout-section">
            <div class="container">

                <div id="paymentInstructions" class="payment-instructions" style="display:none;">
                    <h2>Payment Instructions</h2>
                    <p>You have selected: <strong id="selectedPackageName"></strong></p>
                    <p>Amount Due: <strong id="selectedPackagePrice"></strong></p>

                    <div class="instruction-grid">

                        <!-- Send Money -->
                        <div class="instruction-box">
                            <h3>Send Money via bKash</h3>
                            <p>1. Open your bKash app or dial *247#</p>
                            <p>2. Select <strong>Send Money</strong></p>
                            <p>3. Enter this number: <strong>01795853197 (bKash Personal)</strong></p>
                            <p>4. Enter the amount <strong class="selectedPackagePrice"></strong></p>
                            <p>5. Enter reference as your Student ID Eg. 19-025</p>
                            <p>6. Confirm the transaction</p>
                        </div>

                        <!-- Cash In -->
                        <div class="instruction-box">
                            <h3>Cash In via Agent</h3>
                            <p>1. Visit your nearest bKash Agent</p>
                            <p>2. Provide this number: <strong>01795853197 (bKash Personal)</strong></p>
                            <p>3. Give the agent the amount <strong class="selectedPackagePrice"></strong></p>
                            <p>4. Collect agent mobile as your receipt</p>
                            <p>5. Fill Out the form bellow</p>
                            <p>6. Fill out the form and confirm</p>
                        </div>
                    </div>

                    <!-- Important Notice -->
                    <div class="alert-box" style="background: #e8f5e9; border-left: 4px solid #4CAF50; padding: 15px; margin: 20px 0; border-radius: 5px;">
                        <p style="margin: 0; color: #2e7d32;">
                            <strong>Important:</strong> Complete the payment via bKash first, then fill out the form below to submit your payment details.
                        </p>
                    </div>

                    <!-- Google Form -->
                    <div id="googleFormContainer">
                        <div style="text-align: center; margin: 20px 0;">
                            <div class="loader" id="formLoader"></div>
                            <p>Loading payment form...</p>
                        </div>
                    </div>

                    <!-- Alternative instructions -->
                    <div class="alternative-instructions" style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: var(--border-radius);">
                        <h4 style="margin-bottom: 10px;">If the form doesn't load:</h4>
                        <p style="margin-bottom: 10px;">1. Click <a href="https://forms.gle/hxYGtNxX8tkzhCMt5" target="_blank">here to open the form in a new tab</a></p>
                        <p>2. Or send your details to: <a target="_blank" href="https://wa.me/+8801795853197">WhatsApp Inbox</a></p>
                    </div>

                </div>
            </div>
        </section>
        <section class="how-it-works">
            <div class="container">
                <h2>How It Works</h2>
                <div class="steps-container">
                    <div class="step-card animate-on-scroll">
                        <div class="step-number">1</div>
                        <h3>Choose Your Plan</h3>
                        <p>Select the service package that fits your needs and budget.</p>
                    </div>
                    <div class="step-card animate-on-scroll">
                        <div class="step-number">2</div>
                        <h3>Submit Your Request</h3>
                        <p>Share your project details, assignment requirements, or specific questions.</p>
                    </div>
                    <div class="step-card animate-on-scroll">
                        <div class="step-number">3</div>
                        <h3>Get Expert Help</h3>
                        <p>Receive detailed solutions, code explanations, and personalized guidance.</p>
                    </div>
                    <div class="step-card animate-on-scroll">
                        <div class="step-number">4</div>
                        <h3>Ace Your Course</h3>
                        <p>Improve your grades and master Android/Flutter development concepts.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="faq-section">
            <div class="container">
                <h2>Frequently Asked Questions</h2>
                <div class="faq-container" id="faqContainer">
                    <!-- FAQ items will be loaded here -->
                </div>
            </div>
        </section>
        
        <section class="cta-section">
            <div class="container">
                <div class="cta-content">
                    <h2>Ready to Get Started?</h2>
                    <p>Don't let Android development challenges hold you back. Get expert help today!</p>
                    <a href="#" class="btn btn-accent" onclick="loadPage('checkout'); return false;">
                        Choose Your Plan <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

    `;

    setTimeout(() => {
        loadPricingCards();
        loadFAQ();
        animateOnScroll();

        // load the Google Form also on services page
        loadGoogleForm();
    }, 100);
}


function showGoogleForm() {
    const formSection = document.getElementById("googleFormSection");
    formSection.style.display = "block";

    // Auto-scroll to form
    formSection.scrollIntoView({ behavior: "smooth" });
}


function loadPricingCards() {
    const pricingGrid = document.getElementById('pricingGrid');
    if (!pricingGrid) return;

    const plans = [
        {
            id: 1,
            title: 'Basic Help',
            price: 500,
            period: 'Per Assignment',
            features: [
                'Single assignment help',
                'Code review & debugging',
                'Basic concept explanation',
                '48-hour delivery',
                '2 revisions included'
            ],
            buttonText: 'Get Basic Help',
            popular: false
        },
        {
            id: 2,
            title: 'Project Package',
            price: 2000,
            period: 'Per Project',
            features: [
                'Complete project assistance',
                'Full code implementation',
                'Detailed documentation',
                'UI/UX design guidance',
                'Database integration help',
                'Weekly check-ins',
                'Unlimited revisions'
            ],
            buttonText: 'Start Project',
            popular: true
        },
        {
            id: 3,
            title: 'Premium Support',
            price: null, // Custom price handled below
            period: 'Per Project',
            features: [
                'Unlimited assignments',
                'Priority 24/7 support',
                'Video call sessions',
                'Code optimization',
                'Best practices guide',
                'Portfolio building',
                'Career guidance',
                'Certificate of completion'
            ],
            buttonText: 'Go Premium',
            popular: false
        }
    ];

    pricingGrid.innerHTML = plans.map((plan, index) => `
        <div class="pricing-card ${plan.popular ? 'popular' : ''} animate-on-scroll" style="animation-delay: ${index * 0.2}s">

            <div class="pricing-header">
                <h3 class="pricing-title">${plan.title}</h3>

                <div class="pricing-price">
                    ${plan.price ? `৳${plan.price}` : 'Custom'}
                </div>

                <div class="pricing-period">${plan.period}</div>
            </div>

            <ul class="pricing-features">
                ${plan.features.map(feature => `
                    <li><i class="fas fa-check"></i> ${feature}</li>
                `).join('')}
            </ul>

            <!-- VERY IMPORTANT: Use selectPackage() instead of selectPlan() -->
            <button 
                class="btn ${plan.popular ? 'btn-accent' : ''} pricing-btn"
                onclick="selectPackage(${plan.id}, '${plan.title}', ${plan.price !== null ? plan.price : 'null'})">
                ${plan.buttonText} <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `).join('');
}


function selectPlan(planName, price) {

    // Save
    localStorage.setItem('selectedPlan', JSON.stringify({ planName, price }));

    // Show section
    const paymentSection = document.getElementById('paymentInstructions');
    if (paymentSection) paymentSection.style.display = "block";

    // Update name
    document.getElementById('selectedPackageName').textContent = planName;

    // Update ALL price fields
    document.querySelectorAll('.selectedPackagePrice').forEach(el => {
        el.textContent = price && !isNaN(price) ? `৳${price}` : "Custom";
    });

    // Load form
    loadGoogleForm(planName, price);

    // Scroll slightly into the payment section (offset 90px)
    const offset = 90; // pixels to scroll down from the top of the element
    const elementPosition = paymentSection.getBoundingClientRect().top + window.scrollY;
    const scrollToPosition = elementPosition - offset;

    // Scroll
    paymentSection.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });
}


function loadFAQ() {
    const faqContainer = document.getElementById('faqContainer');
    if (!faqContainer) return;

    const faqs = [
        {
            question: 'How quickly will I receive help?',
            answer: 'Response time depends on your plan. Basic: Within 48 hours. Project Package: 24-72 hours based on complexity. Premium: Immediate response, usually within 2-4 hours.'
        },
        {
            question: 'Is the help provided confidential?',
            answer: 'Absolutely! All assistance is completely confidential. We never share your information or work with anyone else.'
        },
        {
            question: 'Can I get help with specific Android topics?',
            answer: 'Yes! We cover all Android & Flutter topics including Activities, Fragments, Room Database, Retrofit, Firebase, Material Design, State Management, and more.'
        },
        {
            question: 'Do you help with debugging existing code?',
            answer: 'Yes, we provide detailed code reviews and debugging services. We\'ll explain what\'s wrong and show you how to fix it.'
        },
        {
            question: 'What if I\'m not satisfied with the help?',
            answer: 'We offer revisions based on your plan. If you\'re still not satisfied, we provide a full refund for Basic and Project plans.'
        }
    ];

    faqContainer.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item ${index === 0 ? 'active' : ''}" onclick="toggleFAQ(this)">
            <div class="faq-question">
                <h3>${faq.question}</h3>
                <i class="fas fa-plus faq-icon"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

function loadContactPage() {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = `
        <section class="contact-hero fade-in">
            <div class="container">
                <h1>Get In Touch</h1>
                <p>Have questions? Need immediate help with your Android project? Contact us and we'll respond within hours.</p>
            </div>
        </section>
        
        <section class="contact-section">
            <div class="container">
                <div class="contact-container">
                    <div class="contact-form-container animate-on-scroll">
                        <h2>Send us a Message</h2>
                        <form id="contactForm">
                            <div class="form-group">
                                <label for="name">Full Name *</label>
                                <input type="text" id="name" class="form-control" required placeholder="Enter your full name">
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" class="form-control" required placeholder="Enter your email">
                            </div>
                            
                            <div class="form-group">
                                <label for="subject">Subject *</label>
                                <select id="subject" class="form-control" required>
                                    <option value="">Select a subject</option>
                                    <option value="assignment">Assignment Help</option>
                                    <option value="project">Project Assistance</option>
                                    <option value="debugging">Code Debugging</option>
                                    <option value="concept">Concept Explanation</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="message">Message *</label>
                                <textarea id="message" class="form-control" required placeholder="Describe what you need help with..."></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label for="urgency">Urgency Level</label>
                                <select id="urgency" class="form-control">
                                    <option value="normal">Normal (3-5 days)</option>
                                    <option value="urgent">Urgent (24-48 hours)</option>
                                    <option value="emergency">Emergency (Same day)</option>
                                </select>
                            </div>
                            
                            <button type="submit" class="btn btn-accent" style="width: 100%; padding: 15px;">
                                <i class="fas fa-paper-plane"></i> Send Message
                            </button>
                            
                            <p style="margin-top: 15px; font-size: 0.9rem; color: var(--light-text);">
                                * We typically respond within 2-4 hours during business hours.
                            </p>
                        </form>
                    </div>
                    
                    <div class="contact-info-container">
                        <h2>Contact Information</h2>
                        <p style="margin-bottom: 30px; color: var(--light-text);">Feel free to reach out through any of these channels:</p>
                        
                        <div class="contact-info-list" id="contactInfoList">
                            <!-- Contact info will be loaded here -->
                        </div>
                        
                        <div class="business-hours animate-on-scroll" style="margin-top: 40px; padding: 25px; background: var(--light-color); border-radius: var(--border-radius);">
                            <h3 style="margin-bottom: 20px;">Business Hours</h3>
                            <div style="display: grid; gap: 10px;">
                                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(0,0,0,0.05);">
                                    <span>Monday - Friday</span>
                                    <strong>9:00 AM - 11:00 PM</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(0,0,0,0.05);">
                                    <span>Saturday</span>
                                    <strong>10:00 AM - 8:00 PM</strong>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                                    <span>Sunday</span>
                                    <strong>12:00 PM - 6:00 PM</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Testimonial Later impliment -->
    `;

    // Load contact info, testimonials, and set up form
    setTimeout(() => {
        loadContactInfo();
        setupContactForm();
        animateOnScroll();
    }, 100);
}

function loadContactInfo() {
    const contactInfoList = document.getElementById('contactInfoList');
    if (!contactInfoList) return;

    const contacts = [
        {
            icon: 'fas fa-envelope',
            title: 'Email Support',
            details: 'ashik4745@gmail.com',
            description: 'For general inquiries and support'
        },
        {
            icon: 'fas fa-phone',
            title: 'Phone & WhatsApp',
            details: '01795853197',
            description: 'Available 9AM-11PM BDT'
        },
        {
            icon: 'fas fa-comments',
            title: 'Live Chat',
            details: 'Click the chat icon on the corner',
            description: 'Instant support during business hours'
        },
        {
            icon: 'fas fa-map-marker-alt',
            title: 'Based In',
            details: 'Bangladesh OU',
            description: 'Serving students worldwide'
        }
    ];

    contactInfoList.innerHTML = contacts.map((contact, index) => `
        <div class="contact-info-item animate-on-scroll" style="animation-delay: ${index * 0.1}s">
            <div class="contact-icon">
                <i class="${contact.icon}"></i>
            </div>
            <div class="contact-details">
                <h3>${contact.title}</h3>
                <p style="font-weight: 600; color: var(--primary-color); margin: 5px 0;">${contact.details}</p>
                <p style="color: var(--light-text); font-size: 0.9rem;">${contact.description}</p>
            </div>
        </div>
    `).join('');
}


function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            urgency: document.getElementById('urgency').value,
            timestamp: new Date().toISOString()
        };

        // Save to localStorage
        let contacts = JSON.parse(localStorage.getItem('contactMessages')) || [];
        contacts.push(formData);
        localStorage.setItem('contactMessages', JSON.stringify(contacts));

        // Show success message
        alert('Thank you! Your message has been sent. We will respond within 2-4 hours.');

        // Reset form
        contactForm.reset();
    });
}

// Add FAQ toggle function
function toggleFAQ(faqItem) {
    const isActive = faqItem.classList.contains('active');

    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}



function loadGoogleForm(packageName, price) {
    const container = document.getElementById('googleFormContainer');
    if (!container) return;

    // Replace with your actual Google Form URL
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdM7NATFPq5Hxj8sp2HXjnHpcx8gzh6AmtofmxZxM8fhv9aWw/viewform?embedded=true";

    // Create iframe for Google Form
    container.innerHTML = `
        <div class="form-header" style="margin-bottom: 20px;">
            <h3 style="color: var(--dark-color);">Submit Your Payment Details</h3>
            <p style="color: var(--light-text);">Fill this form after completing bKash payment</p>
        </div>
        
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdM7NATFPq5Hxj8sp2HXjnHpcx8gzh6AmtofmxZxM8fhv9aWw/viewform?embedded=true" width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        
        <div style="margin-top: 15px; font-size: 0.9rem; color: var(--light-text); text-align: center;">
            <p>By submitting this form, you confirm that you have completed the bKash payment</p>
        </div>
    `;

    // Update direct link
    document.getElementById('directFormLink').href = formUrl.replace('embedded=true', '');
}


function loadPackages() {
    const packageGrid = document.getElementById('packageGrid');
    if (!packageGrid) return;

    const packages = [
        {
            id: 'basic',
            name: 'Basic Package',
            description: 'Entry-level help for small assignments',
            price: 500,
            originalPrice: 500,
            features: [
                'Code Review & Debugging',
                'Basic Concept Explanation',
                'Small Assignment Help',
                '24-48 Hour Response'
            ],
            popular: false
        },
        {
            id: 'advanced',
            name: 'Advanced Package',
            description: 'Comprehensive support for larger projects',
            price: 2000,
            originalPrice: 2000,
            features: [
                'Full Project Assistance',
                'Detailed Code Review',
                'Priority Support',
                'Multiple Project Help',
                'UI/UX Design Guidance',
                'Database Integration Help'
            ],
            popular: true
        },
        {
            id: 'premium',
            name: 'Premium Package',
            description: 'Complete solution for final year projects',
            price: 5000,
            originalPrice: 5000,
            features: [
                'Complete Project Development',
                'Source Code Delivery',
                'Documentation & Report',
                'Presentation Preparation',
                'Unlimited Revisions',
                'Direct WhatsApp Support',
                'Video Call Sessions'
            ],
            popular: false
        }
    ];

    packageGrid.innerHTML = packages.map(pkg => `
        <div class="package-card ${pkg.popular ? 'popular' : ''}" onclick="selectPackage('${pkg.id}', '${pkg.name}', ${pkg.price})">
            ${pkg.popular ? '<span class="popular-badge">Most Popular</span>' : ''}
            <h2>${pkg.name}</h2>
            <p>${pkg.description}</p>
            <ul>
                ${pkg.features.map(feature => `
                    <li><i class="fas fa-check"></i> ${feature}</li>
                `).join('')}
            </ul>
            <div class="price">৳${pkg.price}</div>
            <button class="btn ${pkg.popular ? 'btn-accent' : 'btn-primary'}">Select Package</button>
        </div>
    `).join('');
}

let selectedPackage = null;
let discountApplied = false;

function selectPackage(packageId, packageName, price) {
    selectedPackage = {
        id: packageId,
        name: packageName,
        price: price
    };

    // Update display
    document.getElementById('selectedPackageName').textContent = packageName;
    document.getElementById('selectedPackagePrice').textContent = `৳${price}`;

    // Show payment instructions
    document.getElementById('paymentInstructions').style.display = 'block';

    // Scroll to payment instructions
    document.getElementById('paymentInstructions').scrollIntoView({ behavior: 'smooth' });


}


function loadBKashPaymentsTab() {
    const payments = JSON.parse(localStorage.getItem('bKashPayments')) || [];

    return `
        <div class="data-table-container">
            <h3 style="margin-bottom: 20px;">bKash Payment Records (${payments.length})</h3>
            
            <div style="display: flex; gap: 15px; margin-bottom: 20px;">
                <button class="btn" onclick="exportBKashPayments('json')">
                    <i class="fas fa-download"></i> Export as JSON
                </button>
                <button class="btn" onclick="exportBKashPayments('csv')">
                    <i class="fas fa-file-csv"></i> Export as CSV
                </button>
                <button class="btn btn-accent" onclick="verifyAllPayments()">
                    <i class="fas fa-check-double"></i> Verify All Pending
                </button>
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Package</th>
                        <th>Amount (৳)</th>
                        <th>Transaction ID</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${payments.length > 0 ? payments.map(payment => `
                        <tr>
                            <td>${payment.id}</td>
                            <td>${payment.student.name}</td>
                            <td>${payment.student.id}</td>
                            <td>${payment.package.name}</td>
                            <td>৳${payment.package.price}</td>
                            <td><code>${payment.transaction.id}</code></td>
                            <td>${payment.student.phone}</td>
                            <td>${new Date(payment.timestamp).toLocaleDateString()}</td>
                            <td>
                                <span class="status ${payment.status}">
                                    ${payment.status}
                                </span>
                            </td>
                            <td>
                                <button class="action-btn view" onclick="viewBKashPayment('${payment.id}')">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="action-btn" style="background: #28a745;" onclick="verifyPayment('${payment.id}')">
                                    <i class="fas fa-check"></i>
                                </button>
                            </td>
                        </tr>
                    `).join('') : `
                        <tr>
                            <td colspan="10" style="text-align: center; padding: 40px;">
                                No bKash payments found
                            </td>
                        </tr>
                    `}
                </tbody>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: var(--border-radius);">
                <h4>Payment Summary</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 15px;">
                    <div>
                        <strong>Total Payments:</strong> ${payments.length}
                    </div>
                    <div>
                        <strong>Total Amount:</strong> ৳${payments.reduce((sum, p) => sum + p.package.price, 0)}
                    </div>
                    <div>
                        <strong>Pending:</strong> ${payments.filter(p => p.status === 'pending').length}
                    </div>
                    <div>
                        <strong>Verified:</strong> ${payments.filter(p => p.verified).length}
                    </div>
                </div>
            </div>
        </div>
    `;
}


function viewBKashPayment(paymentId) {
    const payments = JSON.parse(localStorage.getItem('bKashPayments')) || [];
    const payment = payments.find(p => p.id === paymentId);

    if (payment) {
        alert(`
        📋 PAYMENT DETAILS
        --------------------------
        Payment ID: ${payment.id}
        
        👤 STUDENT INFO:
        Name: ${payment.student.name}
        Student ID: ${payment.student.id}
        Email: ${payment.student.email}
        Phone: ${payment.student.phone}
        
        📦 PACKAGE:
        Package: ${payment.package.name}
        Amount: ৳${payment.package.price}
        ${payment.discountApplied ? `Discount: ${payment.discountPercentage}% (Saved: ৳${payment.discountAmount})` : ''}
        
        💳 TRANSACTION:
        bKash Number: ${payment.transaction.bKashNumber}
        Transaction ID: ${payment.transaction.id}
        Method: ${payment.transaction.method === 'send_money' ? 'Send Money' : 'Cash In'}
        
        📝 PROJECT DETAILS:
        ${payment.projectDetails || 'No details provided'}
        
        📅 TIMESTAMP:
        ${new Date(payment.timestamp).toLocaleString()}
        
        🔍 STATUS:
        ${payment.status}
        Verified: ${payment.verified ? '✅ Yes' : '❌ No'}
        --------------------------
        `);
    }
}

function verifyPayment(paymentId) {
    if (confirm('Mark this payment as verified?')) {
        let payments = JSON.parse(localStorage.getItem('bKashPayments')) || [];
        const paymentIndex = payments.findIndex(p => p.id === paymentId);

        if (paymentIndex !== -1) {
            payments[paymentIndex].status = 'verified';
            payments[paymentIndex].verified = true;
            payments[paymentIndex].verifiedAt = new Date().toISOString();
            localStorage.setItem('bKashPayments', JSON.stringify(payments));

            showToast('Verified', 'Payment marked as verified', 'success');
            loadAdminPage(); // Refresh admin page
        }
    }
}

function verifyAllPayments() {
    if (confirm('Verify all pending payments?')) {
        let payments = JSON.parse(localStorage.getItem('bKashPayments')) || [];
        const verificationTime = new Date().toISOString();

        payments = payments.map(p => {
            if (p.status === 'pending') {
                return {
                    ...p,
                    status: 'verified',
                    verified: true,
                    verifiedAt: verificationTime
                };
            }
            return p;
        });

        localStorage.setItem('bKashPayments', JSON.stringify(payments));
        showToast('Verified', 'All pending payments verified', 'success');
        loadAdminPage(); // Refresh admin page
    }
}

function loadAdminPage() {
    const mainContent = document.getElementById('main-content');

    // Get stored data
    const payments = JSON.parse(localStorage.getItem('paymentData')) || [];
    const contacts = JSON.parse(localStorage.getItem('contactMessages')) || [];

    mainContent.innerHTML = `
        <section class="admin-hero fade-in">
            <div class="container">
                <h1>Admin Dashboard</h1>
                <p>View all customer payments and contact messages.</p>
            </div>
        </section>
        
        <section class="admin-section">
            <div class="container">
                <div class="admin-tabs">
                    <button class="tab-btn active" onclick="switchAdminTab('payments')">Payments (${payments.length})</button>
                    <button class="tab-btn" onclick="switchAdminTab('messages')">Messages (${contacts.length})</button>
                </div>
                
                <div class="tab-content">
                    <div id="paymentsTab" class="tab-pane active">
                        <h2>Payment Records</h2>
                        ${payments.length === 0 ?
            '<p>No payment records found.</p>' :
            `<div class="table-container">
                                <table class="admin-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Plan</th>
                                            <th>Amount</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${payments.map(payment => `
                                            <tr>
                                                <td>${payment.id}</td>
                                                <td>${payment.fullName}</td>
                                                <td>${payment.email}</td>
                                                <td>${payment.plan.planName}</td>
                                                <td>$${payment.plan.price}</td>
                                                <td>${new Date(payment.timestamp).toLocaleDateString()}</td>
                                                <td>
                                                    <button class="btn-small" onclick="viewPayment(${payment.id})">View</button>
                                                    <button class="btn-small btn-danger" onclick="deletePayment(${payment.id})">Delete</button>
                                                </td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>`
        }
                    </div>
                    
                    <div id="messagesTab" class="tab-pane">
                        <h2>Contact Messages</h2>
                        ${contacts.length === 0 ?
            '<p>No messages found.</p>' :
            `<div class="messages-container">
                                ${contacts.map((message, index) => `
                                    <div class="message-card">
                                        <div class="message-header">
                                            <h3>${message.subject} <span class="urgency-tag ${message.urgency}">${message.urgency}</span></h3>
                                            <span class="message-date">${new Date(message.timestamp).toLocaleString()}</span>
                                        </div>
                                        <div class="message-body">
                                            <p><strong>From:</strong> ${message.name} (${message.email})</p>
                                            <p><strong>Message:</strong> ${message.message}</p>
                                        </div>
                                        <div class="message-actions">
                                            <button class="btn-small" onclick="replyToMessage('${message.email}')">Reply</button>
                                            <button class="btn-small btn-danger" onclick="deleteMessage(${index})">Delete</button>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>`
        }
                    </div>
                </div>
            </div>
        </section>
    `;

    animateOnScroll();
}

function switchAdminTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(tabName)) {
            btn.classList.add('active');
        }
    });

    // Update tab content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    document.getElementById(tabName + 'Tab').classList.add('active');
}

function viewPayment(id) {
    const payments = JSON.parse(localStorage.getItem('paymentData')) || [];
    const payment = payments.find(p => p.id === id);

    if (payment) {
        alert(`Payment Details:\n
ID: ${payment.id}
Name: ${payment.fullName}
Email: ${payment.email}
Phone: ${payment.phone}
Plan: ${payment.plan.planName}
Amount: $${payment.plan.price}
Service Details: ${payment.serviceDetails}
Card: ${payment.cardNumber}
Expiry: ${payment.expiryDate}
Billing Address: ${payment.billingAddress}
Date: ${new Date(payment.timestamp).toLocaleString()}
        `);
    }
}

function deletePayment(id) {
    if (confirm('Are you sure you want to delete this payment record?')) {
        let payments = JSON.parse(localStorage.getItem('paymentData')) || [];
        payments = payments.filter(p => p.id !== id);
        localStorage.setItem('paymentData', JSON.stringify(payments));
        loadAdminPage(); // Refresh the admin page
    }
}

function replyToMessage(email) {
    const subject = prompt('Enter reply subject:');
    if (subject) {
        const body = prompt('Enter reply message:');
        if (body) {
            alert(`Reply to ${email}:\nSubject: ${subject}\nMessage: ${body}\n\n(Note: In a real application, this would send an email.)`);
        }
    }
}

function deleteMessage(index) {
    if (confirm('Are you sure you want to delete this message?')) {
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.splice(index, 1);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        loadAdminPage(); // Refresh the admin page
    }
}

function loadTerms() {
    alert('Terms and Conditions:\n\n1. All services are for educational purposes.\n2. We guarantee satisfaction with our help.\n3. Payments are non-refundable once service is rendered.\n4. We respect your privacy and keep all information confidential.');
}

function loadAdminPage() {
    // Check for admin password (simple protection)
    const password = prompt('Enter Admin Password:');
    if (password !== 'admin123') {
        alert('Access Denied');
        loadPage('home');
        return;
    }

    const mainContent = document.getElementById('main-content');

    // Get data from localStorage
    const payments = JSON.parse(localStorage.getItem('paymentData')) || [];
    const contacts = JSON.parse(localStorage.getItem('contactMessages')) || [];

    // Calculate totals
    const totalRevenue = payments.reduce((sum, payment) => {
        const amount = typeof payment.amount === 'number' ? payment.amount :
            payment.amount === 'Custom' ? 0 : parseInt(payment.amount) || 0;
        return sum + amount;
    }, 0);

    const pendingPayments = payments.filter(p => p.status === 'pending').length;
    const completedPayments = payments.filter(p => p.status === 'completed').length;

    mainContent.innerHTML = `
        <section class="admin-hero fade-in">
            <div class="container">
                <h1>Admin Dashboard</h1>
                <p>Manage payments, view messages, and monitor your tutoring service</p>
            </div>
        </section>
        
        <section class="admin-container">
            <div class="container">
                <div class="admin-stats">
                    <div class="admin-stat-card animate-on-scroll">
                        <div class="admin-stat-icon">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <div class="admin-stat-number">$${totalRevenue}</div>
                        <div class="admin-stat-label">Total Revenue</div>
                    </div>
                    
                    <div class="admin-stat-card animate-on-scroll">
                        <div class="admin-stat-icon">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div class="admin-stat-number">${payments.length}</div>
                        <div class="admin-stat-label">Total Orders</div>
                    </div>
                    
                    <div class="admin-stat-card animate-on-scroll">
                        <div class="admin-stat-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="admin-stat-number">${pendingPayments}</div>
                        <div class="admin-stat-label">Pending</div>
                    </div>
                    
                    <div class="admin-stat-card animate-on-scroll">
                        <div class="admin-stat-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="admin-stat-number">${completedPayments}</div>
                        <div class="admin-stat-label">Completed</div>
                    </div>
                </div>
                
                <div class="admin-tabs">
                    <button class="admin-tab active" onclick="switchAdminTab('payments')">
                        <i class="fas fa-credit-card"></i> Payments (${payments.length})
                    </button>
                    <button class="admin-tab" onclick="switchAdminTab('messages')">
                        <i class="fas fa-envelope"></i> Messages (${contacts.length})
                    </button>
                    <button class="admin-tab" onclick="switchAdminTab('export')">
                        <i class="fas fa-download"></i> Export Data
                    </button>
                </div>
                
                <div id="paymentsTab" class="tab-content active">
                    <div class="data-table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Plan</th>
                                    <th>Amount</th>
                                    <th>Method</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${payments.length > 0 ? payments.map(payment => `
                                    <tr>
                                        <td>#${payment.id.toString().slice(-6)}</td>
                                        <td>${payment.name}</td>
                                        <td>${payment.email}</td>
                                        <td>${payment.plan}</td>
                                        <td>$${payment.amount}</td>
                                        <td>${payment.method}</td>
                                        <td>${new Date(payment.timestamp).toLocaleDateString()}</td>
                                        <td>
                                            <span class="status ${payment.status || 'pending'}">
                                                ${payment.status || 'pending'}
                                            </span>
                                        </td>
                                        <td>
                                            <button class="action-btn view" onclick="viewPayment(${payment.id})">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            <button class="action-btn delete" onclick="deletePayment(${payment.id})">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                `).join('') : `
                                    <tr>
                                        <td colspan="9" style="text-align: center; padding: 40px;">
                                            No payment records found.
                                        </td>
                                    </tr>
                                `}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div id="messagesTab" class="tab-content">
                    <div class="data-table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th>Urgency</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${contacts.length > 0 ? contacts.map((message, index) => `
                                    <tr>
                                        <td>${message.name}</td>
                                        <td>${message.email}</td>
                                        <td>${message.subject}</td>
                                        <td>
                                            <span class="status ${message.urgency}">
                                                ${message.urgency}
                                            </span>
                                        </td>
                                        <td title="${message.message}">
                                            ${message.message.substring(0, 30)}...
                                        </td>
                                        <td>${new Date(message.timestamp).toLocaleDateString()}</td>
                                        <td>
                                            <button class="action-btn view" onclick="viewMessage(${index})">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                            <button class="action-btn delete" onclick="deleteMessage(${index})">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                `).join('') : `
                                    <tr>
                                        <td colspan="7" style="text-align: center; padding: 40px;">
                                            No messages found.
                                        </td>
                                    </tr>
                                `}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div id="exportTab" class="tab-content">
                    <div class="export-options" style="background: var(--white); padding: 40px; border-radius: var(--border-radius); box-shadow: var(--shadow);">
                        <h2 style="margin-bottom: 20px;">Export Data</h2>
                        <p style="margin-bottom: 30px; color: var(--light-text);">
                            Download your data in various formats for record keeping.
                        </p>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                            <div class="export-option" style="text-align: center; padding: 30px; background: var(--light-color); border-radius: var(--border-radius);">
                                <i class="fas fa-file-excel" style="font-size: 3rem; color: #217346; margin-bottom: 20px;"></i>
                                <h3>Excel Format</h3>
                                <p style="margin: 15px 0;">Download all data in spreadsheet format</p>
                                <button class="btn" onclick="exportData('excel')">
                                    <i class="fas fa-download"></i> Download Excel
                                </button>
                            </div>
                            
                            <div class="export-option" style="text-align: center; padding: 30px; background: var(--light-color); border-radius: var(--border-radius);">
                                <i class="fas fa-file-csv" style="font-size: 3rem; color: #2962ff; margin-bottom: 20px;"></i>
                                <h3>CSV Format</h3>
                                <p style="margin: 15px 0;">Comma-separated values for easy import</p>
                                <button class="btn" onclick="exportData('csv')">
                                    <i class="fas fa-download"></i> Download CSV
                                </button>
                            </div>
                            
                            <div class="export-option" style="text-align: center; padding: 30px; background: var(--light-color); border-radius: var(--border-radius);">
                                <i class="fas fa-file-pdf" style="font-size: 3rem; color: #f44336; margin-bottom: 20px;"></i>
                                <h3>PDF Report</h3>
                                <p style="margin: 15px 0;">Formatted report with all data</p>
                                <button class="btn" onclick="exportData('pdf')">
                                    <i class="fas fa-download"></i> Download PDF
                                </button>
                            </div>
                        </div>
                        
                        <div style="margin-top: 40px; padding: 20px; background: #f8f9fa; border-radius: var(--border-radius);">
                            <h4>Data Summary</h4>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 15px;">
                                <div>
                                    <strong>Total Payments:</strong> ${payments.length}
                                </div>
                                <div>
                                    <strong>Total Messages:</strong> ${contacts.length}
                                </div>
                                <div>
                                    <strong>Total Revenue:</strong> $${totalRevenue}
                                </div>
                                <div>
                                    <strong>Active Since:</strong> ${payments.length > 0 ? new Date(payments[0].timestamp).toLocaleDateString() : 'N/A'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    animateOnScroll();
}

function switchAdminTab(tabName) {
    // Update tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.includes(tabName)) {
            tab.classList.add('active');
        }
    });

    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(tabName + 'Tab').classList.add('active');
}

function viewPayment(id) {
    const payments = JSON.parse(localStorage.getItem('paymentData')) || [];
    const payment = payments.find(p => p.id === id);

    if (payment) {
        alert(`Payment Details:\n
ID: #${payment.id.toString().slice(-6)}
Name: ${payment.name}
Email: ${payment.email}
Plan: ${payment.plan}
Amount: $${payment.amount}
Payment Method: ${payment.method}
Date: ${new Date(payment.timestamp).toLocaleString()}
Status: ${payment.status || 'pending'}
Project Details: ${payment.projectDetails || 'N/A'}
        `);

        // Option to update status
        const newStatus = prompt('Update status (pending/completed/cancelled):', payment.status || 'pending');
        if (newStatus && ['pending', 'completed', 'cancelled'].includes(newStatus)) {
            payment.status = newStatus;
            localStorage.setItem('paymentData', JSON.stringify(payments));
            loadAdminPage();
        }
    }
}

function deletePayment(id) {
    if (confirm('Are you sure you want to delete this payment record?')) {
        let payments = JSON.parse(localStorage.getItem('paymentData')) || [];
        payments = payments.filter(p => p.id !== id);
        localStorage.setItem('paymentData', JSON.stringify(payments));
        loadAdminPage();
    }
}

function viewMessage(index) {
    const contacts = JSON.parse(localStorage.getItem('contactMessages')) || [];
    const message = contacts[index];

    if (message) {
        alert(`Message Details:\n
Name: ${message.name}
Email: ${message.email}
Subject: ${message.subject}
Urgency: ${message.urgency}
Date: ${new Date(message.timestamp).toLocaleString()}
Message: ${message.message}
        `);
    }
}

function deleteMessage(index) {
    if (confirm('Are you sure you want to delete this message?')) {
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.splice(index, 1);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        loadAdminPage();
    }
}

function exportData(format) {
    const payments = JSON.parse(localStorage.getItem('paymentData')) || [];
    const contacts = JSON.parse(localStorage.getItem('contactMessages')) || [];

    let data;
    let filename;
    let mimeType;

    if (format === 'excel') {
        // Convert to CSV format (Excel can open CSV)
        const headers = ['ID,Name,Email,Plan,Amount,Method,Date,Status'];
        const rows = payments.map(p =>
            `${p.id},"${p.name}","${p.email}","${p.plan}",${p.amount},"${p.method}","${new Date(p.timestamp).toLocaleDateString()}","${p.status || 'pending'}"`
        );
        data = [...headers, ...rows].join('\n');
        filename = 'payments_export.csv';
        mimeType = 'text/csv';
    } else if (format === 'csv') {
        data = JSON.stringify({ payments, contacts }, null, 2);
        filename = 'data_export.json';
        mimeType = 'application/json';
    } else {
        // For PDF, we'll simulate with an alert
        alert('PDF export would be implemented with a PDF library in a real application.\n\nData exported to console for now.');
        console.log('Payments:', payments);
        console.log('Messages:', contacts);
        return;
    }

    // Create download link
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    alert(`Data exported successfully as ${filename}`);
}

// Add these functions to your existing script.js

// Initialize final features
function initFinalFeatures() {
    // Add chat widget
    addChatWidget();

    // Add toast container
    addToastContainer();

    // Add back to top button
    addBackToTop();

    // Add progress bar
    addProgressBar();

    // Add cookie consent
    addCookieConsent();

    // Add scroll progress tracking
    setupScrollTracking();

    // Add keyboard navigation
    setupKeyboardNavigation();
}

// Add chat widget to body
function addChatWidget() {
    const chatHTML = `
        <div class="chat-widget">
            <button class="chat-button" onclick="toggleChat()">
                <i class="fas fa-comment"></i>
                <span class="badge">1</span>
            </button>
            <div class="chat-container" id="chatContainer">
                <div class="chat-header">
                    <h3>Live Chat Support</h3>
                    <button class="chat-close" onclick="toggleChat()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="chat-messages" id="chatMessages">
                    <div class="chat-message bot">
                        <div class="message-bubble">
                            Hi! I'm your Flutter assistant. How can I help you today?
                        </div>
                        <span class="message-time">Just now</span>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;" class="chat-input-container">
                    <div>
                <a target="_blank" href="https://wa.me/+8801795853197">WhatsApp Inbox</a>
                    </div>
                    <div style="display: flex; justify-content: space-between; width: 100%;">
                    <input type="text" class="chat-input" id="chatInput" placeholder="Type your message...">
                    <button class="chat-send" onclick="sendChatMessage()">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // Enter key to send message
    document.getElementById('chatInput')?.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
}

function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer) {
        chatContainer.classList.toggle('active');
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');

    if (!input || !messages || !input.value.trim()) return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.innerHTML = `
        <div class="message-bubble">${input.value}</div>
        <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    `;
    messages.appendChild(userMessage);

    const userQuestion = input.value.toLowerCase();
    input.value = '';

    // Scroll to bottom
    messages.scrollTop = messages.scrollHeight;

    // Simulate bot response after delay
    setTimeout(() => {
        const botResponse = getBotResponse(userQuestion);
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot';
        botMessage.innerHTML = `
            <div class="message-bubble">${botResponse}</div>
            <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        `;
        messages.appendChild(botMessage);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
}

function getBotResponse(question) {
    const responses = {
        'hello': 'Hello! How can I help with your Android/Flutter project today?',
        'hi': 'Hi there! Ready to ace your Android course?',
        'price': 'Our prices start at $29 for assignment help. Check the Services page for details!',
        'help': 'I can help with Android concepts, Flutter code, project guidance, and more. What do you need?',
        'android': 'Android development can be challenging! I recommend starting with Activities and Fragments.',
        'flutter': 'Flutter is great for cross-platform apps! Need help with widgets or state management?',
        'project': 'For project help, select the Project Package on our Services page.',
        'deadline': 'We offer urgent support! Choose "Emergency" on the contact form for same-day help.',
        'payment': 'We accept credit cards, PayPal, crypto, and bank transfers.',
        'contact': 'Email us at ashik4745@gmail.com or call +1 (555) 123-4567.'
    };

    for (const [key, response] of Object.entries(responses)) {
        if (question.includes(key)) {
            return response;
        }
    }

    return "I'm here to help with Android and Flutter development! For specific questions, please use the contact form or check our Services page.";
}

// Toast notifications
function addToastContainer() {
    const toastHTML = `<div class="toast-container" id="toastContainer"></div>`;
    document.body.insertAdjacentHTML('beforeend', toastHTML);
}

function showToast(title, message, type = 'info', duration = 5000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(toast);

    // Show toast with animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto remove after duration
    setTimeout(() => {
        if (toast.parentElement) {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }
    }, duration);
}

// Back to top button
function addBackToTop() {
    const buttonHTML = `
        <button class="back-to-top" onclick="scrollToTop()" id="backToTop">
            <i class="fas fa-arrow-up"></i>
        </button>
    `;
    document.body.insertAdjacentHTML('beforeend', buttonHTML);
}

function setupScrollTracking() {
    window.addEventListener('scroll', function () {
        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        }

        // Progress bar
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Progress bar
function addProgressBar() {
    const progressHTML = `<div class="progress-bar"></div>`;
    document.body.insertAdjacentHTML('afterbegin', progressHTML);
}

// Cookie consent
function addCookieConsent() {
    if (localStorage.getItem('cookiesAccepted')) return;

    setTimeout(() => {
        const consentHTML = `
            <div class="cookie-consent active" id="cookieConsent">
                <div class="cookie-content">
                    <div class="cookie-text">
                        <h3 style="margin-bottom: 10px; color: var(--white);">We use cookies</h3>
                        <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">
                            This website uses essential cookies to enhance your experience and remember your preferences. 
                            No personal data is shared with third parties.
                        </p>
                    </div>
                    <div class="cookie-buttons">
                        <button class="cookie-btn decline" onclick="declineCookies()">Decline</button>
                        <button class="cookie-btn accept" onclick="acceptCookies()">Accept</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', consentHTML);
    }, 2000);
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieConsent')?.remove();
    showToast('Cookies Accepted', 'Thank you for accepting cookies.', 'success');
}

function declineCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    document.getElementById('cookieConsent')?.remove();
    showToast('Cookies Declined', 'Only essential cookies will be used.', 'info');
}

// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function (e) {
        // Ctrl + / to focus search
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            const chatInput = document.getElementById('chatInput');
            if (chatInput) {
                chatInput.focus();
            }
        }

        // Escape to close modals/chat
        if (e.key === 'Escape') {
            const chatContainer = document.getElementById('chatContainer');
            if (chatContainer?.classList.contains('active')) {
                toggleChat();
            }
        }

        // Alt + 1-5 for navigation
        if (e.altKey && e.key >= '1' && e.key <= '5') {
            e.preventDefault();
            const pages = ['home', 'services', 'contact', 'checkout', 'admin'];
            const index = parseInt(e.key) - 1;
            if (pages[index]) {
                loadPage(pages[index]);
            }
        }
    });
}

// Analytics (basic)
function trackEvent(eventName, data = {}) {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        const events = JSON.parse(localStorage.getItem('analyticsEvents')) || [];
        events.push({
            event: eventName,
            data: data,
            timestamp: new Date().toISOString(),
            page: currentPage,
            userAgent: navigator.userAgent
        });
        localStorage.setItem('analyticsEvents', JSON.stringify(events));

        // Log to console in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log(`Event: ${eventName}`, data);
        }
    }
}

// Update existing functions to include tracking
// function loadPage(page) {
//     currentPage = page;
//     const mainContent = document.getElementById('main-content');

//     // Track page view
//     trackEvent('page_view', { page: page });

//     // ... rest of existing loadPage function ...
// }

// Update initWebsite function to include final features
function initWebsite() {
    loadNavigation();
    loadFooter();
    loadPage('home');
    initFinalFeatures(); // Add this line

    // Set up service worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .catch(err => console.log('Service Worker registration failed: ', err));
    }

    // Show welcome message
    setTimeout(() => {
        showToast('Welcome!', 'Get expert help with Android & Flutter development.', 'info', 3000);
    }, 2000);
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // ... existing code ...

    // Call lazy loading after page loads
    setTimeout(lazyLoadImages, 500);

});
