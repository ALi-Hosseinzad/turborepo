import Link from 'next/link'

export default function NotFound(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-10">
      <div>not found content</div>
      <div>
        <Link
          href="/"
          className="text-red-400 border border-red-400 rounded-lg p-2"
        >
          back to homepage
        </Link>
      </div>
    </div>
  )
}
