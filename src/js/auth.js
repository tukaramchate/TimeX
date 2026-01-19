// Authentication JavaScript

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters', 'error');
            return;
        }
        
        // Simulate login
        simulateAuth('login', { email, password });
    });
}

// Signup Form Handler
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Validation
        if (fullname.length < 3) {
            showMessage('Please enter your full name', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        if (phone.length < 10) {
            showMessage('Please enter a valid phone number', 'error');
            return;
        }
        
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showMessage('Passwords do not match', 'error');
            return;
        }
        
        // Simulate signup
        simulateAuth('signup', { fullname, email, phone, password });
    });
}

// Email Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Simulate Authentication
function simulateAuth(type, data) {
    // Show loading state
    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = type === 'login' ? 'Logging in...' : 'Creating Account...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify({
            name: data.fullname || data.email.split('@')[0],
            email: data.email,
            loggedIn: true
        }));
        
        // Show success message
        showMessage(
            type === 'login' 
                ? 'Login successful! Redirecting...' 
                : 'Account created successfully! Redirecting...',
            'success'
        );
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
        
    }, 2000);
}

// Show Message
function showMessage(message, type = 'error') {
    // Remove existing messages
    const existingMsg = document.querySelector('.auth-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `auth-message ${type} show`;
    messageDiv.textContent = message;
    
    // Insert before form
    const form = document.querySelector('.auth-form');
    form.parentNode.insertBefore(messageDiv, form);
    
    // Auto-hide after 5 seconds
    if (type === 'error') {
        setTimeout(() => {
            messageDiv.classList.remove('show');
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }
}

// Social Login Handlers
const googleBtn = document.querySelector('.google-btn');
if (googleBtn) {
    googleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showMessage('Social login will be available soon!', 'error');
    });
}

// Password Toggle (optional enhancement)
function addPasswordToggle() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.innerHTML = '👁';
        toggleBtn.style.cssText = `
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
        `;
        
        toggleBtn.addEventListener('click', () => {
            if (input.type === 'password') {
                input.type = 'text';
                toggleBtn.innerHTML = '🔒';
            } else {
                input.type = 'password';
                toggleBtn.innerHTML = '👁';
            }
        });
        
        wrapper.appendChild(toggleBtn);
    });
}

// Initialize password toggle on page load
document.addEventListener('DOMContentLoaded', () => {
    // Uncomment to enable password visibility toggle
    // addPasswordToggle();
});

console.log('Auth page loaded');
