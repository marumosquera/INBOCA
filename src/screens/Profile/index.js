import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{
            uri:
              'https://lh3.googleusercontent.com/p/AF1QipMbA77l9mSvVU2gnEeUj5o-hFBXS6jSRPEixtaA=s1360-w1360-h1020',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>JOHN DOE</Text>
        <Text style={styles.daysRemaining}>12 days remaining in Buenos Aires</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.profileText}>
          <Text style={styles.profileLabel}>Full Name:</Text> John Doe
        </Text>
        <Text style={styles.profileText}>
          <Text style={styles.profileLabel}>Email:</Text> john.doe@example.com
        </Text>
        <Text style={styles.profileText}>
          <Text style={styles.profileLabel}>Nationality:</Text> American
        </Text>
        <Text style={styles.profileText}>
          <Text style={styles.profileLabel}>Date of Birth:</Text> 01/15/1985
        </Text>
        <Text style={styles.profileText}>
          <Text style={styles.profileLabel}>Traveling With:</Text> 2 companions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  banner: {
    backgroundColor: '#5700FF', // Blue/Purple color
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%', // 1/2 of the screen
    borderBottomLeftRadius: 20, // Border radius on the bottom left corner
    borderBottomRightRadius: 20, // Border radius on the bottom right corner
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  daysRemaining: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker color with transparency
    padding: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    marginTop: 10,
  },
  content: {
    padding: 20,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
    textTransform: 'lowercase',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
  },
  profileLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    textTransform: 'uppercase',
  },
});

export default ProfileSection;




