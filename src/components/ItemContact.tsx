/** @jsxImportSource @emotion/react */
import { itemContainerStyle, innerStyle, leftStyle, rightStyle } from './styles'
import { ContactType } from '../utils/propsTypes';
type PropsTypes={
    item:ContactType,
    onFavoriteHandler:(id:number)=>void,
}

export default function ItemContact({item,onFavoriteHandler}:PropsTypes){
    return (
        <div css={itemContainerStyle}  >
          
                <div css={leftStyle}>
                    <p>{item.first_name} {item.last_name}</p>
                    {item.phones.map(item=>(<p>{item.number}</p>))}
                </div>
                <div css={rightStyle}>
                    <button onClick={()=>onFavoriteHandler(item.id)}>Add Favorite</button>

                </div>
          
        </div>
    )
}