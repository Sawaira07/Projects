import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>         
     
     <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>
If someone is unconscious & breathing

</Text>
 <Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}>
        {bullet}If someone is unconscious but breathing, and has no other injuries that would stop them being moved, place them in the recovery position  until help arrives.
        {'\n'}{'\n'} 
        {bullet}Keep them under observation to ensure they continue to breathe normally.
</Text>

<Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>
If someone is unconscious and not breathing
</Text>

<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}>
If someone is not breathing normally, call 1122 and start cardiopulmonary resuscitation (CPR) straight away.</Text>


<Text style={{color:"black",fontWeight:"bold",fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>{'\n'}Hands-only CPR</Text>

<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        {bullet}To carry out a chest compression:{'\n'} 
        {bullet}Kneel next to the person and place the heel of your hand on the breastbone at the centre of their chest. Place the palm of your other hand on top of the hand that's on their chest and interlock your fingers.{'\n'} 
        {bullet}Position yourself so your shoulders are directly above your hands.{'\n'} 
        {bullet}Using your body weight (not just your arms), press straight down by 5 to 6cm (2 to 2.5 inches) on their chest.{'\n'} 
        {bullet}Keeping your hands on their chest, release the compression and allow their chest to return to its original position.{'\n'} 
        {bullet}Repeat these compressions at a rate of 100 to 120 times a minute until an ambulance arrives or for as long as you can.{'\n'}
</Text>
<Image
      source={require("./CPR1.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
<Text style={{color:"black",fontWeight:"bold",fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>CPR with Rescue Breaths</Text>
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        {bullet}Place the heel of your hand on the centre of the person's chest, then place the palm of your other hand on top and press down by 5 to 6cm (2 to 2.5 inches) at a steady rate of 100 to 120 compressions a minute.{'\n'} 
        {bullet}After every 30 chest compressions, give 2 rescue breaths.{'\n'} 
        {bullet}Tilt the person's head gently and lift the chin up with 2 fingers. Pinch the person's nose. Seal your mouth over their mouth and blow steadily and firmly into their mouth for about 1 second. Check that their chest rises. Give 2 rescue breaths.{'\n'} 
        {bullet}Continue with cycles of 30 chest compressions and 2 rescue breaths until they begin to recover or emergency help arrives. 
        {'\n'}{'\n'}  
</Text>

<Text style={{color:"black",fontWeight:"bold",fontSize:16,marginLeft:10,textAlign: 'justify',marginRight:10}}>Infants under 1 Year:</Text>
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        {bullet}Open the infant's airway by placing 1 hand on their forehead and gently tilting the head back and lifting their chin. Remove any visible obstructions from their mouth and nose.{'\n'} 
        {bullet}Place your mouth over the infant's mouth and nose and blow steadily and firmly into their mouth, checking that their chest rises. Give 5 initial rescue breaths.{'\n'} 
        {bullet}Place 2 fingers in the middle of the infant's chest and push down by 4cm (about 1.5 inches), which is approximately one-third of the chest diameter. The quality (depth) of chest compressions is very important. Use the heel of 1 hand if you can't achieve a depth of 4cm using the tips of 2 fingers.{'\n'} 
        {bullet}After 30 chest compressions at a rate of 100 to 120 a minute, give 2 rescue breaths.{'\n'} 
        {bullet}Continue with cycles of 30 chest compressions and 2 rescue breaths until the infant begins to recover or emergency help arrives.
        {'\n'}{'\n'}  
</Text>
<Image
      source={require("./CPR2.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />

<Text style={{color:"black",fontWeight:"bold",fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>CPR on children{'\n'}</Text>
<Text style={{color:"black",fontWeight:"bold",fontSize:16,marginLeft:10,textAlign: 'justify',marginRight:10}}>Children over 1 Year:</Text>
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        {bullet}Open the child's airway by placing 1 hand on their forehead and gently tilting their head back and lifting the chin. Remove any visible obstructions from their mouth and nose.{'\n'} 
        {bullet}Pinch the child's nose. Seal your mouth over their mouth, and blow steadily and firmly into their mouth, checking that their chest rises. Give 5 initial rescue breaths.{'\n'} 
        {bullet}Place the heel of 1 hand on the centre of the child's chest and push down by 5cm (about 2 inches), which is approximately one-third of the chest diameter. The quality (depth) of chest compressions is very important. Use 2 hands if you can't achieve a depth of 5cm using 1 hand.{'\n'} 
        {bullet}After every 30 chest compressions at a rate of 100 to 120 a minute, give 2 breaths.{'\n'} 
        {bullet}Continue with cycles of 30 chest compressions and 2 rescue breaths until the child begins to recover or emergency help arrives.
        {'\n'}{'\n'}  
</Text>

<Text style={{color:"black",fontWeight:"bold",fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>Coronavirus (COVID-19) Advice:{'\n'}</Text>
<Text style={{color:"#F23C5D",fontWeight:"bold",fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}>If there's a chance the person who's unwell has COVID-19, place a cloth or towel over their mouth and nose and do hands-only CPR until an ambulance arrives.{'\n'}{'\n'} </Text>
    
      </ScrollView>
    );
  };
  
  export default BulletList;

