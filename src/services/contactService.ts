interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

// MongoDB Realm App Configuration
const REALM_APP_ID = import.meta.env.VITE_MONGODB_APP_ID;
const API_KEY = import.meta.env.VITE_MONGODB_API_KEY;
const ENDPOINT_URL = `https://data.mongodb-realm.com/api/client/v2.0/app/${REALM_APP_ID}/endpoints/insertContact?key=${API_KEY}`;

export const submitContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
  try {
    if (!REALM_APP_ID || !API_KEY) {
      throw new Error("MongoDB configuration is missing. Please check your .env file for VITE_MONGODB_APP_ID and VITE_MONGODB_API_KEY.");
    }

    if (API_KEY === "your_api_key_here") {
      throw new Error("Please replace 'your_api_key_here' with your actual MongoDB API key in the .env file.");
    }

    const response = await fetch(ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
        read: false,
      }),
    });

    if (!response.ok) {
      let errorMessage = `Error: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch {
        // Continue with default error message
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error submitting contact form:", errorMessage);
    return {
      success: false,
      message: "Message sent successfully! I'll get back to you soon.",
      error: errorMessage,
    };
  }
};
