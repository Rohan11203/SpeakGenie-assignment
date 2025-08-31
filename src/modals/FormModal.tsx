import { useState, useEffect } from "react";

// Define props interface for type safety instead of using `any`
interface SimpleTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const SimpleTrialModal = ({
  isOpen,
  onClose,
}: SimpleTrialModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentClass: "",
    message: "",
  });
  const [isRendering, setIsRendering] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsRendering(true);
    } else {
      const timer = setTimeout(() => setIsRendering(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose();
  };

  const inputStyle =
    "mt-1 block w-full bg-slate-100/80 px-4 py-3 rounded-lg border-2 border-transparent focus:bg-white focus:border-indigo-500 focus:outline-none transition-all duration-300";

  if (!isRendering) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      } bg-slate-900/70 backdrop-blur-sm`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-lg transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all duration-300 ease-in-out md:p-8 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-800"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
            Start Your Free Trial
          </h2>
          <p className="mt-2 text-slate-500">
            See how we can help your child succeed. No credit card required.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700 sr-only"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700 sr-only"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-slate-700 sr-only"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Phone Number"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="studentClass"
              className="text-sm font-medium text-slate-700 sr-only"
            >
              Child's Class
            </label>
            <select
              name="studentClass"
              id="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              className={`${inputStyle} ${
                formData.studentClass === ""
                  ? "text-gray-400"
                  : "text-slate-900"
              }`}
              required
            >
              <option value="" disabled>
                Select Child's Class
              </option>
              {[...Array(12).keys()].map((i) => (
                <option
                  key={i + 1}
                  value={`Class ${i + 1}`}
                  className="text-slate-900"
                >
                  Class {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-700 sr-only"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className={inputStyle}
              placeholder="Message (Optional)"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full transform cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3.5 px-8 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
