import { useEffect, useState } from "react";

export default function useUserStats(username) {
  const [streak, setStreak] = useState(null);
  const [favCourses, setFavCourses] = useState(null);
  const [problems, setProblems] = useState(null);
  const [submits, setSubmits] = useState(null);
  const [hints, setHints] = useState(null);
  const [solutions, setSolutions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchStats = async () => {
      setLoading(true);
      try {
        const [streakRes, favCoursesRes, problemsRes,
           submitsRes , hintsRes, solutionsRes] = await Promise.all([
          fetch(`http://localhost:5000/login-streak?username=${username}`),
          fetch(`http://localhost:5000/get-favorite-courses?username=${username}`),
          fetch(`http://localhost:5000/get-user-problems?username=${username}`),
          fetch(`http://localhost:5000/get-problems-submitted?username=${username}`),
          fetch(`http://localhost:5000/get-hints-revealed?username=${username}`),
          fetch(`http://localhost:5000/get-complete-solutions-revealed?username=${username}`)
        ]);

        if (!streakRes.ok || !favCoursesRes.ok || !problemsRes
         || !submitsRes || !hintsRes || !solutionsRes) {
          throw new Error("Failed to fetch user statistics.");
        }

        // unpatch what i get from server
        const streakData = await streakRes.json();
        const favCoursesData = await favCoursesRes.json();
        const problemsData = await problemsRes.json();
        const submittedData = await submitsRes.json();
        const hintsData = await hintsRes.json();
        const solutionsData = await solutionsRes.json();

        // updating states
        setStreak(streakData.streak);
        setFavCourses(favCoursesData.favoriteCourses);
        setProblems( problemsData.problemsStatus );
        setSubmits( submittedData.submittedSolutions );
        setHints( hintsData.totalHintsRevealed );
        setSolutions( solutionsData.totalSeenProblems );
      }catch(err){
        console.error("Error fetching user stats:", err);
        setError(err.message);
      }finally{
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return { streak, favCourses , problems, submits, hints, solutions, loading, error };
}
