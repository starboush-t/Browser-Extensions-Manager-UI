function ConfirmModal({ open, onConfirm, onCancel, message }) {
  if (!open) return null;

  return (
    <div className="fixed pt-10 inset-0 z-50 flex items-center justify-center  ">
      <div className="bg-gray-700 dark:bg-gray-900 p-6 rounded shadow-lg min-w-[300px] opacity-100">
        <p className="mb-4 text-gray-200">{message}</p>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 text-gray-200 hover:text-white bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
