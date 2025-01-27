import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  resume: File | null; // File or null
  coverLetter?: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null, // Default to null
    coverLetter: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [fileName, setFileName] = useState<string | null>(null);

  const validateForm = (): Errors => {
    const newErrors: Errors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required"; // Error for missing resume
    }

    return newErrors;
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
    setFileName(file?.name || null);
    setErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted successfully!", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-16 pt-10  ">
      <div className=" flex flex-row w-[100%] justify-between ">
        <div className="w-1/2 pr-8">
          <label className="block text-sm font-medium text-[#333333]">
            First Name*
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 w-full h-10 border rounded-4xl p-2 border-[#333333]"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div className="w-1/2 pl-8">
          <label className="block text-sm font-medium text-[#333333]">
            Last Name*
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 w-full h-10 border rounded-4xl p-2 border-[#333333]"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className=" flex flex-row w-[100%] justify-between">
        <div className="w-1/2 pr-8">
          <label className="block text-sm font-medium text-gray-700">
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full h-10 border rounded-4xl p-2 border-[#333333]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="w-1/2 pl-8">
          <label className="block text-sm font-medium text-[#333333]">
            Phone*
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full h-10 border rounded-4xl p-2 border-[#333333]"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
      </div>
      <h1 className="text-[#333333] font-bold text-2xl">
        Supporting Documents
      </h1>
      <div>
        <label className="block text-sm font-medium text-[#333333]">
          Resume/CV*
        </label>
        <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 flex justify-center items-center cursor-pointer hover:border-blue-500 transition w-full h-32 relative">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          {fileName ? (
            <span className="text-gray-600">{fileName}</span>
          ) : (
            <p className="text-gray-500">Upload a file or drag and drop here</p>
          )}
        </div>
        {errors.resume && (
          <p className="text-red-500 text-sm">{errors.resume}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Cover Letter
        </label>
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full border rounded-md p-2"
        ></textarea>
        {errors.coverLetter && (
          <p className="text-red-500 text-sm">{errors.coverLetter}</p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#1167B1] text-white py-2 px-6 rounded-4xl hover:bg-blue-700 focus:outline-none"
        >
          Apply
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;
