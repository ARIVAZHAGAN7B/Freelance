import React from 'react';
import './Testimonals.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-title">What Clients Say</h2>
      <div className="testimonials-list">
        {[
          {
            quote:
              "CodeXCoders was a game-changer for our agency. They took our rough ideas and turned them into a sleek, modern website that aligns perfectly with our brand identity. Their team is responsive, efficient, and truly cares about delivering a top-tier product. We couldn’t be happier with the results!",
            name: "David Thompson",
            role: "Founder, BrightIdeas Agency",
          },
          {
            quote:
              "I am beyond impressed with the work CodeXCoders did for my business. They understood my vision from the very beginning and created a website that’s not only stunning but functional and user-friendly. It’s been a pleasure working with them, and I will definitely be returning for future projects.",
            name: "Rachel Mitchell",
            role: "Owner, Luxe Interiors",
          },
          {
            quote:
              "Working with CodeXCoders was a fantastic experience. They streamlined our internal processes by integrating custom solutions into our website. The final product is incredibly efficient and easy for our team to manage.",
            name: "Carlos Rivera",
            role: "Director of Operations, GlobalReach Logistics",
          },
          {
            quote:
              "Our e-commerce platform needed a complete overhaul, and CodeXCoders delivered exactly what we needed. Their team provided a website that is not only aesthetically pleasing but also incredibly easy to navigate.",
            name: "Olivia Bennett",
            role: "Head of E-commerce, FashionHub",
          },
          {
            quote:
              "We approached CodeXCoders with a complicated project, and they exceeded all of our expectations. They developed a highly functional platform that has helped streamline our business operations.",
            name: "Jake Williams",
            role: "Co-Founder, InnovateTech Solutions",
          },
          {
            quote:
              "CodeXCoders helped us create a clean, modern website that represents our company’s mission perfectly. Their team is incredibly professional and easy to work with.",
            name: "Natalie Clark",
            role: "CEO, HealthFirst Solutions",
          },
          {
            quote:
              "The CodeXCoders team is top-notch. They helped us redesign our website from scratch, ensuring that it was both visually appealing and easy to navigate.",
            name: "Zachary Foster",
            role: "CTO, FinWise Advisors",
          },
          {
            quote:
              "CodeXCoders helped us build a website that perfectly reflects our sustainable farming values. The entire process was smooth, and we’ve been thrilled with the end result!",
            name: "Charlotte Davis",
            role: "Owner, GreenSprout Farms",
          },
          {
            quote:
              "From the first consultation to the final launch, CodeXCoders went above and beyond. Their technical expertise, creativity, and customer-first attitude make them a standout in the web development space.",
            name: "Samuel Roberts",
            role: "Senior Manager, PrimeTech Solutions",
          },
          {
            quote:
              "We were looking for a website that reflects the peaceful and calming atmosphere of our yoga studio, and CodeXCoders delivered exactly that. The site is gorgeous, easy to navigate, and perfectly aligns with the spirit of our brand.",
            name: "Mary Wallace",
            role: "Founder, Simply Bliss Yoga",
          },
        ].map((testimonial, i) => (
          <blockquote key={i} className="testimonial-card">
            <div className="client-details">
              <h3>{testimonial.name}<p>{testimonial.role}</p></h3>
            </div>
            <p>"{testimonial.quote}"</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
