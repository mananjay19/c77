import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import db from '../config'
import SantaAnimation from '../component/SantaClaus'
export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:''
        }
    }
    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(Response=>{
             return alert("user added successfully")
        })
        .catch(function(error){
            var errorCode = error.code
            var errorMessage=error.message
            return alert(errorMessage)
        })
    }
    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(Response=>{
             return alert("successfully loged in")
        })
        .catch(function(error){
            var errorCode = error.code
            var errorMessage=error.message
            return alert(errorMessage)
        })
    }
    render(){
        return(
            <View>
                <SantaAnimation/>
                <Text>Book Santa</Text>
                <View>
                    <TextInput
                    placeholder="abc@example.com"
                    keyboardType="email-adress"
                    onChangeText={(text)=>{
                      this.setState({
                          emailId:text
                      })
                    }}
                    >
                        

                    </TextInput>
                    <TextInput
                    placeholder="enter password"
                    sceureTextEntry={true}
                    onChangeText={(text)=>{
                      this.setState({
                          password:text
                      })
                    }}
                    >
                        

                    </TextInput>
                    <TouchableOpacity
                    onPress={()=>{
                        this.userLogin(this.state.emailId,this.state.password)
                    }}
                    >
                        <Text>sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{
                        this.userSignUp(this.state.emailId,this.state.password)
                    }}
                    >
                        <Text>sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>     
        )
    }
}