import express from "express"
import mysql from "mysql"
import cors from "cors"
import path from "path"

const app = express()

const base = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "babf360dca1795",
    password: "b984dfe7",
    database: "heroku_cb8597b2deefbe3"
})

app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get("/", (req, res)=>{
    res.json("The backend sends its regards");
})

app.get("/juegos", (req, res)=>{
    const consulta = "SELECT * FROM juegos"
    base.query(consulta,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/juegos", (req, res)=>{
    const consulta = "INSERT INTO juegos(`Nombre`, `Plataforma`, `FechaLanzamiento`, `Descripcion`, `Portada`) VALUES(?)";
    //const values =["nombre back","plataforma back","2012-02-01","Esto viene del backend","Portada back.png"];
    const values =[req.body.Nombre, req.body.Plataforma, req.body.FechaLanzamiento, req.body.Descripcion, req.body.Portada];

    base.query(consulta,[values], (err, data) =>{
        if(err) return res.json(err);
        return res.json("Juego añadido");
    });
});
//http://localhost:8800/juegos/"+id

app.delete("/juegos/:id", (req,res)=>{
    const idJuegos = req.params.id;
    const consulta  = "DELETE FROM juegos WHERE idJuegos = ?"
    console.log(idJuegos)

    base.query(consulta,[idJuegos],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Juego eliminado");
    });
});

app.put("/juegos/:id", (req,res)=>{
    const idJuegos = req.params.id;
    const consulta  = "UPDATE juegos SET `Nombre`= ?, `Plataforma` = ?, `FechaLanzamiento` = ?, `Descripcion` = ?, `Portada` = ? WHERE idJuegos = ?"

    const values=[req.body.Nombre, req.body.Plataforma, req.body.FechaLanzamiento, req.body.Descripcion, req.body.Portada]
    console.log([...values, idJuegos])

    base.query(consulta,[...values, idJuegos],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Juego actualizado");
    });
});


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
    });

app.listen(8800, ()=>{
    console.log("The Backend lives.. FOR EVER", 8800);
})