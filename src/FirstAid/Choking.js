import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
       <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>Choking</Text>
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> The following information is for choking in adults. {'\n'}</Text>  
<Text style={{color:"black",fontWeight:"bold",fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>Mild Choking</Text> 
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        {bullet}If the airway is only partly blocked, the person will usually be able to speak, cry, cough or breathe.{'\n'} 
        {bullet}In situations like this, a person will usually be able to clear the blockage themselves.{'\n'} 
        {'\n'}
       <Text style={{color: "black", fontWeight: 'bold', fontSize: 17, marginTop:10, marginBottom:10,marginLeft:10 }}>
       If choking is mild:
       </Text>
       
        {'\n'}{bullet}Encourage the person to cough to try to clear the blockage.{'\n'} 
        {bullet}Ask them to try to spit out the object if it's in their mouth.{'\n'}
        {bullet}Do not put your fingers in their mouth if you can't see the object, as you risk pushing it further down their mouth.{'\n'} 
        {bullet}If coughing doesn't work, start back blows.{'\n'}   
        
</Text>
    

<Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>Severe Choking</Text>   
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        If choking is severe, the person won't be able to speak, cry, cough or breathe, and without help they'll eventually become unconscious. If coughing doesn't work start back blows.{'\n'}{'\n'}
        <Text style={{color:"black",fontWeight:"bold",fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>How to do back blows?{'\n'}{'\n'}</Text> 
        <Text style={{color:"black",fontWeight:"bold",fontSize:16,marginLeft:10,textAlign: 'justify',marginRight:10}}>To Help An Adult:{'\n'}</Text> 
        Stand behind the person and slightly to one side. Support their chest with 1 hand. Lean the person forward so the object blocking their airway will come out of their mouth, rather than moving further down.
        {'\n'}{bullet}Give up to 5 sharp blows between the person's shoulder blades with the heel of your hand (the heel is between the palm of your hand and your wrist).{'\n'}
        {bullet}Check if the blockage has cleared.{'\n'} 
        {bullet}If not, give up to 5 abdominal thrusts.{'\n'} 
        {bullet}Do not give abdominal thrusts to babies under 1 year old or to pregnant women.{'\n'} 
</Text>

<Image
      source={require("./chock1.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
      <Image
      source={require("./chock2.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
<Text style={{color:"black",fontWeight:"bold",fontSize:16,marginLeft:10,textAlign: 'justify',marginRight:10}}>Back Blows for Babies Under 1 Year:</Text> 
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        {bullet}Sit down and lay your baby face down along your thigh or forearm, supporting their back and head with your hand.{'\n'} 
        {bullet}Give up to 5 sharp back blows with the heel of 1 hand in the middle of the back between the shoulder blades.{'\n'}
</Text>
<Image
      source={require("./chock3.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
<Text style={{color:"black",fontWeight:"bold",fontSize:16,marginLeft:10,textAlign: 'justify',marginRight:10}}>Back Blows for Children Over 1 Year:</Text> 
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        {bullet}Lay a small child face down on your lap as you would a baby.{'\n'} 
        {bullet}If this isn't possible, support your child in a forward-leaning position and give 5 back blows from behind.{'\n'}
</Text>

<Image
      source={require("./chock4.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
<Text style={{color:"black",fontWeight:"bold",fontSize:16,marginLeft:10,textAlign: 'justify',marginRight:10}}>Chest Thrusts for Children Under 1 Year:</Text> 
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        {bullet}Lay your baby face up along the length of your thighs.{'\n'} 
        {bullet}Find the breastbone and place 2 fingers in the middle.{'\n'}
        {bullet}Give 5 sharp chest thrusts (pushes), compressing the chest by about a third.{'\n'} 
</Text>
<Image
      source={require("./chock5.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />

<Text style={{color:"black",fontWeight:"bold",fontSize:16,marginLeft:10,textAlign: 'justify',marginRight:10}}>Abdominal Thrusts for Children Over 1 Year:</Text> 
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        {bullet}Stand or kneel behind your child. Place your arms under the child's arms and around their upper abdomen.{'\n'} 
        {bullet}Clench your fist and place it between the navel and ribs.{'\n'}
        {bullet}Grasp this hand with your other hand and pull sharply inwards and upwards.{'\n'} 
        {bullet}Repeat up to 5 times.{'\n'}
        {bullet}Make sure you don't apply pressure to the lower ribcage, as this may cause damage.{'\n'}
</Text>
<Image
      source={require("./chock6.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
<Text style={{color:"black",fontWeight:"bold",fontSize:16,marginLeft:10,textAlign: 'justify',marginRight:10}}>If the person's airway is still blocked after trying Back Blows and Abdominal Thrusts:</Text> 
<Text style={{color:"#F23C5D", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}>
        {bullet}Call 1122 and ask for an ambulance. Tell the 1122 operator that the person is choking.{'\n'}
        {bullet}Continue with the cycles of 5 Back Blows and 5 Abdominal Thrusts until help arrives.{'\n'}{'\n'}
</Text>

    
      </ScrollView>
    );
  };
  
  export default BulletList;

