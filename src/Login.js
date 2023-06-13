import React from 'react';
import {View, Text,Image,ScrollView, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Login = (props) => {
  
  return (
    <ScrollView>
    <View>
     <Image
      source={require("./assets/image.jpg")}
        style={{width: 350, height: 200, alignContent: 'center', marginBottom:50}}
      />
    </View>
    
    <Field
      placeholder="Email / Username"
      keyboardType={'email-address'}
    />
    <Field placeholder="Password" secureTextEntry={true} />
    <View
      style={{display: 'flex',
      flexDirection: 'row',
      width: '78%',
      paddingRight: 16,
      marginBottom: 20,
      marginTop:50}}>
        
      <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16, marginTop:10, marginBottom:10,marginLeft:100 }}>
        Forgot Password ?
      </Text>
    </View>
    <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => {
              alert('Logged In');
              props.navigation.navigate('Main');
            }}
          />
   
    <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
      <Text style={{ fontSize: 16, fontWeight:"bold",marginTop:10 }}>Don't have an account ? </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
      <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16,marginTop:10 }}>Signup</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>


   
  );
};

export default Login;
