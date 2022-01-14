import { useState } from "react";

export default function useUserLogin(initialState, loginURL, setUser) {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault(e);
    const { username, password } = formData;
    console.log(username, password);
    const params = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ identifier: username, password }),
    };

    if (username.length && password.length) {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:1337/api/auth/local", params);
        const data = await response.json();

        console.log(data)

        if (data.data === null && data.error) {
          const errorMessage = data.error.message;
          setError(errorMessage);
          setIsLoading(false);
          return;
        }

        if (data.data !== null && data.jwt) {
          setUser(data);
          setIsLoading(false);
          return;
        }
        
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
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
