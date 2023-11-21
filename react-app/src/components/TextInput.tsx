type TextInputProps = {
  id: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
};

export default function TextInput({
  id,
  type,
  value,
  onChange,
}: TextInputProps) {
  return (
    <div className="mt-2">
      <input
        id={id}
        type={type}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
