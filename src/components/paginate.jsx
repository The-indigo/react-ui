import React from 'react';

function Pagination({ totalPosts,postPerPage,paginate}){
    const pageNumbers= []

    for(let i=1; i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i);
    }
return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(numbers=>(
                <li key={numbers}>
                    <a onClick={ ()=>paginate(numbers)} href='!#'>
                        {numbers}
                    </a>
                    </li>
            ))}
            </ul>
        </nav>
)
}

export default Pagination