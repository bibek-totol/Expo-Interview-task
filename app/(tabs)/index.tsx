import { Image } from 'expo-image';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';



export default function HomeScreen() {
  return (
    <>
     <ScrollView className="flex-1  px-6">
      
      <View className="h-96 justify-center items-center mt-10">
        <Text className="text-white text-4xl font-bold text-center leading-snug">
          Welcome to Bibek App
        </Text>
        <Text className="text-gray-400 text-base text-center mt-4">
          The exclusive portal for modern luxury lifestyle.
        </Text>
        <TouchableOpacity className="bg-white/10 mt-6 px-6 py-3 rounded-2xl border border-white/20 shadow-lg">
          <Text className="text-white text-lg font-semibold">
            Join the Experience
          </Text>
        </TouchableOpacity>
      </View>

    
      <View className="mt-10 space-y-6">
        {["Private Concierge", "Elite Access", "Tailored Rewards"].map((feature, idx) => (
          <View
            key={idx}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-md mt-6"
          >
            <Text className="text-white text-xl font-semibold mb-2">
              {feature}
            </Text>
            <Text className="text-gray-400">
              Experience unmatched personalization and access.
            </Text>
          </View>
        ))}
      </View>

      
    
    </ScrollView>
    </>
  );
}

