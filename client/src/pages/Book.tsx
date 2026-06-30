import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Book() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation("/contact");
  }, [setLocation]);

  return null;
}
