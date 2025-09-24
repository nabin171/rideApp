"use client";

import * as React from "react";
import * as Toast from "@radix-ui/react-toast";

// Create Context
const ToastContext = React.createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const triggerToast = (title, description) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, title, description }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ triggerToast }}>
      <Toast.Provider swipeDirection="right">
        {children}
        {toasts.map((toast) => (
          <Toast.Root
            key={toast.id}
            open={true}
            onOpenChange={() => removeToast(toast.id)}
            className="bg-white border rounded-lg shadow p-4 w-80 relative"
          >
            <Toast.Title className="font-bold">{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.Close className="absolute top-2 right-2">X</Toast.Close>
          </Toast.Root>
        ))}
        <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2 z-50" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
};

// Custom hook to use in any component
export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
