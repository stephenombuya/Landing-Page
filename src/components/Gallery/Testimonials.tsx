import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Hail Global transformed our business operations. Their innovative solutions helped us achieve unprecedented growth.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    rating: 5
  },
  {
    quote: "The team's expertise and dedication to our success made all the difference. Highly recommended!",
    author: "Michael Chen",
    role: "CTO, InnovateLabs",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
