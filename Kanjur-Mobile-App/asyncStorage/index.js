import AsyncStorage from "@react-native-async-storage/async-storage"

export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('access_token', token) 
        console.log(token, 'di asyncc');   
    } catch (e) {
        console.log(e, '<<<<<<error async storage');
    }
}

export const getToken = async (navigation) => {
    try {
        const token = await AsyncStorage.getItem('access_token')
        if(token === null) {
            navigation.replace('Home')
        } else {
            navigation.replace('Register', {name: token})
        }
        return token
    } catch (e) {
        console.log(e, '<<<<<<<< error getToken');
    }
}
