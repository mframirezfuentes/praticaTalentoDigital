const express =require('express')
const app=express()
const {mostrarTodo,filtrar}=require('./consulta.js')

app.listen(3000,()=>console.log('Servidor 3000 encendido'))

app.get("/",async(req,res)=>{
 
    res.sendFile(__dirname+'/index.html')
    
})

app.get("/practicas",async(req,res)=>{
    const cursos= await mostrarTodo();
    res.send(JSON.stringify(cursos))

})
app.post("/filtrar",async(req,res)=>{

    let {estado,cliente,fechaOrden,fechaHasta}=req.body
    let payload={estado,cliente,fechaOrden,fechaHasta}
console.log("pay",payload)
    try {
        const result= await filtrar(payload)
        console.log("r",result)
        res.status(200).send(JSON.stringify(result))
    } catch (error) {
        res.status(500).send({
            error: `Algo salio mal ${error}`,
            code: 500
        })
    }

})