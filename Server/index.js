const express = require('express');

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3005

app.listen(PORT, () => {
    console.log(`Server Listening on http//:localhost:${PORT}`);
  });
