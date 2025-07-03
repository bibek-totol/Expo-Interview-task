

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

export default function Form() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = () => {
    if (form.name && form.email && form.phone) {
      Alert.alert("Your form has been submitted", `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`);
      setForm({ name: "", email: "", phone: "" }); 
    } else {
      Alert.alert(" Missing Fields", "Please fill out all fields.");
    }
  };

  return (
    <View className="flex-1 bg-black px-6 justify-center gap-4">
      <Text className="text-white text-3xl font-bold mb-8 text-center">
        Contact Form
      </Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#ccc"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
        className="bg-white/5 border border-white/10 rounded-2xl text-white px-4 py-4 mb-4"
      />

      <TextInput
        placeholder="Email Address"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
        className="bg-white/5 border border-white/10 rounded-2xl text-white px-4 py-4 mb-4"
      />

      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="#ccc"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(text) => setForm({ ...form, phone: text })}
        className="bg-white/5 border border-white/10 rounded-2xl text-white px-4 py-4 mb-8"
      />

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-950 px-6 py-4 rounded-full shadow-lg"
      >
        <Text className="text-white text-lg font-bold text-center">
          Submit
        </Text>
      </TouchableOpacity>

      
      
    </View>
  );
}
