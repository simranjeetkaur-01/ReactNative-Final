import {Text,StyleSheet, View, TextInput} from 'react-native';
import {useState, useEffect} from 'react';

const SearchBar = () => {

    const [searchProduct,setSearchProduct] = useState("");

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

    return(
        <View style={styles.searchContainer}>
              <TextInput
                  style={styles.input}
                  value={searchProduct}
                  onChangeText={handleInputChange}
                  autoFocus={true}
              />
              <TouchableOpacity
              onPress={handleProductSearch}
              style={styles.searchButton}
              >
              <Text>Search</Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:'red',
        height:50,
        justifyContent:'center',
    },
    input:{
        borderWidth:1,
        width:250,
        height:'70%',
        margin:20,
        marginHorizontal:30,
        padding:10
    }
})
export default SearchBar;