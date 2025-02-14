export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <div className="h-80 rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team Image"
          loading="lazy"
          className="size-full object-cover"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 text-center">
        We’d love to hear from you
      </h2>

      <p className="text-center text-gray-500">
        At Xventory, we’re here to help you every step of the way. Whether you
        have questions about our platform, need support with your account, or
        want to learn more about how we can help your business, our team is
        ready to assist you.
      </p>

      <div className="flex flex-col md:flex-row gap-3.5">
        <article className="card card-compact bg-base-100 w-full mx-auto">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center text-gray-700">
              Contact information
            </h2>

            <div className="flex flex-col items-center">
              <h6 className="text-base font-semibold text-gray-600">
                Email Address
              </h6>
              <p className="text-base text-gray-500">support@xventory.com</p>

              <h6 className="text-base font-semibold text-gray-600">
                Phone Number
              </h6>
              <p className="text-base text-gray-500">+1 (555) 123-4567</p>

              <h6 className="text-base font-semibold text-gray-600">
                Office Address
              </h6>
              <p className="text-base text-gray-500">
                123 Main St, Anytown, USA
              </p>

              <h6 className="text-base font-semibold text-gray-600">
                Office Hours
              </h6>
              <p className="text-base text-gray-500">Mon - Fri, 9AM - 5PM</p>
            </div>
          </div>
        </article>

        <article className="card card-compact bg-base-100 w-full mx-auto shadow">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center text-gray-700">
              Contact with us
            </h2>

            <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="name"
                  className="text-lg font-semibold text-gray-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="off"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="email"
                  className="text-lg font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="message"
                  className="text-lg font-semibold text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  className="textarea textarea-bordered text-base resize-none"
                ></textarea>
              </div>

              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
}
