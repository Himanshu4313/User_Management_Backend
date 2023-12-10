const app = require("./app.js");

const PORT = process.env.PORT || 8000;

app.listen(PORT , () =>{
    console.log(`Your server is runing at port http://localhost:${PORT}`);
})

