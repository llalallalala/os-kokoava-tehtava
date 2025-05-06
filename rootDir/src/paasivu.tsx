//import * as React from 'react';

export function PaaSivu(props: any) {
    const [generateText, random] = props.functions

    return (
        <>
            <header>
                <h1>{generateText(30)}</h1>
            </header>
            <div>
                <div className='x'>
                    <p>{generateText(10)}</p>
                    <hr />
                    <p>{generateText(300)}</p>
                </div>
            </div>
            <footer>
                &copy;{generateText(4)} - {generateText(8)}.. 2011 - 20{random(1, 4)}{random(1, 4)}
            </footer>
        </>
    )
}