import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import UserLoginContext from "../AppContexts";

/**
 * Custom hook for tracking visited courses by the user.
 * @returns {void}
 */
export default function useTrackCourseVisit() {
  const { isUserLoggedIn, userid } = useContext(UserLoginContext);
  const location = useLocation();

  useEffect(() => {
    const trackVisit = async () => {
      if (!isUserLoggedIn || !userid) return;
      let courseSlug = location.pathname.split("/").pop();

      try {
        const response = await fetch('/visited-courses', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: userid, course: courseSlug }),
        });

        if (!response.ok) {
          console.log("Tracking failed: ", await response.text());
        }
      } catch (err) {
        console.error(`Tracking error: ${err}`);
      }
    };

    trackVisit(); // Track the visit when conditions are met
  }, [isUserLoggedIn, location.pathname, userid]);
}
