import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
        <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>
Bleeding Heavily
</Text>
        <Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}>
If someone is bleeding heavily, the main aim is to prevent further blood loss and minimise the effects of shock.
{'\n'}{'\n'} 
{bullet}Apply direct pressure on the cut or wound with a clean cloth, tissue, or piece of gauze until bleeding stops.
{'\n'}{'\n'} 
{bullet}If blood soaks through the material, don’t remove it. Put more cloth or gauze on top of it and continue to apply pressure.
{'\n'}{'\n'} 
{bullet}If the wound is on the arm or leg, raise limb above the heart, if possible, to help slow bleeding.
{'\n'}{'\n'} 
{bullet}Wash your hands again after giving first aid and before cleaning and dressing the wound.
{'\n'}{'\n'} 
{bullet}Do not apply a tourniquet unless the bleeding is severe and not stopped with direct pressure.
{'\n'}{'\n'} 
{bullet}If you have disposable gloves, use them to reduce the risk of any infection being passed on.
{'\n'}{'\n'} 
{bullet}Check that there's nothing embedded in the wound. If there is, take care not to press down on the object.
{'\n'}{'\n'} 
{bullet}Instead, press firmly on either side of the object and build up padding around it before bandaging to avoid putting pressure on the object itself.
{'\n'}{'\n'} 
{bullet}Do not try to remove it because it may be helping to slow down the bleeding.{'\n'}{'\n'} 

</Text>


    
      </ScrollView>
    );
  };
  
  export default BulletList;

