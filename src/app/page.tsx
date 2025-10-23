import Link from 'next/link'

import { Title } from '@/components/atoms/Title'
import { Button } from '@/components/atoms/Button'

export default function Home() {
  return (
      <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
        <div>
          <Title> Página inicial </Title>
            
          <div>
            <ul>
              <li>
              <Button>
                <Link href='/cadastro'>Tela de Cadastro</Link>
              </Button>
              </li>
            </ul>
          </div>
        </div>
      </main>
  )
}
