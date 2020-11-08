module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json({
      response: "API Works!",
    });
  });
  app.post("/file", (req, res) => {});
};
