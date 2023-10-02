/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react'
import { containerStyle, innerStyle, leftStyle, paginationContainerStyle, btnPaginationStyle } from './styles'

import ItemContact from './ItemContact'

type propsTypes = {
    page: number,
    limit: number,
    totalItem: number,
    length: number


}

export default function Pagination({ page, limit, totalItem, length }: propsTypes) {
    const renderElement = (): React.ReactNode=> {

        const totalPage = Math.ceil(totalItem / limit);
        let pageNumbers = [];
        const limitShow: number = 3;

        let maxLeft: number = page - Math.floor(limitShow / 2)
        let maxRight: number = page + Math.floor(limitShow / 2)
        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = limitShow;
        }
        if (maxRight > limitShow) {
            maxLeft = totalPage - (limitShow - 1)
            if (maxLeft < 1) {
                maxLeft = 1
            }
            maxRight = totalPage
        }
        for (let i = maxLeft; i <= maxRight; i++) {
            pageNumbers.push(i)
        }

        return (
            <>
                {maxLeft == 1 ? <></> : <button css={btnPaginationStyle}>...</button>
                }
                {pageNumbers.map(item => (
                    <button css={btnPaginationStyle}>{item}</button>
                ))}
                {maxRight == totalPage ? <></> : <button css={btnPaginationStyle}>...</button>
                }

            </>
        )
    }

    /* const renderPage = () => {
        const arr=[]
        const page = 10
        for (let i = 1; i <= page; i++) {
            if (i < (page / 3) || i == page) {
                
                arr.push (<button css={btnPaginationStyle}>{i}</button>)
            }
            else {
                arr.push(<button css={btnPaginationStyle}>...</button>)
 
            }
 
        }
        return arr
    }*/
    return (
        <div css={paginationContainerStyle} >


            {renderElement()}
        </div>
    )
}
