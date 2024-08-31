import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginModal({email}) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); // Change the route as needed
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Successfully Logged In</h2>
        <p>You have logged in as {email}</p>
        <button
            onClick={handleButtonClick}
            className="mt-4 px-4 py-2 bg-green-900 text-white rounded"
        >
            OK
        </button>
        </div>
    </div>
  );
}

export default LoginModal;