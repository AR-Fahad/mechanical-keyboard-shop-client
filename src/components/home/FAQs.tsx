import k from "../../assets/images/FAQs.png";

const FAQs = () => {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl mb-2 md:mb-5 text-black font-bold text-center">
        <span className="border-l-slate-200 border-l-[5px] border-t-slate-200 border-t-[5px] px-1">
          FAQs
        </span>
      </h3>
      <div className="px-5 py-5 md:px-10 flex items-center justify-center gap-5 flex-col-reverse lg:flex-row">
        <div>
          <img className="w-full" src={k} alt="" />
        </div>
        <div className="border shadow-lg rounded-md">
          <div
            tabIndex={1}
            className="collapse collapse-plus border-base-300 bg-base-100 border rounded-none rounded-t-md"
          >
            <div className="collapse-title text-xl font-medium">
              1. What is a mechanical keyboard?
            </div>
            <div className="collapse-content">
              <p>
                A mechanical keyboard uses individual mechanical switches for
                each key, offering a more durable, tactile, and responsive
                typing experience compared to membrane keyboards.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-plus border-base-300 bg-base-100 border rounded-none"
          >
            <div className="collapse-title text-xl font-medium">
              2. How do I choose the right mechanical switch?
            </div>
            <div className="collapse-content">
              <p>
                Mechanical switches vary in actuation force, feedback, and
                sound. Common types include Cherry MX Red (light and linear),
                Cherry MX Blue (clicky and tactile), and Cherry MX Brown
                (tactile and quiet). Choose based on your preference for typing
                feel and noise level.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse collapse-plus border-base-300 bg-base-100 border rounded-none"
          >
            <div className="collapse-title text-xl font-medium">
              3. How do I clean my mechanical keyboard?
            </div>
            <div className="collapse-content">
              <p>
                To clean your keyboard, gently remove the keycaps with a keycap
                puller, clean the surface with compressed air or a soft brush,
                and wipe the keycaps with a damp cloth.
              </p>
            </div>
          </div>
          <div
            tabIndex={4}
            className="collapse collapse-plus border-base-300 bg-base-100 border rounded-none"
          >
            <div className="collapse-title text-xl font-medium">
              4. What if a key stops working?
            </div>
            <div className="collapse-content">
              <p>
                First, try cleaning the switch. If the issue persists, it might
                be a faulty switch that needs replacing. Our keyboards come with
                hot-swappable switches, allowing you to easily replace them
                without soldering. Contact our support for assistance.
              </p>
            </div>
          </div>
          <div
            tabIndex={5}
            className="collapse collapse-plus border-base-300 bg-base-100 border rounded-none rounded-b-md"
          >
            <div className="collapse-title text-xl font-medium">
              5. How do I know if my keyboard is under warranty?
            </div>
            <div className="collapse-content">
              <p>
                All keyboards come with a 1-year warranty from the date of
                purchase. If your keyboard is within this period, it’s covered.
                For warranty claims, please provide your order number and a
                description of the issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
