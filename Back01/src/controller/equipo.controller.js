import { pool } from '../database.js'

export const getEquipos = async (req, res) =>{
    const[rows]=await pool.query('SELECT nom FROM equipo WHERE id_us=?')
    res.json(rows)
}