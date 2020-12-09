import React from 'react'
import LottieView from 'lottie-react-native'
export default class SantaAnimation extends React.Component{
    render(){
        return(
            <LottieView
            source={require('../assets/23486-reading-a-book.json')}
            style={{width:'60%'}}
            autoPlay loop
            />
        )
    }
}