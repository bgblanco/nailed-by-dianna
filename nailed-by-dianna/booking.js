// Advanced Booking System for Nailed by Dianna
class BookingSystem {
    constructor() {
        this.currentDate = new Date();
        this.selectedDate = null;
        this.selectedTime = null;
        this.businessHours = {
            monday: { start: '09:00', end: '18:00', available: true },
            tuesday: { start: '09:00', end: '18:00', available: true },
            wednesday: { start: '09:00', end: '18:00', available: true },
            thursday: { start: '09:00', end: '18:00', available: true },
            friday: { start: '09:00', end: '18:00', available: true },
            saturday: { start: '10:00', end: '16:00', available: true },
            sunday: { start: null, end: null, available: false }
        };
        this.bookedAppointments = []; // This would come from a database in production
        this.serviceDurations = {
            'acrylic': 120, // 2 hours
            'manicure': 60,  // 1 hour
            'both': 150,     // 2.5 hours
            'other': 90      // 1.5 hours default
        };
        
        this.init();
    }

    init() {
        this.createCalendarWidget();
        this.setupEventListeners();
        this.loadBookedAppointments();
    }

    createCalendarWidget() {
        const calendarPlaceholder = document.querySelector('.calendar-placeholder');
        if (!calendarPlaceholder) return;

        calendarPlaceholder.innerHTML = `
            <div class="booking-calendar">
                <div class="calendar-header">
                    <button class="calendar-nav-btn" id="prevMonth">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <h3 class="calendar-title" id="calendarTitle"></h3>
                    <button class="calendar-nav-btn" id="nextMonth">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="calendar-weekdays">
                    <div class="weekday">Sun</div>
                    <div class="weekday">Mon</div>
                    <div class="weekday">Tue</div>
                    <div class="weekday">Wed</div>
                    <div class="weekday">Thu</div>
                    <div class="weekday">Fri</div>
                    <div class="weekday">Sat</div>
                </div>
                <div class="calendar-days" id="calendarDays"></div>
                <div class="time-slots-container" id="timeSlots" style="display: none;">
                    <h4>Available Times</h4>
                    <div class="time-slots" id="timeSlotsList"></div>
                </div>
                <div class="booking-summary" id="bookingSummary" style="display: none;">
                    <h4>Booking Summary</h4>
                    <div class="summary-details" id="summaryDetails"></div>
                    <button class="btn-primary" id="confirmBooking">Confirm Booking</button>
                </div>
            </div>
        `;

        this.addCalendarStyles();
        this.renderCalendar();
    }

    addCalendarStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .booking-calendar {
                background: white;
                border-radius: 15px;
                padding: 1.5rem;
                box-shadow: 0 2px 10px rgba(233, 30, 99, 0.1);
            }

            .calendar-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
            }

            .calendar-nav-btn {
                background: var(--primary-pink);
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .calendar-nav-btn:hover {
                background: var(--dark-pink);
                transform: scale(1.1);
            }

            .calendar-title {
                margin: 0;
                color: var(--text-dark);
                font-size: 1.2rem;
            }

            .calendar-weekdays {
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 0.5rem;
                margin-bottom: 0.5rem;
            }

            .weekday {
                text-align: center;
                font-weight: 600;
                color: var(--medium-gray);
                padding: 0.5rem;
                font-size: 0.9rem;
            }

            .calendar-days {
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 0.25rem;
                margin-bottom: 1.5rem;
            }

            .calendar-day {
                aspect-ratio: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.3s ease;
                border: 2px solid transparent;
                position: relative;
            }

            .calendar-day:hover {
                background: var(--soft-pink);
            }

            .calendar-day.today {
                background: var(--light-pink);
                font-weight: 600;
            }

            .calendar-day.selected {
                background: var(--primary-pink);
                color: white;
            }

            .calendar-day.unavailable {
                color: var(--medium-gray);
                cursor: not-allowed;
                opacity: 0.5;
            }

            .calendar-day.unavailable:hover {
                background: transparent;
            }

            .calendar-day.other-month {
                color: var(--medium-gray);
                opacity: 0.3;
            }

            .calendar-day.booked::after {
                content: '';
                position: absolute;
                bottom: 2px;
                left: 50%;
                transform: translateX(-50%);
                width: 4px;
                height: 4px;
                background: var(--accent-pink);
                border-radius: 50%;
            }

            .time-slots-container {
                margin-top: 1.5rem;
                padding-top: 1.5rem;
                border-top: 1px solid var(--light-gray);
            }

            .time-slots-container h4 {
                margin-bottom: 1rem;
                color: var(--text-dark);
            }

            .time-slots {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                gap: 0.5rem;
            }

            .time-slot {
                padding: 0.75rem;
                border: 2px solid var(--light-gray);
                border-radius: 8px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 500;
            }

            .time-slot:hover {
                border-color: var(--primary-pink);
                background: var(--soft-pink);
            }

            .time-slot.selected {
                background: var(--primary-pink);
                color: white;
                border-color: var(--primary-pink);
            }

            .time-slot.unavailable {
                background: var(--light-gray);
                color: var(--medium-gray);
                cursor: not-allowed;
                opacity: 0.6;
            }

            .time-slot.unavailable:hover {
                border-color: var(--light-gray);
                background: var(--light-gray);
            }

            .booking-summary {
                margin-top: 1.5rem;
                padding: 1.5rem;
                background: var(--soft-pink);
                border-radius: 10px;
            }

            .booking-summary h4 {
                margin-bottom: 1rem;
                color: var(--text-dark);
            }

            .summary-details {
                margin-bottom: 1.5rem;
            }

            .summary-item {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.5rem;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid rgba(233, 30, 99, 0.1);
            }

            .summary-item:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }

            .summary-label {
                font-weight: 500;
                color: var(--text-dark);
            }

            .summary-value {
                color: var(--primary-pink);
                font-weight: 600;
            }

            @media (max-width: 768px) {
                .time-slots {
                    grid-template-columns: repeat(3, 1fr);
                }
                
                .calendar-day {
                    font-size: 0.9rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.id === 'prevMonth') {
                this.previousMonth();
            } else if (e.target.id === 'nextMonth') {
                this.nextMonth();
            } else if (e.target.classList.contains('calendar-day') && !e.target.classList.contains('unavailable')) {
                this.selectDate(e.target);
            } else if (e.target.classList.contains('time-slot') && !e.target.classList.contains('unavailable')) {
                this.selectTime(e.target);
            } else if (e.target.id === 'confirmBooking') {
                this.confirmBooking();
            }
        });

        // Listen for service selection changes to update time slots
        const serviceSelect = document.querySelector('select[name="service"]');
        if (serviceSelect) {
            serviceSelect.addEventListener('change', () => {
                if (this.selectedDate) {
                    this.showTimeSlots(this.selectedDate);
                }
            });
        }
    }

    renderCalendar() {
        const calendarTitle = document.getElementById('calendarTitle');
        const calendarDays = document.getElementById('calendarDays');
        
        if (!calendarTitle || !calendarDays) return;

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        calendarTitle.textContent = `${monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;

        const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
        const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        calendarDays.innerHTML = '';

        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.textContent = date.getDate();
            dayElement.dataset.date = date.toISOString().split('T')[0];

            // Add classes based on date status
            if (date.getMonth() !== this.currentDate.getMonth()) {
                dayElement.classList.add('other-month');
            }

            if (this.isToday(date)) {
                dayElement.classList.add('today');
            }

            if (date < new Date().setHours(0, 0, 0, 0)) {
                dayElement.classList.add('unavailable');
            }

            if (!this.isDateAvailable(date)) {
                dayElement.classList.add('unavailable');
            }

            if (this.hasBookings(date)) {
                dayElement.classList.add('booked');
            }

            calendarDays.appendChild(dayElement);
        }
    }

    isToday(date) {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    }

    isDateAvailable(date) {
        const dayName = date.toLocaleDateString('en-US', { weekday: 'lowercase' });
        return this.businessHours[dayName] && this.businessHours[dayName].available;
    }

    hasBookings(date) {
        const dateString = date.toISOString().split('T')[0];
        return this.bookedAppointments.some(appointment => 
            appointment.date === dateString
        );
    }

    selectDate(dayElement) {
        // Remove previous selection
        document.querySelectorAll('.calendar-day.selected').forEach(day => {
            day.classList.remove('selected');
        });

        // Select new date
        dayElement.classList.add('selected');
        this.selectedDate = dayElement.dataset.date;
        
        this.showTimeSlots(this.selectedDate);
    }

    showTimeSlots(dateString) {
        const timeSlotsContainer = document.getElementById('timeSlots');
        const timeSlotsList = document.getElementById('timeSlotsList');
        
        if (!timeSlotsContainer || !timeSlotsList) return;

        const date = new Date(dateString);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'lowercase' });
        const businessHour = this.businessHours[dayName];

        if (!businessHour || !businessHour.available) {
            timeSlotsContainer.style.display = 'none';
            return;
        }

        const serviceSelect = document.querySelector('select[name="service"]');
        const selectedService = serviceSelect ? serviceSelect.value : 'acrylic';
        const serviceDuration = this.serviceDurations[selectedService] || 90;

        const timeSlots = this.generateTimeSlots(businessHour.start, businessHour.end, serviceDuration, dateString);
        
        timeSlotsList.innerHTML = '';
        timeSlots.forEach(slot => {
            const slotElement = document.createElement('div');
            slotElement.classList.add('time-slot');
            slotElement.textContent = slot.display;
            slotElement.dataset.time = slot.value;

            if (!slot.available) {
                slotElement.classList.add('unavailable');
            }

            timeSlotsList.appendChild(slotElement);
        });

        timeSlotsContainer.style.display = 'block';
    }

    generateTimeSlots(startTime, endTime, duration, date) {
        const slots = [];
        const start = this.timeToMinutes(startTime);
        const end = this.timeToMinutes(endTime);

        for (let time = start; time + duration <= end; time += 30) { // 30-minute intervals
            const timeString = this.minutesToTime(time);
            const endTimeString = this.minutesToTime(time + duration);
            
            slots.push({
                value: timeString,
                display: `${timeString} - ${endTimeString}`,
                available: this.isTimeSlotAvailable(date, timeString, duration)
            });
        }

        return slots;
    }

    timeToMinutes(timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        return hours * 60 + minutes;
    }

    minutesToTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    }

    isTimeSlotAvailable(date, time, duration) {
        // Check if the time slot conflicts with existing bookings
        const slotStart = this.timeToMinutes(time);
        const slotEnd = slotStart + duration;

        return !this.bookedAppointments.some(appointment => {
            if (appointment.date !== date) return false;
            
            const appointmentStart = this.timeToMinutes(appointment.time);
            const appointmentEnd = appointmentStart + appointment.duration;

            // Check for overlap
            return (slotStart < appointmentEnd && slotEnd > appointmentStart);
        });
    }

    selectTime(timeElement) {
        // Remove previous selection
        document.querySelectorAll('.time-slot.selected').forEach(slot => {
            slot.classList.remove('selected');
        });

        // Select new time
        timeElement.classList.add('selected');
        this.selectedTime = timeElement.dataset.time;
        
        this.showBookingSummary();
    }

    showBookingSummary() {
        const summaryContainer = document.getElementById('bookingSummary');
        const summaryDetails = document.getElementById('summaryDetails');
        
        if (!summaryContainer || !summaryDetails) return;

        const serviceSelect = document.querySelector('select[name="service"]');
        const selectedService = serviceSelect ? serviceSelect.value : 'acrylic';
        const serviceName = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : 'Acrylic Nail Application';
        
        const date = new Date(this.selectedDate);
        const formattedDate = date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        const duration = this.serviceDurations[selectedService] || 90;
        const endTime = this.minutesToTime(this.timeToMinutes(this.selectedTime) + duration);

        summaryDetails.innerHTML = `
            <div class="summary-item">
                <span class="summary-label">Service:</span>
                <span class="summary-value">${serviceName}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Date:</span>
                <span class="summary-value">${formattedDate}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Time:</span>
                <span class="summary-value">${this.selectedTime} - ${endTime}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Duration:</span>
                <span class="summary-value">${Math.round(duration / 60 * 10) / 10} hours</span>
            </div>
        `;

        summaryContainer.style.display = 'block';
    }

    confirmBooking() {
        if (!this.selectedDate || !this.selectedTime) {
            alert('Please select a date and time for your appointment.');
            return;
        }

        // Get client information from the form
        const nameInput = document.querySelector('input[name="name"]');
        const phoneInput = document.querySelector('input[name="phone"]');
        const emailInput = document.querySelector('input[name="email"]');
        const messageInput = document.querySelector('textarea[name="message"]');

        if (!nameInput || !phoneInput || !emailInput) {
            alert('Please fill in all required fields in the contact form.');
            return;
        }

        const bookingData = {
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            message: messageInput ? messageInput.value : '',
            date: this.selectedDate,
            time: this.selectedTime,
            service: document.querySelector('select[name="service"]').value,
            timestamp: new Date().toISOString()
        };

        // In a real application, this would be sent to your server
        this.processBooking(bookingData);
    }

    async processBooking(bookingData) {
        try {
            // Simulate API call
            console.log('Processing booking:', bookingData);
            
            // Add to local bookings (in production, this would be handled server-side)
            const serviceDuration = this.serviceDurations[bookingData.service] || 90;
            this.bookedAppointments.push({
                date: bookingData.date,
                time: bookingData.time,
                duration: serviceDuration,
                client: bookingData.name
            });

            // Show success message
            this.showBookingConfirmation(bookingData);
            
            // Reset the booking form
            this.resetBookingInterface();
            
        } catch (error) {
            console.error('Booking error:', error);
            alert('Sorry, there was an error processing your booking. Please try again or call us directly.');
        }
    }

    showBookingConfirmation(bookingData) {
        const date = new Date(bookingData.date);
        const formattedDate = date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        const message = `
            Thank you, ${bookingData.name}! Your appointment has been requested for ${formattedDate} at ${bookingData.time}.
            
            We'll contact you at ${bookingData.phone} to confirm your appointment.
            
            A confirmation email will be sent to ${bookingData.email}.
        `;

        // Use the existing notification system
        if (window.showNotification) {
            window.showNotification(message, 'success');
        } else {
            alert(message);
        }
    }

    resetBookingInterface() {
        this.selectedDate = null;
        this.selectedTime = null;
        
        // Hide time slots and summary
        const timeSlots = document.getElementById('timeSlots');
        const bookingSummary = document.getElementById('bookingSummary');
        
        if (timeSlots) timeSlots.style.display = 'none';
        if (bookingSummary) bookingSummary.style.display = 'none';
        
        // Remove selections
        document.querySelectorAll('.calendar-day.selected, .time-slot.selected').forEach(el => {
            el.classList.remove('selected');
        });
        
        // Re-render calendar to show new booking
        this.renderCalendar();
    }

    previousMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.renderCalendar();
    }

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.renderCalendar();
    }

    loadBookedAppointments() {
        // In a real application, this would fetch from your database
        // For demo purposes, we'll add some sample bookings
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        this.bookedAppointments = [
            {
                date: tomorrow.toISOString().split('T')[0],
                time: '10:00',
                duration: 120,
                client: 'Sample Client'
            }
        ];
    }
}

// Initialize the booking system when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure other scripts have loaded
    setTimeout(() => {
        new BookingSystem();
    }, 500);
});