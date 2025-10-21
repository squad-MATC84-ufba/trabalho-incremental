import Link from 'next/link'

import Title from '../../components/atoms/title'
import Button from '../../components/atoms/button' // TODO: Remover átomos da página

export default function Home() {
  return (
      <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
        <div>
          <Title> Página inicial </Title>
            
          <div>
            <ul>
              <li>
              <Button>
                <Link href='/teste-atomos'>Teste de Átomos</Link>
              </Button>
              </li>
            </ul>
          </div>
        </div>
      </main>
  )
}
