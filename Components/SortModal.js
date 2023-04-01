import {Modal, View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';

const SortModal= (props) => {
const {sortModalVisible, setSortModalVisible, productList, setProductList } = props;

  const sortByLowest = () => {
    if (productList.length > 0) {
      let sortedList = productList.sort((a, b) => {
        return a.price - b.price;
      });

      setProductList(sortedList);
    }

    setSortModalVisible(false);
  };


  const sortByHighest = () => {
    if (productList.length > 0) {
      let sortedList = productList.sort((a, b) => {
        return b.price - a.price;
      });

      setProductList(sortedList);
    }

    setSortModalVisible(false);
  };

    return(
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        visible={sortModalVisible}
        onRequestClose={() => {
          setSortModalVisible(!sortModalVisible);
        }}
      >
        <View style={styles.centeredView}>
            <Text>Close</Text>
          <View style={styles.modalView}>
                    <TouchableOpacity style={styles.lowBtn} onPress={sortByLowest}><Text style={styles.low}>Lowest Price</Text></TouchableOpacity>
                    <Text>or</Text>
                    <TouchableOpacity style={styles.highBtn} onPress={sortByHighest}><Text style={styles.high}>Highest Price</Text></TouchableOpacity>
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
        flexDirection:'row',
        backgroundColor:'#969696',
        alignItems:'center',
        justifyContent:'space-around',
        minHeight: "30%",
    },
    lowBtn:{
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        justifyContent:'center',
        height:60,
        marginLeft:10,
        backgroundColor:'black'
    },
    highBtn:{
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        justifyContent:'center',
        height:60,
        marginRight:10,
        backgroundColor:'black'
    },
    low:{
        fontSize:20,
        fontWeight:600,
        color:'white'
    },
    high:{
        fontSize:18,
        fontWeight:600,
        color:'white'
    },
})


export default SortModal;