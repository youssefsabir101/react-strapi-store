import Footer from "./Footer";
import Navbar from "../navbar/Navbar"
import { useEffect } from "react";
function Faq() {
    useEffect(() => {
      document.title="SabDecor | FAQs";
    },[]);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const faqs = [
      {
        question: "Do you offer free shipping?",
        answer: "Yes, we offer free shipping on all orders over $50.",
      },
      {
        question: "What is your return policy?",
        answer: "Our return policy allows you to return items within 30 days of purchase for a full refund.",
      },
      {
        question: "Can I track my order?",
        answer: "Yes, once your order is shipped, you will receive a tracking number to monitor its delivery status.",
      },
      {
        question: "Do you offer assembly services?",
        answer: "Yes, we offer assembly services for select furniture items. Please contact customer support for more information.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and Apple Pay.",
      },
      {
        question: "Do you have a physical store?",
        answer: "Yes, we have multiple physical store locations. You can find our store nearest to you using our store locator.",
      },
      {
        question: "How can I contact customer support?",
        answer: "You can contact our customer support team via email at support@example.com or by phone at 1-800-123-4567.",
      },
      {
        question: "What are your business hours?",
        answer: "Our business hours are Monday to Friday, 9:00 AM to 6:00 PM. We are closed on weekends and holidays.",
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to select countries. Shipping rates and delivery times may vary.",
      },
    ];

    return (
      <>
        <Navbar />
      










        
        {/* FAQs */}
        <section className="relative bg-transparent ">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
            <div className="pt-16">
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-violet-700">Frequently Asked Questions</h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Have a question? We've got answers! Check out our FAQ section below.</p>
            </div>

            </div>

            <div className="mt-8 sm:mt-12 space-y-4 bg-white rounded-lg p-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border-s-4 border-violet-700 bg-violet-200 p-6 [&_summary::-webkit-details-marker]:hidden rounded-md"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 ">
                    <h2 className="text-lg font-medium text-gray-700">{faq.question}</h2>
                    <span className="shrink-0 rounded-full bg-white p-1.5 text-violet-700 sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 transition duration-500 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      {/* /FAQs */}

      
        
        
        <Footer />
      </>
    )
  }
  
  export default Faq