import {View, Text, Image, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import starIcon from "../assets/starIcon.png";

const ProductCard = (props) => {

    const navigation = useNavigation();
    const {data} = props;

    const openDetailScreen = () => {
        navigation.navigate('ProductDetails',{id:data.id})
    }

    return(
    <TouchableOpacity style={styles.productContainer} onPress={openDetailScreen}>
        <View style={styles.list}>
            <Image source={{uri:data.image}} style={styles.productImage}></Image>
        </View>

        <View style={styles.aboutProduct}>
            <View style={styles.rating}>
                <Image source={starIcon} style={styles.starIcon}></Image>
                <Text style={styles.productRating}>{data.rating.rate}</Text>
            </View>
            <Text style={styles.productName}>{data.title}</Text>
            <Text style={styles.productPrice}>${data.price}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    productContainer:{
        width:'50%',
        padding:10,
    },
    list:{
        borderWidth:1,
        borderRadius:20,
        padding:20,
        backgroundColor:'white',
        alignItems:'center',
        alignContent:'stretch'
    },
    productImage:{
        height:200,
        width:150,
        alignSelf:'center'
    },
    aboutProduct:{
        marginHorizontal:10,
        marginTop:10
    },

    productName:{
        fontSize:15,
        color:'white'
    },
    productPrice:{
        marginTop:10,
        color:'grey',
        fontSize:20
    },
    productRating:{
        color:'white',
        fontSize:18
    },
    rating:{
        justifyContent:'flex-end',
        marginBottom:5,
        flexDirection:'row'
    },
    starIcon:{
        height:25,
        width:25,
        marginRight:6
    }

})


export default ProductCard;