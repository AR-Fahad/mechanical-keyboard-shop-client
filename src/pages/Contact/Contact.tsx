import { FormEvent } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { toast } from "sonner";

const Contact = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    toast.success("Email send successfully");
  };

  return (
    <div className="w-90% mx-auto md:w-[80%] lg:w-[60%] xl:w-[50%] my-10">
      <div className="text-black px-5 lg:px-8 grid grid-cols-1 gap-5 md:grid-cols-3 mb-10">
        <div className="bg-base-100 px-4 py-3  space-y-1 border rounded-md shadow-lg hover:scale-105">
          <div className="text-center font-semibold">
            <h3>
              <MdLocationPin className="inline text-xl" />
            </h3>
            <h3>Location</h3>
          </div>
          <h3 className="text-center">Brooklyn, NY, USA</h3>
        </div>
        <div className="bg-base-100 px-4 py-3 space-y-1 border rounded-md shadow-lg hover:scale-105">
          <div className="text-center font-semibold">
            <h3>
              <FaPhoneAlt className="inline" />
            </h3>
            <h3>Phone</h3>
          </div>
          <h3 className="text-center">(901)-6576-7688</h3>
        </div>
        <div className="bg-base-100 px-4 py-3 space-y-1 border rounded-md shadow-lg hover:scale-105">
          <div className="text-center font-semibold">
            <h3>
              <MdEmail className="inline text-xl" />
            </h3>
            <h3>Email</h3>
          </div>
          <h3 className="text-center">keyworld@us.com</h3>
        </div>
      </div>
      <div>
        <form onSubmit={onSubmit} className="p-5" action="">
          <div className="text-center mb-5">
            <h3 className="font-semibold">Any problem from our services?</h3>
            <h3>Feel free to contact us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 font-normal gap-5">
            <div>
              <label htmlFor="name" className="label">
                <span className="font-medium">Name</span>
              </label>
              <input
                type="text"
                id="name"
                className="input input-sm md:input-md input-bordered w-full"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="label">
                <span className="font-medium">Email</span>
              </label>
              <input
                type="email"
                id="email"
                className="input input-sm md:input-md input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="label">
                <span className="font-medium">Message</span>
              </label>
              <textarea
                id="message"
                className="textarea textarea-sm md:textarea-md textarea-bordered w-full h-28"
                placeholder="Your message..."
                required
              />
            </div>
          </div>
          <div className="mt-5">
            <input
              className="btn btn-sm border-black border-[1.5px] join-item bg-black opacity-90 text-white hover:opacity-100 hover:bg-black hover:border-[1.5px] hover:border-black px-5"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
