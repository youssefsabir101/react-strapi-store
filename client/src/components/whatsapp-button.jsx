"use client"

// Removed: import { MessageCircle } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa" // Imported the WhatsApp icon from react-icons/fa

export default function WhatsAppButton() {
  const phoneNumber = "+212647804243"
  const whatsappLink = `https://wa.me/${phoneNumber}` // Standard WhatsApp link

  return (
    <a
      href={whatsappLink}
      target="_blank" // Open in a new tab
      rel="noopener noreferrer" // Security best practice for target="_blank"
      className="fixed bottom-24 right-8 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center w-12 h-12"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" /> {/* Replaced MessageCircle with FaWhatsapp */}
    </a>
  )
}
