import { DataSource } from "typeorm"
import entities from "."

export const AppDataSource = new  DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin123',
    database: 'website_db',
    entities
})