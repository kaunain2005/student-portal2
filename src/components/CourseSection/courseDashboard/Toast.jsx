import React, { useState } from "react";
import Toast from "./Toast";

const Example = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowToast(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Show Toast
      </button>

      {showToast && (
        <Toast
          message="Operation Successful!"
          type="success"
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default Example;
