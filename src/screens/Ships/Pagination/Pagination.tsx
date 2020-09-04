import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getCount, getNextPageURL, getPreviosPageURL } from 'selectors';
import actions from 'actions';

import * as s from './Pagination.styled';

const Pagination: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const count = useSelector(getCount);
    const nextPage = useSelector(getNextPageURL);
    const previousPage = useSelector(getPreviosPageURL);

    const pages = count && Math.round(count / 10);

    // @ts-ignore
    if (count < 10) {
        return null;
    };

    return (
        <s.Pagination>
            <s.ActionButton
                onClick={() => {
                    previousPage && actions.showPrevious(previousPage);
                    setCurrentPage(currentPage - 1);
                }}
                disabled={previousPage === null}
            >
                {'<'}
            </s.ActionButton>
            {Array(pages).fill(0).map((item, i) => (
                <s.PaginationItem key={i} active={currentPage === i + 1}>
                    {i + 1}
                </s.PaginationItem>
            ))}
            <s.ActionButton
                onClick={() => {
                    nextPage && actions.showNext(nextPage);
                    setCurrentPage(currentPage + 1)
                }}
                disabled={nextPage === null}
            >
                {'>'}
            </s.ActionButton>
        </s.Pagination>
    );
};

export default Pagination;
