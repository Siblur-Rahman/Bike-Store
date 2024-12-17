import { Request, Response } from 'express'
import { productService } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body
    const result = await productService.createProduct(productData)
    res.json({
      message: 'product created successfully',
      data: result,
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

export const productController = { createProduct }
