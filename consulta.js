const {
    Pool
} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '1234',
    database: 'talentoDigital',
    host: 'localhost',
    port: 5432
})

async function mostrarTodo() {
    const result = await pool.query(`select orderNumber,orderDate, requiredDate,status from orders `)
    return result.rows

}

async function buscarStatus() {
    const result = await pool.query(`select distinct(status) from orders`)
    return result.rows
}
async function filtrar(estado, cliente, fechaOrden, fechaHasta) {
    if (estado != null && cliente != null && fechaOrden != null && fechaHasta != null) {
        const result = await pool.query(`select orderNumber,orderDate, requiredDate,status from orders where orderNumber=${cliente} and status=${estado} and orderDate=${fechaOrden} and requiredDate=${fechaHasta}`)
        return result.rows;
    }
    if (estado != null) {
        const result = await pool.query(`select orderNumber from orders where orderNumber=${cliente}`)
        return result.rows;
    }
    if (estado != null && cliente != null) {
        const result = await pool.query(`select orderNumber, status from orders where orderNumber=${cliente} and status=${estado}`)
        return result.rows;
    }
    if (estado != null) {
        const result = await pool.query(`select status from orders where status=${estado}`)
        return result.rows;
    }
}
module.exports = {
    buscarStatus,
    filtrar,
    mostrarTodo
}