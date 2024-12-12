import { Lightbulb, Rocket, Shield } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Innovation Strategy',
    description: 'Transform your business with cutting-edge solutions and strategic planning.',
  },
  {
    icon: Shield,
    title: 'Secure Solutions',
    description: 'Enterprise-grade security and reliability for your critical operations.',
  },
  {
    icon: Rocket,
    title: 'Rapid Growth',
    description: 'Accelerate your business growth with data-driven insights and optimization.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
