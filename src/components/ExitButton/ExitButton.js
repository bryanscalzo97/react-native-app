import { View, TouchableHighlight } from 'react-native'
import React from 'react'
import Svg, {Path} from "react-native-svg";

const ExitButton = ({navigation, color}) => {
  return (
    <TouchableHighlight 
        underlayColor="none"
        onPress={() => navigation.goBack()}
    >
        <Svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M18.5 0C8.28167 0 0 8.28263 0 18.5C0 28.7174 8.28263 37 18.5 37C28.7174 37 37 28.7169 37 18.4995C37 8.28215 28.7174 0 18.5 0ZM18.5 34.7804C9.50883 34.7804 2.2196 27.4916 2.2196 18.5C2.2196 9.50835 9.50883 2.21719 18.5 2.21719C27.4912 2.21719 34.7804 9.50835 34.7804 18.4995C34.7804 27.4907 27.4912 34.7799 18.5 34.7799V34.7804ZM20.0689 18.5492L23.3041 15.5097C23.5177 15.3076 23.6426 15.0291 23.6516 14.7352C23.6607 14.4412 23.553 14.1557 23.3523 13.9408C23.1501 13.7272 22.8717 13.6022 22.5778 13.5932C22.2838 13.5842 21.9982 13.6918 21.7834 13.8926L18.5468 16.9321L15.5102 13.694C15.308 13.4804 15.0296 13.3555 14.7357 13.3464C14.4417 13.3374 14.1561 13.445 13.9413 13.6458C13.7277 13.8479 13.6027 14.1264 13.5937 14.4203C13.5847 14.7143 13.6923 14.9998 13.8931 15.2147L16.9325 18.4513L13.6959 21.4908C13.4823 21.6929 13.3574 21.9714 13.3484 22.2653C13.3393 22.5592 13.447 22.8448 13.6477 23.0597C13.8499 23.2733 14.1283 23.3982 14.4222 23.4073C14.7162 23.4163 15.0018 23.3087 15.2166 23.1079L18.4532 20.0684L21.4927 23.305C21.6941 23.5193 21.9724 23.6447 22.2663 23.6538C22.5602 23.6629 22.8457 23.5549 23.0599 23.3535C23.2742 23.1521 23.3996 22.8738 23.4087 22.5799C23.4178 22.286 23.3098 22.0005 23.1084 21.7863L20.0689 18.5492Z" fill={color}/>
        </Svg>
    </TouchableHighlight>
  )
}

export default ExitButton