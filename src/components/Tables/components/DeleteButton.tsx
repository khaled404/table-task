import { TrashIcon } from "@heroicons/react/solid";

export default function DeleteButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      <TrashIcon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
