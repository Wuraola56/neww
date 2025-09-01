import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import TrackList from '../components/TrackList';
import { mockTracks, featuredPlaylists } from '../data/mockData';

const HomeScreen = ({ navigation }) => {
  const [recentlyPlayed, setRecentlyPlayed] = useState(mockTracks.slice(0, 3));
  const [featured, setFeatured] = useState(featuredPlaylists);

  const handleTrackPress = (track) => {
    // This will eventually navigate to a player screen
    console.log('Playing:', track.title);
    // For now, let's just log it
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Good afternoon</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.icon}>🔔</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.icon}>⏱️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.icon}>⚙️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recently Played Section */}
        <Text style={styles.sectionTitle}>Recently Played</Text>
        <TrackList tracks={recentlyPlayed} onTrackPress={handleTrackPress} />

        {/* Featured Playlists Section */}
        <Text style={styles.sectionTitle}>Featured Playlists</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featured.map((playlist) => (
            <TouchableOpacity key={playlist.id} style={styles.playlistCard}>
              <Image source={{ uri: playlist.coverUrl }} style={styles.playlistImage} />
              <Text style={styles.playlistTitle} numberOfLines={1}>{playlist.title}</Text>
              <Text style={styles.playlistDescription} numberOfLines={2}>{playlist.description}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* For You Section */}
        <Text style={styles.sectionTitle}>Made For You</Text>
        <TrackList tracks={mockTracks} onTrackPress={handleTrackPress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 50,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  icon: {
    fontSize: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    marginBottom: 10,
  },
  playlistCard: {
    width: 150,
    margin: 10,
  },
  playlistImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  playlistTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  playlistDescription: {
    color: '#b3b3b3',
    fontSize: 12,
  },
});

export default HomeScreen;