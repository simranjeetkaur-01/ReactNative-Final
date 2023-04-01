import {Modal, View, Text, StyleSheet, Pressable, TouchableOpacity, FlatList} from 'react-native';
import {useState, useEffect} from 'react';

const FilterModal= (props) => {
const {filterModalVisible, setFilterModalVisible, productList, setProductList, categoryList } = props;


//  useEffect(()=>{
//    const productCategory = productList && productList.map((item)=>{
//        return item.category;
//    })
//    const categories = removeDuplicates(productCategory);
//    setCategoryList(categories);
//  },[])

    const filterByCategory = (filterName) => {
          const filteredList =  productList && productList.filter((item) => {
                    return item.category === filterName;
            })
            console.log(filterName);
          setProductList(filteredList);

          setFilterModalVisible(prev => !prev)
    }

    const closeModal = () => {
        setFilterModalVisible(prev => !prev);
    }

    const clearAllFilters = () => {

    }

    return(
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={filterModalVisible}
        onRequestClose={() => {
          setFilterModalVisible(!filterModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <TouchableOpacity style={styles.closeBtn} onPress={closeModal}><Text style={styles.close}>Close</Text></TouchableOpacity>
                <View style={categoryList} >
                    {categoryList && categoryList.map((item) => {
                        return <TouchableOpacity style={styles.category} onPress={() => filterByCategory(item)}><Text style={styles.name}>{item}</Text></TouchableOpacity>
                    })}
                </View>
          </View>
        </View>
      </Modal>

    </View>

    )
}

const styles = StyleSheet.create({

    centeredView:{
        justifyContent:'flex-end',
        flex:1,
    },
    modalView: {
        backgroundColor:'#969696',
        alignItems:'center',
        justifyContent:'space-around',
        minHeight: "30%",
    },

    category:{
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        justifyContent:'center',
        height:60,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'black',
    },
    name:{
        fontSize:18,
        fontWeight:600,
        alignSelf:'center',
        color:'white'
    },
    closeBtn:{
        alignSelf:'flex-end',
        margin:10
    },
    close:{
        color:'black',
        fontSize:18,
        fontWeight:600
    }

})


export default FilterModal;