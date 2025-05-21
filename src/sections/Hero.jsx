import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="text-[18px] tracking-widest uppercase text-p3 mb-3">
              Unified Platform
            </div>
            <h1 className="mb-6 h1 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              <span className="text-p1">Layer</span> Your Tech Stack <br />
              <span className="text-p3">Without The Complexity</span>
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Stratify seamlessly connects your business applications in one
              intelligent interface, eliminating tool sprawl while preserving
              each system's unique capabilities.
            </p>
            <div className="flex gap-4 max-md:flex-col">
              <LinkScroll to="features" offset={-100} spy smooth>
                <Button icon="/images/zap.svg">See How It Works</Button>
              </LinkScroll>
              <LinkScroll to="pricing" offset={-100} spy smooth>
                <Button
                  // variant="outline"
                  icon="/images/zap.svg"
                >
                  Explore Plans
                </Button>
              </LinkScroll>
            </div>
          </div>

          <div className="absolute mt-28 top-22 left-[calc(50%-200px)] w-[1200px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.jpg"
              className="w-full max-h-[550px] max-w-[1000px] object-contain"
              alt="Layered platform interface showing connected applications"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
