import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    <section className="py-20 bg-stratify-dark/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stratify-dark mb-4">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-stratify-dark/80 max-w-2xl mx-auto">
            See how Stratify transforms workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-[#13183F] p-8 rounded-xl border border-[#3A86FF]/20 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:border-[#3A86FF]">
    <blockquote className="text-white mb-6 italic [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
      "{testimonial.comment}"
    </blockquote>
    <div className="flex items-center">
      <img
        src={testimonial.avatarUrl}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4 border-2 border-stratify-primary transition-all duration-300 group-hover:border-white"
      />
      <div>
        <h4 className="font-bold text-stratify-dark group-hover:text-stratify-primary transition-colors duration-300">
          {testimonial.name}
        </h4>
        <p className="text-stratify-secondary/80 group-hover:text-white/90 transition-colors duration-300">
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);

export default Testimonials;
