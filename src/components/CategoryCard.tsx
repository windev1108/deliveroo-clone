import { View, Text , Image , TouchableOpacity } from 'react-native'
import React , { FC } from 'react'
import { urlFor } from '../../sanity'

interface Props {
   imgUrl: Object,
   title: string
}

const CategoryCard:FC<Props> = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <View className="relative mr-4">
      <Image source={{
            uri : urlFor(imgUrl).url(),
        }} 
        className="w-20 h-20 rounded"
        />
        <Text className="absolute bottom-1 left-1 text-white">{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard