import express, { Request, Response } from 'express'
import productRouter from './modules/product/product.router'

const app = express()
app.use(express.json())

app.use('/api/products', productRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('geting test')
})

export default app
