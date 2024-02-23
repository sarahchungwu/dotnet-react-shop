import { Product } from '../../app/models/product'
import { ProductList } from './ProductList'
import { useEffect, useState } from 'react'

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((respone) => respone.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <>
      <ProductList products={products} />
    </>
  )
}
