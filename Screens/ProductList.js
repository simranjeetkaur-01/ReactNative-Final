
import { useEffect, useState } from "react";
import {Text, StyleSheet, View, TextInput, FlatList, Image, ScrollView, TouchableOpacity, Button  } from 'react-native';
import {connect} from 'react-redux';
import { fetchProductList } from "../Services/ProductList/action.js";
import productListReducer from "../Services/ProductList/reducer.js"
import ProductCard from "../Components/ProductCard.js";
import FilterModal from "../Components/FilterModal.js";
import SortModal from "../Components/SortModal.js";
import filterIcon from "../assets/filterIcon.png";
import sortIcon from "../assets/sortIcon.png";
import searchIcon from "../assets/searchIcon.png";

const ProductList = (props) => {

const { productData, onFetchProductList } = props;

    const [productList, setProductList] = useState(null);
    const [searchProduct,setSearchProduct] = useState("");
    const [sortModalVisible,setSortModalVisible] = useState(false);
    const [filterModalVisible,setFilterModalVisible] = useState(false);
    const [categoryList,setCategoryList] = useState(null);


    function removeDuplicates(arr){
        return arr.filter((item,index) =>
        arr.indexOf(item) === index);
    }

    useEffect(() => {
        onFetchProductList();
    }, []);

    useEffect(() => {
      productData && setProductList(productData);
    }, [productData]);

    useEffect(() => {
        const categories = productList && productList.map((item)=>{
            return item.category;
        })

        if(categories) {
           var list = removeDuplicates(categories);
        }
        setCategoryList(list);
    },[productList])

      useEffect(() => {
        if (searchProduct === "") {
          productData && setProductList(productData);
        }
      }, [searchProduct]);

    const handleInputChange = (text) => {
      setSearchProduct(text);
    };

    const handleProductSearch = () => {
      const filteredList = productList.filter((item) => {
        if (searchProduct === "") {
          return item;
        } else {
          return item.title.toLowerCase().includes(searchProduct.toLowerCase());
        }
      });
      setProductList(filteredList);
    };

    const handleFilterBtn = () => {
        setFilterModalVisible(prev => !prev)
        const categories = productData && productData.map((item)=>{
            return item.category;
        })

        if(categories) {
           var list = removeDuplicates(categories);
        }
        setCategoryList(list);
    }

   return(
    <ScrollView style={styles.mainContainer}>
        <View style={styles.searchBar}>
              <TextInput
                  style={styles.input}
                  value={searchProduct}
                  onChangeText={handleInputChange}
                  autoFocus={false}
              />
             <Image source={searchIcon} style={styles.searchIcon}></Image>

              <TouchableOpacity
              onPress={handleProductSearch}
              style={styles.searchButton}
              >
                   <Text style={styles.searchBtn}>Search</Text>
            </TouchableOpacity>

        </View>

        <SortModal sortModalVisible={sortModalVisible} setSortModalVisible={setSortModalVisible} productList={productList} setProductList={setProductList} ></SortModal>
        <FilterModal filterModalVisible={filterModalVisible} setFilterModalVisible={setFilterModalVisible} productList={productList} setProductList={setProductList} categoryList={categoryList} ></FilterModal>
        <View style={styles.filterBar}>
            <TouchableOpacity style={styles.filterBtn} onPress={handleFilterBtn} >
                <Image source={filterIcon} style={styles.filterIcon}></Image>
                <Text style={styles.filter}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortBtn} onPress={()=>setSortModalVisible(prev => !prev)}>
                <Image source={sortIcon} style={styles.sortIcon}></Image>
                <Text style={styles.sort}>Sort By</Text>
            </TouchableOpacity>
        </View>

      <View>
      <View style={styles.cardList}>
        {productList && productList.length >0 ? productList.map((item,index) => {
            return <ProductCard data={item}></ProductCard>
        }) : <View style={styles.noResultContainer}><Text style={styles.noResult}>No Results Found</Text></View>}
      </View>
      </View>
    </ScrollView>
   )
}

const styles = StyleSheet.create({
 mainContainer: {
    backgroundColor:'black',
    flex:1,
    width:'100%',
    height:'100%',
    padding:10
  },
   searchBar:{
       height:60,
       flexDirection:'row',
       alignItems:'center',
       marginVertical:10
   },
   input:{
       borderWidth:1,
       width:250,
       height:40,
       padding:10,
       marginLeft:10,
       borderColor:'white',
       color:'white'
   },

    cardList:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    filterBar:{
        backgroundColor:'black',
        flexDirection:'row',
        width:'100%',
        alignItems:'space-between',
        padding:10,
    },
    filterBtn:{
        borderWidth:1,
        width:'48%',
        marginRight:10,
        padding:10,
        borderRadius:6,
        flexDirection:'row',
        borderColor:'white'
    },
    sortBtn:{
        borderWidth:1,
        width:'48%',
        padding:10,
        borderRadius:6,
        flexDirection:'row',
        borderColor:'white'
    },
    filter:{
        fontSize:18,
        marginLeft:10,
        color:'red'
    },
    sort:{
        fontSize:18,
        marginLeft:10,
        color:'red'
    },
    searchBtn:{
        color:'white',
        fontSize:18,
        marginLeft:10,
     },
    filterIcon:{
        width:20,
        height:20,
        color:'red'
    },
    searchIcon:{
        width:25,
        height:25,
        marginLeft:10
    },
    noResultContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'30%',
        marginTop:30
    },
    noResult:{
        color:'grey',
        fontSize:20,
        fontWeight:700,
    }
})


const mapStateToProps = (state) => ({
  productData: state.productListReducer.data
});

const mapDispatchToProps = (dispatch) => ({
  onFetchProductList: () => dispatch(fetchProductList())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);