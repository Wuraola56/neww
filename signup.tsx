import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Signup = () => {
    const router = useRouter();
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSignup = () => {
        if (!fullName || !email || !password || !confirmPassword) {
            alert("All fields are required!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

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
                <Text className="text-base text-[#b3b3b3]">Create your account</Text>
            </View>


            <View className="w-full">
                <TextInput
                    className="bg-[#282828] text-white h-12 rounded-md mb-4 px-4 text-base"
                    placeholder="Email"
                    placeholderTextColor="#888"
                    value={fullName}
                    onChangeText={setFullName}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
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

                <TextInput
                    className="bg-[#282828] text-white h-12 rounded-md mb-4 px-4 text-base"
                    placeholder="Confirm Password"
                    placeholderTextColor="#888"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <TouchableOpacity
                    className={`h-12 rounded-full justify-center items-center mt-3 ${isLoading ? "bg-[#1ed760] opacity-70" : "bg-[#1DB954]"
                        }`}
                    onPress={handleSignup}
                    disabled={isLoading}
                >
                    <Text className="text-white text-base font-bold">
                        {isLoading ? "Signing up..." : "Sign Up"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="mt-5 items-center"
                    onPress={() => router.push("/")}
                >
                    <Text className="text-[#b3b3b3]">
                        Already have an account?{" "}
                        <Text className="text-[#1DB954] font-bold">Log In</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Signup;
