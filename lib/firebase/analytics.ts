import { config } from "@/lib/firebase/config";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// The `analytics` export is used to initialize Firebase Analytics if the code is running in a browser environment.
// It provides analytics capabilities for tracking user interactions and events within the application.
export const analytics =
  typeof window !== "undefined"
    ? getAnalytics(initializeApp(config))
    : undefined;

