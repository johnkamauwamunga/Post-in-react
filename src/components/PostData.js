const PostData=[
//     {
//           imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
//           name:'Jeniffer lopez',
//     },
//     {
//         imageUri:  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
//          name: "Pizza pie"
//     },
//     {
//         imageUri:"https://images.unsplash.com/photo-1556450222-9b14fa920d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGEzODB8ZW58MHx8MHx8fDA%3D",
//          name: "Airbus A380"
//     },
//     {
//         imageUri :"https://images.unsplash.com/photo-1580624799286-a306f07816c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoYWtlfGVufDB8fDB8fHww",
//         name: "Shake Queen"
//     },
//     {
//         imageUri: 'https://i.pinimg.com/564x/4a/5d/3c/4a5d3c1b84d603d65acf1569a1be3a53.jpg',
//         name:'Rihana',
//   },
//   {
//         imageUri: 'https://static.independent.co.uk/2022/04/08/19/Music-Q%26A-Camila_Cabello_41082.jpg?width=1200&height=1200&fit=crop',
//         name:'Camila Cabello',
//   },
//   {
//         imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpYC_rzuGFTvz34B-OhZNf5cPezl2-vIVUA&usqp=CAU',
//         name:'Shawn mendez',
//   },{
//         imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
//         name:'Jeniffer lopez',
//   },
//   {
//         imageUri: 'https://i.pinimg.com/564x/4a/5d/3c/4a5d3c1b84d603d65acf1569a1be3a53.jpg',
//         name:'Rihana',
//   },
//   {
//         imageUri: 'https://static.independent.co.uk/2022/04/08/19/Music-Q%26A-Camila_Cabello_41082.jpg?width=1200&height=1200&fit=crop',
//         name:'Camila Cabello',
//   },
//   {
//         imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpYC_rzuGFTvz34B-OhZNf5cPezl2-vIVUA&usqp=CAU',
//         name:'Shawn mendez',
//   },
    // "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    // "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    // "https://images.unsplash.com/photo-1593504049359-74330189a345?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D",
    // // milk shake
    // "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoYWtlfGVufDB8fDB8fHww",
    // "https://images.unsplash.com/photo-1580624799286-a306f07816c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoYWtlfGVufDB8fDB8fHww",
    // "https://images.unsplash.com/photo-1619158403521-ed9795026d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoYWtlfGVufDB8fDB8fHww",
    // // chopper
    // "https://images.unsplash.com/photo-1626115259866-7c38269a94b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcmJ1cyUyMGhlbGljb3B0ZXJzfGVufDB8fDB8fHww",
    // "https://images.unsplash.com/photo-1556450222-9b14fa920d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGEzODB8ZW58MHx8MHx8fDA%3D"
{
    profUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpYC_rzuGFTvz34B-OhZNf5cPezl2-vIVUA&usqp=CAU',
    name:'Shawn mendez',
    imageUri:'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
    caption: 'Doha City #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
    likecount: '137M',
    posted: '6 min ago'
  },
 {
        profUri: 'https://static.independent.co.uk/2022/04/08/19/Music-Q%26A-Camila_Cabello_41082.jpg?width=1200&height=1200&fit=crop',
        name:'Camila Cabello',
        imageUri:'https://reallifedinner.com/wp-content/uploads/2021/05/Brownie_Oreo_Ice_Cream_Cake_4.jpg',
        caption: 'Doha City #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
        likecount: '137M',
        posted: '6 min ago'
    },
  {
    profUri: 'https://i.pinimg.com/564x/4a/5d/3c/4a5d3c1b84d603d65acf1569a1be3a53.jpg',
    name:'Rihana',
    imageUri:'https://reallifedinner.com/wp-content/uploads/2021/05/Brownie_Oreo_Ice_Cream_Cake_4.jpg',
    caption: 'Doha City #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
    likecount: '137M',
    posted: '6 min ago'
  },
  {
  
      profUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
      name: 'jennifer lopez',
    imageUri:'https://irepo.primecp.com/2015/06/223330/Bacon-and-Egg-Breakfast-Grilled-Cheese_ExtraLarge700_ID-1029586.jpg?v=1029586',
    caption: 'Doha City #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
    likecount: '137M',
    posted: '6 min ago'
  },
  // from here
  {
      profUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
      name: 'jennifer lopez',
    imageUri:'https://howtobecabincrew.com/wp-content/uploads/2016/09/qatar-airways-stewardese-3-2.jpg',
    caption: 'Cabin Crew #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
    likecount: '137M',
    posted: '6 min ago'
  },
  {

    profUri: 'https://recipes.net/wp-content/uploads/2020/03/classic-sunny-side-up-eggs-with-bacon-and-pancakes-recipes.jpg',
      name: 'jennifer lopez',
    imageUri:'https://qatarofw.com/wp-content/uploads/2019/07/Qatar-Airways-Cabin-Crew-How-Much-Do-They-Make-3.jpg',
    caption: 'Spirit of the skies #april.kisha #johnniey.mwangi #Thomas',
    likecount: '137M',
    posted: '6 min ago'
  },
  {
  
    profUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
      name: 'jennifer lopez',
    imageUri:'https://adventureholidays.co.ke/wp-content/uploads/2021/11/DSC_7456-copy.jpg',
    caption: 'Nature at its best #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
    likecount: '137M',
    posted: '6 min ago'
  },
  
  {

    profUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
      name: 'jennifer lopez',
    imageUri:'https://www.travelandleisure.com/thmb/L17tdbwPEJH9E1wmCpqozrG5C9k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/glass-bottom-bridge-china-GBOTTOM0920-892633ead1f34931afbeabc623c34435.jpg',
    caption: 'Scare the hell out of you #april.kisha #johnniey.mwangi #Thomas',
    likecount: '137M',
    posted: '6 min ago'
  },
  
  {

    profUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
    name: 'jennifer lopez',
    imageUri:'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F0ca68d42-fc09-11e9-a4b4-b816768ca711.jpg?crop=1500%2C1000%2C0%2C0',
    caption: 'Spirit of ... #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
    likecount: '137M',
    posted: '6 min ago'
  },
  
]


export default PostData;