/** @jsxImportSource @emotion/react */

import ListContact from '../components/ListContact'
import Pagination from '../components/Pagination'
import { useQuery, gql } from '@apollo/client';
import { containerStyle, innerStyle, leftStyle, rightStyle } from '../styles/styles'
import { useEffect, useState } from 'react';
import { GET_CONTACTS } from '../utils/http';
import { ContactType } from '../utils/propsTypes';
import { isElementAccessExpression } from 'typescript';


export default function ContactList() {
    const { loading, error, data } = useQuery(GET_CONTACTS);
    const [dataContact, setDataContact] = useState<ContactType[]>([])

    const favoriteHandler = (id: number): void => {
        setDataContact(prevState => prevState.map(item => {
            if (item.id == id) {
                return {
                    ...item,
                    isFavorite: true,
                }

            }
            return { ...item }
        }))


    }
    useEffect(() => {
        if (data) {
            console.log(data)
            const newData=data.contact.map((item:ContactType)=>({...item,isFavorite:false}))
            setDataContact(newData)
        }

    }, [data])
    useEffect(() => {

        console.log(dataContact)
    }, [dataContact])


    return (
        <div css={containerStyle}  >
            <div css={innerStyle}>
                <div css={leftStyle}>
                    Favorite Contacts
                    <ListContact data={ dataContact.filter(item => item.isFavorite == true)} onFavoriteHandler={favoriteHandler} />

                    <Pagination length={10} limit={3} totalItem={10} page={1} />
                </div>
                <div css={leftStyle}>Contact List
                    <ListContact data={dataContact.filter(item => item.isFavorite == false)} onFavoriteHandler={favoriteHandler} />
                    <Pagination length={10} limit={3} totalItem={10} page={1} />

                </div>
            </div>
        </div>
    )
}