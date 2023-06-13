import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
        <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>
Anaphylaxis
</Text>
        <Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}>
Anaphylaxis (or anaphylactic shock) is a severe allergic reaction that can occur after an insect sting or eating certain foods.
{'\n'}{'\n'} 
{bullet}Ask if the person is carrying an epinephrine auto injector (EpiPen, Auvi-Q, others) to treat an allergic attack.
{'\n'}{'\n'} 
{bullet}If the person needs to use an autoinjector, ask whether you should help inject the medication. This is usually done by pressing the autoinjector against the person's thigh.
{'\n'}{'\n'} 
{bullet}Have the person lie face up and be still.
{'\n'}{'\n'} 
{bullet}Loosen tight clothing and cover the person with a blanket. Don't give the person anything to drink.
{'\n'}{'\n'} 
{bullet}If there's vomiting or bleeding from the mouth, turn the person to the side to prevent choking.
{'\n'}{'\n'} 
{bullet}If there are no signs of breathing, coughing or movement, begin CPR.
</Text>


    
      </ScrollView>
    );
  };
  
  export default BulletList;

