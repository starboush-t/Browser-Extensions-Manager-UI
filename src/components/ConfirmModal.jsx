function ConfirmModal({ open, onConfirm, onCancel, message }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg min-w-[300px]">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
