import React from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import db from '../config'
import { titleCase } from "title-case";
import SummaryScreen from './SummaryScreen'


export default class HomeScreen extends React.Component{
  constructor(){
    super()
    this.state={
      all_Students:[]
    }
  }

componentDidMount(){
      var classRef= db.ref('/').on("value",data=>{
      var all_Students=[]
      var classA=data.val().A
      for (var i in classA){
        all_Students.push(classA[i])
      }
      all_Students.sort(function(a,b){
        return  a.roll_no-b.roll_no
      })
      this.setState({all_Students:all_Students  })
    })
}

updteAttendance(roll_no, status){
  var id='';
  if(roll_no<=9){
    id='0'+roll_no
  }
  else{
    id=roll_no
  }
  var today=new Date()
  console.log(today)
  var dd=today.getDate()
  var mm=today.getMonth()
  var yyyy=today.getFullYear()  
  if(dd<10){ dd='0'+dd}
  if(mm<10){ mm='0'+mm}

  today =dd +'-'+ mm +'-'+ yyyy
  var classRef=db.ref(id)
  classRef.update({
    [today]:status
  })
  console.log( "Roll no."+ id +" is" + status )
}


  render(){
    return(
      <View style={styles.container}>
      
      <Text style={styles.headerText}>Teacher Attendence App</Text>
      
      {this.state.all_Students.map((Students)=>(
         <View>
          <Text style={styles.paragraph}>{titleCase(Students.name)}</Text>
              <TouchableOpacity style={styles.presentButton}
                onPress= {()=>{
                var status='Present'
                this.updteAttendance(Students.roll_no, status)}}> 
                    <Text style={styles.presentText}>Present</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.absentButton}
                onPress= {()=>{
                var status='Present'
                this.updteAttendance(Students.roll_no, status)}}>
                <Text style={styles.absentText}>Absent</Text>
              </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style= { styles.submitButton }
      onPress={()=>{
        this.props.navigation.navigate('SummaryScreen')}}>
      <Text style={{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        fontFamily:'monospace',
        textAlign:'center'
      }}> Submit</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    
    backgroundColor: '#e4d1d1',
    padding: 8,
  },
  paragraph: {
   margin: 10,
   marginLeft:450,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    backgroundColor:'royalblue',
    width: 100,
    height: 40,
    borderRadius: 7,
    padding: 3,
    alignItems: 'center',
    textAlign: 'center'
  },
  presentButton:{
    backgroundColor: 'blue',
    marginLeft:600,
    marginTop:-50,
    width: 80,
    height: 40,
    borderRadius: 7,
    justifyContent: 'center'
  },
  presentText:{
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
     
  },
    absentButton:{
    backgroundColor: 'red',
    marginLeft:700,
    marginTop:-40,
    width: 80,
    height: 40,
    borderRadius: 7,
    justifyContent: 'center'
  },
  absentText:{
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
     
  },
  
  submitButton:{
    marginTop:40, 
    backgroundColor: 'darkblue', 
    width: 150, 
    height: 40, 
    alignSelf:'center', 
    borderRadius: 7,
    justifyContent: 'center' ,
    
  },
    headerText:{
    width: '100%',
    height: 40,
    color:'white' ,
    fontFamily:'monospace',
    fontSize:20, 
    fontWeight:'bold', 
    textAlign:'center',
    backgroundColor: '#000078',
    padding: 5,
    marginBottom:20,
    marginTop:'30'
   
  },
  
});