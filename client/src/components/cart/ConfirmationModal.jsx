"use client"
import { X, AlertTriangle } from "lucide-react" // Import Lucide icons

function ConfirmationModal({ show, onClose, onConfirm, message }) {
  if (!show) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[999] p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-violet-100 p-8 max-w-sm w-full text-center transform animate-modal-open relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce-once">
          <AlertTriangle className="w-10 h-10 text-white" />
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{message}</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">Please confirm your action. This cannot be undone.</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-violet-200 text-violet-700 rounded-xl font-semibold hover:bg-violet-50 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl font-semibold hover:from-red-700 hover:to-rose-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Confirm
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalOpen {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes bounceOnce {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-10px); }
          40% { transform: translateY(0); }
          60% { transform: translateY(-5px); }
          80% { transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-modal-open {
          animation: modalOpen 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        .animate-bounce-once {
          animation: bounceOnce 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ConfirmationModal;
