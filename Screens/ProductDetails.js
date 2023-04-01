import {View, Text, Image, StyleSheet} from 'react-native';
import {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import { fetchProductDetail } from "../Services/ProductDetails/action.js";
import starIcon from "../assets/starIcon.png"
import { useRoute } from '@react-navigation/native';

const ProductDetails = (props) => {

    const {details,onFetchProductDetail} = props;
    const route = useRoute();

    useEffect(()=>{
        console.log(route.params.id);
        onFetchProductDetail(route.params.id);
    },[])

    return(
        <View style={styles.mainContainer}>
                <View style={styles.productCategory}><Text style={styles.category}>{details && details.category}</Text></View>
                {details && details.rating.rate > 4 && <View  style={styles.productCategory}><Text style={styles.category}>Best Seller</Text></View>}
                <View style={styles.productRating}>
                    <Image source={starIcon} style={styles.starIcon}></Image>
                    <Text style={styles.rating}>{details && details.rating.rate}</Text>
                </View>
                     <Image source={{uri:details && details.image}} style={styles.image}></Image>

                      <View style={styles.about}>
                           <Text style={styles.price}>${details && details.price}</Text>
                          <Text style={styles.title}>{details && details.title}</Text>
                          <Text style={styles.desc}>{details && details.description}</Text>
                      </View>
        </View>
    )
}

const styles = StyleSheet.create({
        mainContainer:{
            backgroundColor:'black',
            flex:1,
        },
        category:{
            color:'black',
            fontSize:16
        },
        image:{
            alignSelf:'center',
            height:200,
            width:150,
            marginVertical:20
        },
        title:{
            fontSize:20,
            fontWeight:600,
            color:'white',
            marginHorizontal:30,
            textAlign:'center',
            marginBottom:20
        },
        desc:{
            fontSize:18,
            color:'grey',
            textAlign:'center'
        },
        productCategory:{
            borderWidth:1,
            borderColor:'grey',
            padding:10,
            backgroundColor:'white',
            width:160,
            marginVertical:5,
        },
        price:{
            color:'white',
            fontSize:20,
            marginBottom:20,
            color:'grey',
            alignSelf:'center'
        },
        productRating:{
            flexDirection:'row',
            justifyContent:'flex-start'
        },
        rating:{
            color:'white',
            fontSize:18
        },
        starIcon:{
            height:25,
            width:25,
            marginHorizontal:6
        }
})
const mapStateToProps = (state) => ({
  details: state.productDetailReducer.data
});

const mapDispatchToProps = (dispatch) => ({
  onFetchProductDetail: (id) => dispatch(fetchProductDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);