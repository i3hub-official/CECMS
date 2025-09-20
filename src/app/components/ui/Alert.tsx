// src/app/components/ui/Alert.tsx
import { ReactNode } from "react";

interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  title?: string;
  message: string | ReactNode;
  onDismiss?: () => void;
  className?: string;
  showIcon?: boolean;
  dismissible?: boolean;
  action?: ReactNode;
}

export default function Alert({
  type,
  title,
  message,
  onDismiss,
  className = "",
  showIcon = true,
  dismissible = true,
  action,
}: AlertProps) {
  const alertStyles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-800",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  };

  const style = alertStyles[type];

  return (
    <div
      className={`${style.bg} ${style.border} border rounded-lg p-4 mb-6 ${className}`}
    >
      <div className="flex items-start">
        {showIcon && (
          <div className={`${style.text} mr-3 flex-shrink-0`}>{style.icon}</div>
        )}

        <div className="flex-1">
          {title && (
            <h3 className={`text-sm font-medium ${style.text} mb-1`}>
              {title}
            </h3>
          )}
          <div className={`text-sm ${style.text}`}>{message}</div>

          {action && <div className="mt-3">{action}</div>}
        </div>

        {dismissible && onDismiss && (
          <button
            onClick={onDismiss}
            className={`ml-4 flex-shrink-0 ${style.text} hover:opacity-70 transition-opacity`}
            aria-label="Dismiss alert"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
