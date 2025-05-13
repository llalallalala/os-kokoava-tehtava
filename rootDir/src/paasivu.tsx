//import * as React from 'react';

export function PaaSivu(props: any) {
    const [generateText] = props.functions

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
        </>
    )
}