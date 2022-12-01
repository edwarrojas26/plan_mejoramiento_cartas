
const express = require("express");
const app = express();
const port = 3000;
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
const rutas = require ('./rutas/rutas');



app.use('/', rutas);


app.use((req,res,next)=>{
  res.status(404).sendFile(__dirname + '/public/404.html')
  })


app.listen(port, () => {
  console.log(`Puerto en ejecucion= ${port}`);
});

