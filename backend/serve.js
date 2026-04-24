const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const corsOption = {
    origin: 'http://localhost:5173'
}
app.use(cors(corsOption));

app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, title: "Portfolio React", description: "Modern UI portfolio" },
    { id: 2, title: "SHMS Fullstack", description: "Fullstack app" },
    { id: 3, title: "G. courses", description: "CRUD system" },
  ]);
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  
});