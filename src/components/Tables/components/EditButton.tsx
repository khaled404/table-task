import { PencilIcon } from "@heroicons/react/solid";

export default function EditButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <PencilIcon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
