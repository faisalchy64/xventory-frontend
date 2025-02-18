import { useForm } from "react-hook-form";

export default function Product() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="w-4/5 flex flex-col items-center gap-10 py-10 mx-auto">
      <article className="card card-compact bg-base-100 w-full md:flex-row rounded-none">
        <figure className="w-full rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="size-full object-cover"
          />
        </figure>
        <div className="card-body w-full">
          <h2 className="text-xl font-semibold text-gray-700">Green Apple</h2>
          <p className="text-gray-500">
            Fresh and organic green apple. Fresh and organic green apple. Fresh
            and organic green apple.
          </p>

          <div>
            <h2 className="text-base font-semibold text-gray-600">Quantity</h2>
            <p className="text-gray-500">150 KG</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-600">Sold</h2>
            <p className="text-gray-500">25 KG</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-600">Seller</h2>
            <p className="text-gray-500">Abc</p>
          </div>

          <div className="flex flex-col gap-2.5 py-2.5">
            <input
              type="text"
              placeholder="Enter order quantity"
              className="input input-bordered w-full text-gray-500"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Quantity is required.",
                },
                min: {
                  value: 0,
                  message: "Quantity cannot be negative.",
                },
                max: {
                  value: 150,
                  message: "Quantity cannot be more than 150 KG.",
                },
                pattern: {
                  value: /^(?:\d+)(?:\.\d+)?$/,
                  message: "Enter valid quantity.",
                },
                valueAsNumber: true,
              })}
            />

            {errors && errors.quantity && (
              <p className="text-error">{errors.quantity.message}</p>
            )}
          </div>

          <div className="card-actions justify-between items-center pt-2.5 border-t">
            <h2 className="text-xl font-semibold text-gray-700">$4.85 / KG</h2>
            <button
              className="btn btn-primary"
              onClick={handleSubmit(onSubmit)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
