import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import TrackList from "@/components/tracklist";
import { featuredPlaylists, mockTracks } from "../data/mockData";


const HomeScreen = () => {
    const [recentlyPlayed] = useState(mockTracks.slice(0, 3));
    const [featured] = useState(featuredPlaylists);

    const handleTrackPress = (track: { title: string }) => {
        console.log("Playing:", track.title);
    };

    return (
        <View className="flex-1 bg-[#121212]">
            <ScrollView className="flex-1">
                {/* Header */}
                <View className="flex-row justify-between items-center px-4 pt-12 pb-4">
                    <Text className="text-2xl font-bold text-white">Good afternoon</Text>
                    <View className="flex-row space-x-4">
                        <TouchableOpacity>
                            <Text className="text-xl">🔔</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="text-xl">⏱️</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="text-xl">⚙️</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Recently Played Section */}
                <Text className="text-xl font-bold text-white px-4 mb-2">
                    Recently Played
                </Text>
                <TrackList tracks={recentlyPlayed} onTrackPress={handleTrackPress} />

                {/* Featured Playlists Section */}
                <Text className="text-xl font-bold text-white px-4 mt-6 mb-2">
                    Featured Playlists
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="px-4 pb-4"
                >
                    {featured.map((playlist) => (
                        <TouchableOpacity
                            key={playlist.id}
                            className="w-36 mr-4"
                            onPress={() => console.log("Selected:", playlist.title)}
                        >
                            <Image
                                source={{ uri: playlist.coverUrl }}
                                className="w-36 h-36 rounded-lg mb-2"
                            />
                            <Text
                                className="text-sm font-bold text-white"
                                numberOfLines={1}
                            >
                                {playlist.title}
                            </Text>
                            <Text
                                className="text-xs text-gray-400"
                                numberOfLines={2}
                            >
                                {playlist.description}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* For You Section */}
                <Text className="text-xl font-bold text-white px-4 mt-6 mb-2">
                    Made For You
                </Text>
                <TrackList tracks={mockTracks} onTrackPress={handleTrackPress} />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
