import React from 'react'
type Style = {
    styles: React.CSSProperties
}
export default function Styles({ styles }: Style) {
    return (
        <div style={styles}>Styles</div>
    )
}
