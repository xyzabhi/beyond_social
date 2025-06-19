import ChipButton from '@/components/custom/buttons/ChipButton';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const InterestList = [
  {
    text: "Singing",
    icon: "musical-notes"
  },
  {
    text: "Dancing",
    icon: "walk"
  },
  {
    text: "Acting",
    icon: "people"
  },
  {
    text: "Writing",
    icon: "pencil"
  },
  {
    text: "Reading",
    icon: "book"
  },
  {
    text: "Painting",
    icon: "color-palette"
  },
  {
    text: "Photography",
    icon: "camera"
  },
  {
    text: "Cooking",
    icon: "restaurant"
  },
  {
    text: "Yoga",
    icon: "leaf"
  },
  {
    text: "Meditation",
    icon: "medal"
  },
  {
    text: "Hiking",
    icon: "walk"
  },
  {
    text: "Camping",
    icon: "bed"
  },
];

export default function Step2VibeSelectionScreen() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests((prev) => 
      prev.includes(interest) 
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Step 2: Vibe Selection</Text>
          <Text style={styles.subtitle}>Select your interests and hobbies</Text>
        </View>

        <View style={styles.chipsContainer}>
          {InterestList.map((interest) => (
            <ChipButton 
              key={interest.text} 
              onPress={() => handleInterestToggle(interest.text)} 
              variant='outline'  
              selected={selectedInterests.includes(interest.text)}
              style={styles.chip}
            >
              <Ionicons 
                name={interest.icon as any} 
                size={20} 
                color={selectedInterests.includes(interest.text) ? '#222222' : Colors.text} 
              />
              <Text style={[
                styles.chipText,
                { color: selectedInterests.includes(interest.text) ? '#222222' : Colors.text }
              ]}>
                {interest.text}
              </Text>
            </ChipButton>
          ))}
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 40,
  },
  chip: {
    margin: 0,
  },
  chipText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 'auto',
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  skipText: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  nextButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  nextText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});