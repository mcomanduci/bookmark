import FaqAccordion from "./FaqAccordion";

function Faq() {
  return (
    <>
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-graishBlue">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </p>
        </div>
      </section>

      <section id="faq-accordion">
        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            <FaqAccordion title="What is Bookmark?" index="1" />
            <FaqAccordion title="How can I request a new browser?" index="2" />
            <FaqAccordion title="Is there a mobile app?" index="3" />
            <FaqAccordion
              title="What about other Chromium browsers?"
              index="4"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
