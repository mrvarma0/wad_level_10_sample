const app = require("./app");
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server listening at port - ${port}`);
});
