const app = require('./SRC/app')

const PORT = 3030

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta: ${PORT}`)
})