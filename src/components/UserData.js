import React from 'react'
import Story from '../Story/Index'
import {Text, View, TouchableOpacity, FlatList} from 'react-native'
import Styles from './Styles'

const data=[
      {
            imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
            name:'Jeniffer lopez',
      },
      {
            imageUri: 'https://i.pinimg.com/564x/4a/5d/3c/4a5d3c1b84d603d65acf1569a1be3a53.jpg',
            name:'Rihana',
      },
      {
            imageUri: 'https://static.independent.co.uk/2022/04/08/19/Music-Q%26A-Camila_Cabello_41082.jpg?width=1200&height=1200&fit=crop',
            name:'Camila Cabello',
      },
      {
            imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpYC_rzuGFTvz34B-OhZNf5cPezl2-vIVUA&usqp=CAU',
            name:'Shawn mendez',
      },{
            imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
            name:'Jeniffer lopez',
      },
      {
            imageUri: 'https://i.pinimg.com/564x/4a/5d/3c/4a5d3c1b84d603d65acf1569a1be3a53.jpg',
            name:'Rihana',
      },
      {
            imageUri: 'https://static.independent.co.uk/2022/04/08/19/Music-Q%26A-Camila_Cabello_41082.jpg?width=1200&height=1200&fit=crop',
            name:'Camila Cabello',
      },
      {
            imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpYC_rzuGFTvz34B-OhZNf5cPezl2-vIVUA&usqp=CAU',
            name:'Shawn mendez',
      }
]
function userData() {
  return (
    <FlatList
    data={data}
    keyExtractor={({name})=>name}
    horizontal
    showsHorizontalScrollIndicator={false}
    style={Styles.Container}
    renderItem={({item})=> <Story imageUri={item.imageUri} name={item.name}/>}
    />
      
 
  )
}

export default userData
