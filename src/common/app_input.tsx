// import React, { ChangeEvent } from "react";

// interface TextInputProps {
//   label: string;
//   name: string;
//   type?: string;
//   value: string;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
//   error?: string;
//   required?: boolean;
// }

// export const TextInput: React.FC<TextInputProps> = ({
//   label,
//   name,
//   type = "text",
//   value,
//   onChange,
//   placeholder,
//   error,
//   required = false,
// }) => {
//   return (
//     <div className="flex flex-col mb-4">
//       <label htmlFor={name} className="mb-2 font-medium text-gray-700">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className={`border rounded-lg px-4 py-2 ${
//           error ? "border-red-500" : "border-gray-300"
//         } focus:outline-none focus:ring-2 focus:ring-blue-400`}
//       />
//       {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
//     </div>
//   );
// };
