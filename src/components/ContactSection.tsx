import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Simulate a form submission
        try {
            // Here you would typically send the data to your server
            // await sendContactForm({ name, email, message });
            setSuccess(true);
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            setError('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className="contact-section">
            <h2>Contact Us</h2>
            {success && <div className="success-message">Your message has been sent!</div>}
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactSection;