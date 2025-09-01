import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TrackList = ({ tracks, onTrackPress }) => {
  return (
    <View style={styles.container}>
      {tracks.map((track) => (
        <TouchableOpacity 
          key={track.id} 
          style={styles.trackItem}
          onPress={() => onTrackPress(track)}
        >
          <Image source={{ uri: track.coverUrl }} style={styles.trackImage} />
          <View style={styles.trackInfo}>
            <Text style={styles.trackTitle} numberOfLines={1}>{track.title}</Text>
            <Text style={styles.trackArtist} numberOfLines={1}>{track.artist}</Text>
          </View>
          <Text style={styles.trackDuration}>{track.duration}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    padding: 10,
  },
  trackImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 15,
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  trackArtist: {
    color: '#b3b3b3',
    fontSize: 14,
  },
  trackDuration: {
    color: '#b3b3b3',
    fontSize: 14,
  },
});

export default TrackList;