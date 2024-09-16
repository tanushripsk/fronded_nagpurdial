
import React from 'react';

const WhatsAppLinks = ({ links }) => {
    const handleButton1Click = () => {
        // Replace with the actual phone number index you want to redirect to
        const phoneNumberIndex = 0;
        window.open(links[phoneNumberIndex], '_blank');
    };

    const handleButton2Click = () => {
        // Replace with the actual phone number index you want to redirect to
        const phoneNumberIndex = 1;
        window.open(links[phoneNumberIndex], '_blank');
    };

    return (
        <div className="container">
            <div className="container-fluid p-10">
                {/* Your WhatsApp links component content */}
                <div>
                    {links.map((link, index) => (
                        <div key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                {/* Chat with {phoneNumbers[index]} */}
                            </a>
                        </div>
                    ))}
                </div>
                <hr />
            </div>
        </div>
    );
};

// Example data: array of phone numbers
const phoneNumbers = ['919604589537', '919834467583', '918080724453'];

// Example message
const message = 'Prashant';

// Function to generate WhatsApp links
const generateWhatsAppLinks = () => {
    const links = phoneNumbers.map(phone => {
        // Construct WhatsApp link for each phone number
        return `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(message)}`;
    });
    return links;
};

// Example usage:
const whatsappLinks = generateWhatsAppLinks();

export default WhatsAppLinks;