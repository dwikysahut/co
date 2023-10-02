/** @jsxImportSource @emotion/react */
import ItemContact from './ItemContact'
import { containerStyle, innerStyle, leftStyle, rightStyle } from './styles'

import { ContactType } from '../utils/propsTypes';

type PropType={
    data:ContactType[],
    onFavoriteHandler:(id:number)=>void,
}
export default function ListContact({data,onFavoriteHandler}:PropType) {
    console.log(data)
    return (
        <div css={containerStyle}  >
            <div css={innerStyle}>
                {data.length>0?
                data.map(item=>(<ItemContact item={item} onFavoriteHandler={onFavoriteHandler}/>)):<p>Item Kosong</p>
            }
                
            </div>
        </div>
    )
}