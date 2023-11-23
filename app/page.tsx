import Link from 'next/link'

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
