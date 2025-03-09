import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { TAG_URL } from '@/constants/endPoints'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const currentPage = Number(url.searchParams.get('page'))
  const perPage = Number(url.searchParams.get('perPage'))
  const tagId = Number(url.searchParams.get('id'))
  const token = request.cookies.get('token')?.value
  const res = await fetch(`${process.env.BASE_URL}${TAG_URL}/${tagId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const handlePaginateArray = (
    array: [],
    currentPage: number,
    pageSize: number,
    tagName: string,
  ) => {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    const data = array.slice(startIndex, endIndex)
    const total = array.length
    const totalPage = Math.ceil(total / perPage)
    return {
      data,
      tagName,
      pagination: {
        total,
        currentPage,
        totalPage,
      },
    }
  }

  const data = await res?.json()
  const tagName = data.data.name
  const products = data.data.product
  const paginatedProducts = handlePaginateArray(
    products,
    currentPage,
    perPage,
    tagName,
  )

  return NextResponse.json(paginatedProducts)
}
