import React from 'react';
import {View, Text,Image, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Signup = props => {
  return (
    <ScrollView>
 <View>
     <Image
      source={require("./assets/image.jpg")}
        style={{width: 350, height: 150, alignContent: 'center'}}
      />
    </View>
        
          <Field placeholder="First Name" keyboardType={'text'}/>
          <Field placeholder="Last Name"keyboardType={'text'} />
          <Field placeholder="Email / Username" keyboardType={'email-address'}/>
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Emergency Contact Number 1" keyboardType={'number'} />
          <Field placeholder="Emergency Contact Number 2" keyboardType={'number'} />
          <Field placeholder="Blood Group" keyboardType={'text'} />
          <Field placeholder="Allergy if any..." keyboardType={'text'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
           
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
              marginLeft: 20
            }}>
            <Text style={{color: 'grey', fontSize: 15}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 13}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 15}}>
              and {" "}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 13}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Main');
            }}
          />
          <View
            style={{  
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        
      
  
    
    </ScrollView>
  );
};

export default Signup;
