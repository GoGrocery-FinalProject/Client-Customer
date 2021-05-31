import AsyncStorage from "@react-native-async-storage/async-storage"

export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('access_token', token) 
        console.log(token, 'di asyncc');   
    } catch (err) {
        console.log(err, '<<<<<<error async storage');
    }
}

export const setName = async (name) => {
    try {
        await AsyncStorage.setItem('name', name) 
        console.log(name, 'di asyncc');   
    } catch (err) {
        console.log(err, '<<<<<<error async storage name');
    }
}

export const getToken = async (navigation) => {
    try {
        const token = await AsyncStorage.getItem('access_token')
        if(token === null) {
            navigation.replace('Home')
        } else {
            navigation.replace('Transaction')
        }
        return token
    } catch (e) {
        console.log(e, '<<<<<<<< error getToken');
    }
}

export const getUsername = AsyncStorage.getItem('name')

export const clearAsyncStorage = async (navigation) => {
    try {
        await AsyncStorage.clear()
        alert('Anda berhasil Log Out akun')
        navigation.replace('Home')
    } catch (err) {
        console.log(err, 'Error clear Async Storage');
        alert('Log out akun gagal!')
    }
}