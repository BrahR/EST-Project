type InputLabelProps = {
  id: string;
  label: string;
};

export default function InputLabel({ id, label }: InputLabelProps) {
  return (
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {label}
    </label>
  );
}
