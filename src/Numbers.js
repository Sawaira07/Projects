import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const tableData = [
  
  ['                        POLICE HELPLINES'],
  ['Punjab Police','15'],
  ['IGP Complaint Helpline', '1787, 042-99212609'],
  ['Counter Terrorism Department (CTD)', 'C0800-111-11'],
  ['Lahore Police Complaint', '8300, UAN: 0304-1110911'],
  ['                                INQUIRIES'],
  
  [' Railway Enquiry', '117'],
  ['PIA Enquiry', '114'],
  [' Railway Police Helpline', ' 	City code-1333'],
  ['                             EMERGENCIES'],
  [' Resque Service', '1122'],
  ['Fire Brigade', '16'],
  ['                        MEDICAL FACILITIES'],
  
['Edhi Main Control Room','	115'],
['Bomb Disposal Squad',	'042-99212111'],
['Fatimeed Blood Bank'	,'042-35863950'],
['Punjab Institute of Cardiology'	,'042-99203051-6'],
['Services Hospital',	'042-99203402-25'],
['General Hospital',	'042-99264091-8'],

	
];

const App = () => {
  return (
    <View style={styles.container}>
      <Table borderStyle={styles.tableBorder}>
        <Row data={tableData[0]} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData.slice(1)} textStyle={styles.text} />
      </Table>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 25, backgroundColor: '#FFF' },
  head: {height: 30, backgroundColor: '#FFF'},
  text: { margin: 5 },
  tableBorder: { borderWidth: 1, borderColor: '#F23C5D' },
});
export default App;



