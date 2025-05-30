import { useEffect } from "react";
import "./clickSplash.css";
export default function useClickSplash() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClick = (e) => {
      const splash = document.createElement("div");
      splash.className = "splash";
      splash.style.left = `${e.pageX - 10}px`;
      splash.style.top = `${e.pageY - 10}px`;
      document.body.appendChild(splash);
    console.log("click-effect");
      setTimeout(() => {
        splash.remove();
      }, 700);
    };

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);
}
