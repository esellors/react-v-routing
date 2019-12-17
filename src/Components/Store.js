import React from 'react';
import { Link } from 'react-router-dom';

export default function Store() {
    return (
        <div>
            <h1>Store Component</h1>
            <h4><Link to='/store/1'>My only product</Link></h4>
        </div>
    )
}
