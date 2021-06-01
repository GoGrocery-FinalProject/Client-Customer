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

export const setBarcode = async (barcode) => {
    try {
        await AsyncStorage.setItem('barcode', barcode) 
        console.log(barcode, 'barcode di asyncc');   
    } catch (err) {
        console.log(err, '<<<<<<error async storage barcode');
    }
}

export const setUserId = async (userId) => {
    try {
        await AsyncStorage.setItem('userId', userId)
        console.log(userId, 'userId di async');
    } catch (err) {
        console.log(err, '<<<<<<<<<<error async storage userId');
    }
}

export const getToken = AsyncStorage.getItem('access_token')
export const getUsername = AsyncStorage.getItem('name')
export const getUserId = AsyncStorage.getItem('userId')
export const getBarcode = AsyncStorage.getItem('barcode')

export const checkToken = async (navigation) => {
    try {
        const token = await AsyncStorage.getItem('access_token')
        if(token === null) {
            navigation.replace('Home')
        } else {
            if(getBarcode._W) {
                navigation.replace('Transaction')
                console.log('BARCODE ADA');
            } else {
                navigation.replace('CheckIn')
                console.log('barcode ga ada');
            }
        }
        return token
    } catch (e) {
        console.log(e, '<<<<<<<< error getToken');
    }
}

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

export const removeBarcode = async () => {
    try {
        await AsyncStorage.removeItem('barcode')
        // alert('Berhasil keluar Toko')
    } catch (err) {
        console.log(err, 'Error remove barcode Async Storage');
        alert('Gagal keluar Toko')
    }
}