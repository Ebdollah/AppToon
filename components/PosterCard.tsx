// PosterCard.js
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const PosterCard = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606',
          }}
          resizeMode="cover"
          style={styles.heroImage}
        />

        <View style={styles.content}>
          <Text style={styles.title}>Beautiful Mountain View</Text>

          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipi scing elit. Aliquam eu
          </Text>

          <View style={styles.footer}>
            <View style={styles.userBox}>
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/32.jpg',
                }}
                style={styles.avatar}
              />
              <Text style={styles.userName}>John Doe</Text>
            </View>

            <Text style={styles.time}>2 hours ago</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PosterCard;

const styles = StyleSheet.create({
  /* screen wrapper (matches Tailwind’s min-h-screen + centered flex) */
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6', // gray-100
  },

  /* white rounded card */
  card: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    overflow: 'hidden', // clips child corners
  },

  heroImage: {
    width: '100%',
    height: 80,
  },

  content: {
    padding: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1f2937', // gray-800
    marginBottom: 8,
  },

  body: {
    fontSize: 14,
    lineHeight: 20,
    color: '#374151', // gray-700
    marginBottom: 16,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },

  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },

  time: {
    fontSize: 13,
    color: '#6b7280', // gray-600
  },
});
