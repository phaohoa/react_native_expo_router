import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Speech from 'expo-speech';

const KOREAN_EXAMPLES = [
  { text: '안녕하세요', meaning: 'Hello' },
  { text: '감사합니다', meaning: 'Thank you' },
  { text: '사랑해요', meaning: 'I love you' },
  { text: '좋은 하루 되세요', meaning: 'Have a nice day' },
  { text: '만나서 반갑습니다', meaning: 'Nice to meet you' },
];

export default function SearchTab() {
  const [text, setText] = useState('안녕하세요');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [voices, setVoices] = useState<Speech.Voice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string | undefined>(
    undefined
  );

  // Load available voices
  useEffect(() => {
    const loadVoices = async () => {
      try {
        const availableVoices = await Speech.getAvailableVoicesAsync();

        // Only Korean voices
        const koreanVoices = availableVoices.filter(
          (v) => v.language === 'ko-KR'
        );

        setVoices(koreanVoices);

        // Auto select first voice
        if (koreanVoices.length > 0) {
          setSelectedVoice(koreanVoices[0].identifier);
        }
      } catch (error) {
        console.warn('Failed to load voices', error);
      }
    };

    loadVoices();

    // Cleanup when leaving screen
    return () => {
      Speech.stop();
    };
  }, []);

  const speak = (textToSpeak: string) => {
    if (!textToSpeak.trim()) return;

    // Stop any previous speech
    Speech.stop();

    Speech.speak(textToSpeak, {
      language: 'ko-KR',
      voice: selectedVoice,
      rate: 1.0,
      pitch: 1.0,
      onStart: () => setIsSpeaking(true),
      onDone: () => setIsSpeaking(false),
      onStopped: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  const stopSpeaking = () => {
    Speech.stop();
    setIsSpeaking(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Korean Speech</Text>
        <Text style={styles.subtitle}>Type or tap examples below</Text>

        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter Korean text..."
          multiline
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.button,
              (isSpeaking || !text.trim()) && styles.buttonDisabled,
            ]}
            onPress={() => speak(text)}
            disabled={isSpeaking || !text.trim()}
          >
            <Text style={styles.buttonText}>Speak</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.stopButton]}
            onPress={stopSpeaking}
          >
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Voices:</Text>

        {voices.length === 0 && (
          <Text style={styles.emptyText}>No Korean voices found</Text>
        )}

        {voices.map((voice) => (
          <TouchableOpacity
            key={voice.identifier}
            style={[
              styles.voiceItem,
              selectedVoice === voice.identifier &&
                styles.voiceItemActive,
            ]}
            onPress={() => setSelectedVoice(voice.identifier)}
          >
            <Text style={styles.voiceName}>
              {voice.name} ({voice.quality})
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Examples:</Text>

        {KOREAN_EXAMPLES.map((item) => (
          <TouchableOpacity
            key={item.text}
            style={styles.exampleCard}
            onPress={() => {
              setText(item.text);
              speak(item.text);
            }}
          >
            <Text style={styles.koreanText}>{item.text}</Text>
            <Text style={styles.meaningText}>{item.meaning}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    minHeight: 80,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 12,
  },
  button: {
    backgroundColor: '#FF9500',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  stopButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  emptyText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  voiceItem: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 8,
  },
  voiceItemActive: {
    borderColor: '#FF9500',
    backgroundColor: '#FFF4E5',
  },
  voiceName: {
    textAlign: 'center',
    fontSize: 14,
  },
  exampleCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  koreanText: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  meaningText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  bottomSpacer: {
    height: 100,
  },
});
