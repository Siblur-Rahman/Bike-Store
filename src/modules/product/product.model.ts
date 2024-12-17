import { model, Schema } from 'mongoose'
import { IProduct } from './product.interface'

const productSchema = new Schema<IProduct>({
  name: String,
  brand: String,
  price: Number,
  category: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
  },
  description: String,
  quantity: Number,
  inStock: Boolean,
})

const Product = model<IProduct>('product', productSchema)
export default Product
