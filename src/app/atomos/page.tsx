'use client'

import React, { useState } from 'react'
import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import { Label } from '@/components/atoms/Label'
import { Title } from '@/components/atoms/Title'
import Link from 'next/link'

export default function Page() {
    const [text, setText] = useState('')
    const [items, setItems] = useState<string[]>([])

    function addItem() {
        if (!text.trim()) return
        setItems((s) => [text.trim(), ...s])
        setText('')
    }

    function clearAll() {
        setItems([])
    }

    return (
        <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
            <Title>Teste de Átomos</Title>

            <Button><Link href='..'>Back</Link></Button>
            <section style={{ marginTop: 16, maxWidth: 560 }}>
                <Label>This is a label!</Label>

                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Input
                        type='text'
                        value={text}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                        placeholder="Digite aqui"
                        aria-label="test-input"
                    />

                    <Button onClick={addItem} aria-label="add-button">
                        Add
                    </Button>

                    <Button onClick={clearAll} aria-label="clear-button">
                        Clear
                    </Button>
                </div>
            </section>

            <section style={{ marginTop: 24, maxWidth: 560 }}>
                <Title>Items</Title>
                {items.length === 0 ? (
                    <p style={{ color: '#666' }}>No items yet — add one above.</p>
                ) : (
                    <ul>
                        {items.map((it, idx) => (
                            <li key={idx} style={{ marginBottom: 6 }}>
                                {it}
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            <section style={{ marginTop: 24, maxWidth: 560 }}>
                <Title>Button states</Title>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <Button onClick={() => alert('Primary clicked')}>Primary</Button>
                </div>
            </section>
        </main>
    )
}