import { EyeIcon } from "@heroicons/react/solid";

export default function ShowButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      <EyeIcon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
