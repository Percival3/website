import React from 'react';

export const Services: React.FC = () => {
  const services = [
    { title: 'Web Development', price: '$99/hr', features: ['React/Next.js', 'Performance Optimization', 'Responsive Design'] },
    { title: 'UI/UX Design', price: '$85/hr', features: ['Figma Prototyping', 'User Research', 'Design Systems'] },
    { title: 'Consulting', price: '$120/hr', features: ['Code Review', 'Architecture Planning', 'Team Training'] },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-surface-on sm:text-4xl">Our Services</h1>
        <p className="mt-4 text-lg text-surface-onVariant">Professional solutions for your digital needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col rounded-3xl bg-surface-bright shadow-sm ring-1 ring-outline-variant hover:ring-primary transition-all duration-300 p-8">
            <h3 className="text-xl font-semibold text-surface-on">{service.title}</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-4xl font-bold tracking-tight text-surface-on">{service.price}</span>
            </p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-surface-onVariant flex-1">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-8 block w-full rounded-2xl bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-on shadow-sm hover:bg-primary-container hover:text-primary-onContainer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
              Contact us
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};