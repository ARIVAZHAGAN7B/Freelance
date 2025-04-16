const getPortfolioData = (req, res) => {
    const { membername } = req.params;

    if (!membername) {
      return res.status(400).json({ error: "Member name is required in URL." });
    }
  
    // Decode URI component in case it has %20 for spaces
    const decodedName = decodeURIComponent(membername).trim();
  
    const [firstName, ...rest] = decodedName.split(" ");
    const lastName = rest.join(" ");
  
    const mockPortfolioData = {
      firstName,
      lastName,
      role: "Senior Developer",
      projects: ["App UI Revamp", "Internal Dashboard", "API Integration"],
      bio: "Passionate developer with 5+ years of experience building full-stack applications."
    };
  
    res.status(200).json(mockPortfolioData);
  };
  
  module.exports = { getPortfolioData };
  