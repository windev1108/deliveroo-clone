import { View, Text, ScrollView } from 'react-native'
import React , { useState ,useEffect} from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../../sanity'

interface Categories {
  _id: string,
  image: Object,
  title: string
}


const Categories = () => {
  const [ categories , setCategories ] = useState<[]>([])
  useEffect(() => {
      sanityClient
      .fetch(
        `
       *[_type == "category"]
      `).then(data => {
        setCategories(data)
      })
  },[])
  
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
         {/* CategoryCard */}
         {categories?.map((category : Categories) => (
           <CategoryCard 
            key={category._id}
            imgUrl={category.image}
            title={category.title} />
         ))}
         
    </ScrollView>
  )
}


export default Categories