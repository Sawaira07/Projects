import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
        <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>Poisoning</Text>
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        Common causes of poisoning include:
        {'\n'}{'\n'}{bullet}Swallowing a toxic substance, such as bleach{'\n'}
        {bullet}Taking an overdose of a prescription medicine{'\n'}
        {bullet}Eating something, like wild plants and fungi{'\n'}
{'\n'}
        <Text style={{color:"#F23C5D",fontWeight:"bold",fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>Alcohol Poisoning</Text> {'\n'}
        {'\n'}{bullet}If you think someone has swallowed a poisonous substance, call 1122 to get immediate medical help and advice.{'\n'}  
        {'\n'}{bullet}The effects of poisoning depend on the substance swallowed, but can include vomiting, loss of consciousness, pain or a burning sensation.{'\n'}  
        {'\n'}The following advice is important:{'\n'}
        {'\n'} {bullet}Find out what's been swallowed so you can tell the paramedic or doctor.{'\n'}   
        {'\n'} {bullet}Do not give the person anything to eat or drink unless a healthcare professional advises you to.{'\n'} 
        {'\n'}{bullet}Do not try to cause vomiting.{'\n'}   
        {'\n'}{bullet}Stay with the person, as their condition may get worse and they could become unconscious.{'\n'} 
        {'\n'}{bullet}If the person becomes unconscious while you're waiting for help to arrive, check for breathing and, if necessary, perform CPR.{'\n'}   
        {'\n'} {bullet}Do not perform mouth-to-mouth resuscitation if the person's mouth or airway is contaminated with the poison.{'\n'} 
        {'\n'}{bullet}Do not leave them if they're unconscious: they could vomit. The vomit could then enter their lungs and make them choke.{'\n'}   
        {'\n'}{bullet}If they do vomit naturally, try to collect some of it for the ambulance crew, this may help identify the cause of the poisoning.{'\n'} 
        {'\n'}
</Text>



    
      </ScrollView>
    );
  };
  
  export default BulletList;

