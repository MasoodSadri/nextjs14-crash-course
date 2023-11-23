import { revalidateTag } from 'next/cache'

interface Product {
  id: number
  title: string
  price: number
}

async function Shop() {
  const response = await fetch('http://localhost:8000/products', {
    cache: 'no-cache',
    next: {
      tags: ['products'],
    },
  })

  const data: Product[] = await response.json()

  async function addProduct(e: FormData) {
    'use server'

    const title = e.get('title')
    const price = e.get('price')

    const newProduct = { title, price }

    await fetch('http://localhost:8000/products', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    revalidateTag('products')
  }

  return (
    <div>
      <form
        action={addProduct}
        className='flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md'
      >
        <input
          type='text'
          name='title'
          placeholder='Title'
          className='p-2 bg-slate-600 outline-none rounded-md'
        />
        <input
          name='price'
          type='text'
          placeholder='Price'
          className='p-2 bg-slate-600 outline-none rounded-md'
        />
        <button className='p-2 bg-slate-900 text-slate-100 rounded-md'>
          Add Product
        </button>
      </form>
      <div className='flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5'>
        {data.map((item) => (
          <div
            key={item.id}
            className='p-5 bg-slate-800 rounded-md text-center'
          >
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
