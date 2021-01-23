export const fetchSkills = async () => {
  const data = await fetch("http://localhost:3500/skills");
  return data.json();
};
