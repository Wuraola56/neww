import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.replace("/home"); 
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-[#121212] justify-center px-5"
    >
      <View className="items-center mb-12">
        <Text className="text-4xl font-bold text-[#1DB954] mb-2">
          Hafrikplay
        </Text>
        <Text className="text-base text-[#b3b3b3]">
          Discover African Music
        </Text>
      </View>

      <View className="w-full">
        <TextInput
          className="bg-[#282828] text-white h-12 rounded-md mb-4 px-4 text-base"
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          className="bg-[#282828] text-white h-12 rounded-md mb-4 px-4 text-base"
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          className={`h-12 rounded-full justify-center items-center mt-3 ${
            isLoading ? "bg-[#1ed760] opacity-70" : "bg-[#1DB954]"
          }`}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text className="text-white text-base font-bold">
            {isLoading ? "Logging in..." : "Log In"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-5 items-center"
          onPress={() => router.push("/signup")}
        >

          <Text className="text-[#b3b3b3]">
            Don&apos;t have an account?{" "}
            <Text className="text-[#1DB954] font-bold">Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Index;
