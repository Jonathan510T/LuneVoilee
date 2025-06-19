'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Expanded FAQ data to include custom answers for the new Sizing & Care section
const faqData = [
  {
    category: 'Shipping Questions',
    questions: [
      {
        q: 'How much is shipping?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'How quickly do you process and ship your orders?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'How can I track my order status?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'How long will it take for my order to arrive?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'Do International orders have to pay custom fees?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'What happens if I refuse an order?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  },
  {
    category: 'Ordering Questions',
    questions: [
      {
        q: 'Is your ordering system secure?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'What payment methods can I use?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'Every time I try placing an order I get an error',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'Can I cancel my order?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'Can I change my address after placing my order?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  },
  {
    category: 'Delivery Questions',
    questions: [
      {
        q: 'I received the incorrect Item/Color/Size',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: "I didn't receive my order, what can I do?",
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'I received a damaged package',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  },
  {
    category: 'Return & Exchange Questions',
    questions: [
      {
        q: 'What is your return/exchange policy?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'How long will the return/exchange process take?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: 'Am I responsible for the return shipping fees?',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        q: "There's an issue with my item, what can I do?",
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  },
  {
    category: 'Sizing & Care',
    questions: [
      {
        q: 'How do I find the right size?',
        a: 'Chest: Measure around the fullest part, keeping tape snug but not tight. Waist: Measure at your natural waistline. Sleeve: From center back neck, across shoulder, down to wrist.'
      },
      {
        q: 'What care instructions should I follow?',
        a: 'Machine wash cold on a gentle cycle. Turn items inside out to preserve prints. Hang dry or tumble low. Avoid bleach and harsh detergents.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpenMap(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-100 pt-32 pb-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-center uppercase tracking-wide mb-8">
            Frequently Asked Questions
          </h1>

          {faqData.map((section, si) => (
            <div key={si} className="mb-6">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">{section.category}</h2>
              {section.questions.map((item, qi) => {
                const id = `${si}-${qi}`;
                return (
                  <div key={id}>
                    <button
                      onClick={() => toggle(id)}
                      className="w-full flex justify-between items-center py-3 text-left"
                    >
                      <span className="font-medium">{item.q}</span>
                      <i className={`bx text-lg transition-transform duration-200 ${openMap[id] ? 'bx-chevron-up' : 'bx-chevron-down'}`} />
                    </button>
                    {openMap[id] && (
                      <p className="px-4 pb-3 text-gray-700">{item.a}</p>
                    )}
                    <hr />
                  </div>
                );
              })}
            </div>
          ))}

          <div className="pt-4 border-t">
            <h2 className="text-xl font-semibold mb-4">Get Support</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex items-start space-x-4">
                <i className="bx bx-envelope text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold">Contact us</h3>
                  <p>Send us an email!</p>
                </div>
              </div>
              <div className="border rounded-lg p-4 flex items-start space-x-4">
                <i className="bx bx-phone text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold">Call us</h3>
                  <p>
                    Want to talk to a live agent, call us!<br />
                    <span className="font-semibold">M-F 9AM–5PM PT: +1 818 206 8764</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}