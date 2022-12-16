import { Button, Text, TextInput, View } from 'react-native';

export default function App() {
  
  return (<View style={{ flex: 5 }} >
    <view style={{
      flex: 0.5
    }}></view>
    <View style={{
      flex: 0.2,
      flexDirection: 'row',
      margin: 10,
      borderRadius: 20,
      padding: 5,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        fontSize: 15,
        justifyContent: 'flex-start',
        flex: 7,
        color: '#B4B4B4',
        fontWeight: 'bold'
      }}>
        Friday, 15 Dec
      </Text>
      <Text style={{
        fontSize: 15,
        alignContent: 'flex-end',
        flex: 3,
        color: '#B4B4B4',
        fontWeight: 'bold'
      }}>
        Search
      </Text>
    </View>
    <View style={{
      flex: 1,
      margin: 10,
      borderRadius: 20,
      padding: 10,  
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'left'
    }}>
      <Text style={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 35
      }}>
        Learn
      </Text>
      <Text style={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
      }}>
        Choose the part of the body
      </Text>
      
    </View>
    <View style={{
      flex: 1,
      margin: 10,
      paddingLeft: 20,
      borderRadius: 20,
      backgroundColor: '#EB7662',
      justifyContent: 'center',
      alignItems: 'left'
    }}>
      <Text style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
      }}>
        Head & Face
      </Text>
      <Text style={{
        color: '#BFC7D2',
        fontSize: 12
      }}>
        11 diseases
      </Text>
      
    </View>
    <View style={{
      flex: 1,
      margin: 10,
      paddingLeft: 20,
      borderRadius: 20,
      backgroundColor: '#8DC4BB',
      justifyContent: 'center',
      alignItems: 'left'
    }}>
      <Text style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
      }}>
        Back & Neck
      </Text>
      <Text style={{
        color: '#BFC7D2',
        fontSize: 12
      }}>
        9 diseases
      </Text>
      
    </View>
    <View style={{
      flex: 1,
      margin: 10,
      paddingLeft: 20,
      borderRadius: 20,
      backgroundColor: '#F2982F',
      justifyContent: 'center',
      alignItems: 'left'
    }}>
      <Text style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
      }}>
        Elbow & Shoulders
      </Text>
      <Text style={{
        color: '#BFC7D2',
        fontSize: 12
      }}>
        12 diseases
      </Text>
      
    </View>
    <View style={{
      flex: 1,
      margin: 10,
      paddingLeft: 20,
      borderRadius: 20,
      backgroundColor: '#327389',
      justifyContent: 'center',
      alignItems: 'left'
    }}>
      <Text style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
      }}>
        Hand & Arm
      </Text>
      <Text style={{
        color: '#BFC7D2',
        fontSize: 12
      }}>
        2 diseases
      </Text>
      
    </View>

    <view style={{
      flex: 1,
      backgroundColor: 'black'
    }}>
      2
    </view>
    
      
  </View >)

}
