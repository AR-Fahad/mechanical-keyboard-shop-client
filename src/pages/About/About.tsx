import why from "../../assets/images/Why.png";

const About = () => {
  return (
    <div className="my-10 space-y-16">
      <div className="px-5 lg:p-5 flex flex-col-reverse lg:flex-row  justify-center gap-5 items-center">
        <div className="flex-1">
          <img className="w-full" src={why} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl mb-2 text-black font-bold text-center">
            <span className="border-l-slate-200 border-l-[5px] border-t-slate-200 border-t-[5px] px-1 lg:border-none lg:px-0">
              Why Choose Us?
            </span>
          </h3>
          <p>
            Our keyboards are crafted with the highest quality materials,
            ensuring durability and a premium typing experience. We carefully
            select each component to meet the exacting standards of enthusiasts
            and professionals alike.We guarantee 100% authenticity in every
            product we offer. From key switches to keycaps, every part is
            sourced from reputable manufacturers, giving you peace of mind with
            every purchase.We believe your keyboard should be as unique as you
            are. That’s why we offer a wide range of customization options, from
            key switch types to personalized keycaps, so you can build the
            keyboard of your dreams. KeyWorld focusing on quality, authenticity,
            customization, support, delivery, and community engagement.
          </p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl md:text-3xl mb-2 lg:mb-5 text-black font-bold text-center">
          <span className="border-l-slate-200 border-l-[5px] border-t-slate-200 border-t-[5px] px-1">
            Meet Our Team
          </span>
        </h3>
        <p className="text-center">
          At KeyWorld, our team is the heartbeat of everything we do. We’re a
          group of passionate keyboard enthusiasts dedicated to bringing you the
          best mechanical keyboard experience. Get to know the people behind the
          scenes who make it all happen.
        </p>
        <div className="p-5 mt-5">
          <h3 className="font-semibold">
            <span className="underline ">Alex Thompson – Founder & CEO</span>
          </h3>
          <p>
            With a lifelong passion for technology and a keen eye for detail,
            Alex founded KeyWorld to share his love for mechanical keyboards
            with the world. His vision drives the company, ensuring that every
            product we offer meets the highest standards of quality and
            performance.
          </p>
        </div>
        <div className="p-5 mt-5">
          <h3 className="font-semibold">
            <span className="underline ">
              Emily Davis – Head of Product Development
            </span>
          </h3>
          <p>
            Emily is the mastermind behind our innovative product lineup. With a
            background in engineering and design, she leads the team in creating
            keyboards that are not only functional but also aesthetically
            pleasing. Her creativity and technical expertise ensure that our
            products stay ahead of the curve.
          </p>
        </div>
        <div className="p-5 mt-5">
          <h3 className="font-semibold">
            <span className="underline ">Mark Lee – Lead Technician</span>
          </h3>
          <p>
            Mark is the go-to expert for all things mechanical. With years of
            experience in the industry, he oversees the assembly and quality
            control of every keyboard that leaves our shop. His attention to
            detail ensures that each product is perfectly tuned for the ultimate
            typing experience.
          </p>
        </div>
        <div className="p-5 mt-5">
          <h3 className="font-semibold">
            <span className="underline ">
              Sarah Johnson – Customer Support Manager
            </span>
          </h3>
          <p>
            Sarah is the friendly voice behind our customer service. Whether you
            need help choosing the right keyboard or troubleshooting an issue,
            Sarah and her team are here to assist you every step of the way. Her
            dedication to customer satisfaction is unmatched.
          </p>
        </div>
        <div className="p-5 mt-5">
          <h3 className="font-semibold">
            <span className="underline ">
              Jason Patel – Marketing & Community Manager
            </span>
          </h3>
          <p>
            Jason is the connector between KeyWorld and our vibrant community of
            keyboard enthusiasts. He manages our social media, organizes events,
            and keeps you informed about the latest products and trends. His
            goal is to make KeyWorld not just a shop but a community hub for all
            things mechanical keyboards.
          </p>
        </div>
        <div className="p-5 mt-5">
          <h3 className="font-semibold">
            <span className="underline">
              Rachel Martin – Logistics & Operations Coordinator
            </span>
          </h3>
          <p>
            Rachel ensures that every order is processed and shipped
            efficiently. Her meticulous planning and coordination keep our
            operations running smoothly, making sure your new keyboard arrives
            safely and on time. She’s the reason behind our fast and reliable
            delivery.
          </p>
        </div>
      </div>
      <div className="px-5">
        <h3 className="text-2xl md:text-3xl mb-2 lg:mb-5 text-black font-bold text-center">
          <span className="border-l-slate-200 border-l-[5px] border-t-slate-200 border-t-[5px] px-1">
            KeyWorld Message
          </span>
        </h3>
        <p className="text-center">
          We’re truly grateful that you took the time to learn more about
          KeyWorld and our passion for mechanical keyboards. Your interest and
          support mean the world to us. Thank you for being part of our story.
          We’re excited about what the future holds, and we’re thrilled to have
          you with us on this journey. If you ever have any questions, need
          support, or just want to share your keyboard experience, don’t
          hesitate to reach out—we’re here for you.
          <p className="font-semibold">Thank you for visiting KeyWorld</p>
        </p>
      </div>
    </div>
  );
};

export default About;
