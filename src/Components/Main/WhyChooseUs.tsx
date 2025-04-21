import Card from "../UI/Card";

const WhyChooseUs = () => {
  return (
    <section className="p-8">
      <h2 className="mb-10 text-4xl sm:text-6xl">Why Choose Us</h2>
      <div className="h-[90vh] grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1 */}
        <Card
          y="100px"
          duration={1}
          style="bg-gradient-to-br from-yellow-800 to-yellow-950 rounded-lg"
          title="Tailored to You"
          text="Every design is customized to match your unique style and
            preferences, ensuring a perfect fit for your space."
        />

        {/* Card 2 (Morphed) */}
        <Card
          y="-100px"
          duration={1.2}
          style="bg-gradient-to-br from-gray-800 to-gray-900 rounded-tl-[50px] rounded-br-[50px]"
          title="Sustainable Materials"
          text="We prioritize eco-friendly practices, using responsibly sourced
            materials to create timeless designs."
        />

        {/* Card 3 (morphed) */}
        <Card
          y="100px"
          duration={1.3}
          style="bg-gradient-to-br from-gray-700 to-gray-800 rounded-tr-[50px] rounded-bl-[50px]"
          title="Exceptional Support"
          text="From consultation to delivery, our team is here to guide you every
            step of the way, ensuring a seamless experience."
        />

        {/* Card 4*/}
        <Card
          scale={1}
          duration={1}
          style="bg-gradient-to-br from-yellow-700 to-yellow-900 rounded-lg"
          title="Unmatched Craftsmanship"
          text="Our team of skilled artisans ensures every piece is crafted with
            precision and care, delivering unparalleled quality."
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;