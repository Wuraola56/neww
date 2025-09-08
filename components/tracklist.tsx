import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Track = {
    id: string;
    title: string;
    artist: string;
    duration: string;
    coverUrl: string;
};

type TrackListProps = {
    tracks: Track[];
    onTrackPress: (track: Track) => void;
};

const TrackList: React.FC<TrackListProps> = ({ tracks, onTrackPress }) => {
    return (
        <View className="flex-1 px-3">
            {tracks.map((track) => (
                <TouchableOpacity
                    key={track.id}
                    className="flex-row items-center mb-4 bg-[#1c1c1c] rounded-lg p-3"
                    onPress={() => onTrackPress(track)}
                >
                    <Image
                        source={{ uri: track.coverUrl }}
                        className="w-12 h-12 rounded mr-4"
                    />
                    <View className="flex-1">
                        <Text
                            className="text-white text-base font-bold mb-1"
                            numberOfLines={1}
                        >
                            {track.title}
                        </Text>
                        <Text
                            className="text-gray-400 text-sm"
                            numberOfLines={1}
                        >
                            {track.artist}
                        </Text>
                    </View>
                    <Text className="text-gray-400 text-sm">{track.duration}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default TrackList;
