import { Text } from 'react-native'

const CardAlex = (props) => {
    console.log(props)
    return (
        <>
            <Text>{props.item.amount}</Text>
        </>
    )
}

export default CardAlex