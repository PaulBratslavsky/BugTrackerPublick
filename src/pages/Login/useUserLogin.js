import { useState } from "react";

export default function useUserLogin(initialState, loginURL, setUser) {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault(e);
    const { username, password } = formData;
    const params = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ identifier: username, password }),
    };

    if (username.length && password.length) {
      setIsLoading(true);
      try {
        const response = await fetch(loginURL, params);
        const data = await response.json();

        if (data.message) {
          const errorMessage = data.message[0].messages[0].message;
          setError(errorMessage);
          setIsLoading(false);
          return;
        }
        setUser(data);
      } catch (error) {
        setIsLoading(false);
        setError(`Please check API connection`);
      }
    } else {
      setError("Form cannot be blank.");
    }
  }

  function handleFieldChange(e) {
		const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  }

  return {
    handleFieldChange,
    handleSubmit,
    formData,
    isLoading,
    error,
  };
}
