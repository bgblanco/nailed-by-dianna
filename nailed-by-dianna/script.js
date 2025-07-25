// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (hamburger.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transform = '';
                bar.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '1';
            });
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .gallery-item, .contact-item, .about-text, .about-image').forEach(el => {
        observer.observe(el);
    });

    // Gallery Touch/Swipe Support for Mobile
    const galleryGrid = document.querySelector('.gallery-grid');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (galleryGrid) {
        galleryGrid.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - galleryGrid.offsetLeft;
            scrollLeft = galleryGrid.scrollLeft;
        });

        galleryGrid.addEventListener('mouseleave', () => {
            isDown = false;
        });

        galleryGrid.addEventListener('mouseup', () => {
            isDown = false;
        });

        galleryGrid.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - galleryGrid.offsetLeft;
            const walk = (x - startX) * 2;
            galleryGrid.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        galleryGrid.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - galleryGrid.offsetLeft;
            scrollLeft = galleryGrid.scrollLeft;
        });

        galleryGrid.addEventListener('touchmove', (e) => {
            if (!startX) return;
            const x = e.touches[0].pageX - galleryGrid.offsetLeft;
            const walk = (x - startX) * 2;
            galleryGrid.scrollLeft = scrollLeft - walk;
        });
    }

    // Form Validation and Submission
    const bookingForm = document.querySelector('.booking-form');
    
    if (bookingForm) {
        // Real-time validation
        const inputs = bookingForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearErrors);
        });

        // Form submission
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                submitForm();
            }
        });
    }

    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        // Remove existing error messages
        clearFieldError(field);
        
        // Validate based on field type
        switch (field.type) {
            case 'text':
                if (field.name === 'name' && value.length < 2) {
                    showFieldError(field, 'Please enter a valid name');
                    return false;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    showFieldError(field, 'Please enter a valid email address');
                    return false;
                }
                break;
            case 'tel':
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                    showFieldError(field, 'Please enter a valid phone number');
                    return false;
                }
                break;
            case 'date':
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) {
                    showFieldError(field, 'Please select a future date');
                    return false;
                }
                break;
        }
        
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        return true;
    }

    function validateForm() {
        let isValid = true;
        const inputs = bookingForm.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!validateField({ target: input })) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    function showFieldError(field, message) {
        const formGroup = field.closest('.form-group');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#F44336';
        errorDiv.style.fontSize = '0.85rem';
        errorDiv.style.marginTop = '0.25rem';
        
        formGroup.appendChild(errorDiv);
        field.style.borderColor = '#F44336';
    }

    function clearFieldError(field) {
        const formGroup = field.closest('.form-group');
        const existingError = formGroup.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        field.style.borderColor = '#E0E0E0';
    }

    function clearErrors(e) {
        clearFieldError(e.target);
    }

    async function submitForm() {
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Collect form data
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await simulateFormSubmission(data);
            
            // Show success message
            showNotification('Booking request sent successfully! We\'ll contact you soon.', 'success');
            bookingForm.reset();
            
        } catch (error) {
            // Show error message
            showNotification('Sorry, there was an error sending your request. Please try calling us directly.', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    }

    function simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            // Simulate API call delay
            setTimeout(() => {
                // In a real application, you would send this data to your server
                console.log('Form data:', data);
                
                // For demo purposes, we'll just resolve
                // In production, replace this with actual API call
                resolve();
            }, 2000);
        });
    }

    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            backgroundColor: type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : '#2196F3',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            zIndex: '10000',
            maxWidth: '400px',
            transform: 'translateX(450px)',
            transition: 'transform 0.3s ease'
        });
        
        // Add to document
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(450px)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(450px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Click-to-call functionality
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Analytics tracking could go here
            console.log('Phone call initiated:', this.href);
        });
    });

    // WhatsApp link functionality
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Analytics tracking could go here
            console.log('WhatsApp opened:', this.href);
        });
    });

    // Sticky button hide/show based on booking section visibility
    const stickyBtn = document.querySelector('.sticky-book-btn');
    const bookingSection = document.querySelector('#booking');
    
    if (stickyBtn && bookingSection) {
        const stickyObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stickyBtn.style.opacity = '0';
                    stickyBtn.style.pointerEvents = 'none';
                } else {
                    stickyBtn.style.opacity = '1';
                    stickyBtn.style.pointerEvents = 'auto';
                }
            });
        }, { threshold: 0.1 });
        
        stickyObserver.observe(bookingSection);
    }

    // Set minimum date for date input to today
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Add CSS for mobile navigation
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 767px) {
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background-color: rgba(255, 255, 255, 0.98);
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
                backdrop-filter: blur(10px);
                padding: 2rem 0;
                gap: 1rem;
            }

            .nav-menu.active {
                left: 0;
            }

            .nav-link {
                padding: 0.5rem;
                display: block;
                border-radius: 8px;
                margin: 0 2rem;
                transition: all 0.3s ease;
            }

            .nav-link:hover {
                background-color: var(--soft-pink);
            }
        }
    `;
    document.head.appendChild(style);

    console.log('Nailed by Dianna website loaded successfully!');
});