import { useState } from 'react';
import { slope } from '../linecalculation.js';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    borderRadius: 4,
    fontSize: 14,
  },
  result: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  resultText: {
    fontSize: 16,
    fontWeight: '600',
  },
  error: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#ffe0e0',
    borderRadius: 4,
  },
  errorText: {
    fontSize: 16,
    color: '#d00',
    fontWeight: '600',
  },
});

export function LineCalculation() {
  const [x1, setX1] = useState('0');
  const [y1, setY1] = useState('0');
  const [x2, setX2] = useState('1');
  const [y2, setY2] = useState('1');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      setError(null);
      const x1Num = parseFloat(x1);
      const y1Num = parseFloat(y1);
      const x2Num = parseFloat(x2);
      const y2Num = parseFloat(y2);

      if (isNaN(x1Num) || isNaN(y1Num) || isNaN(x2Num) || isNaN(y2Num)) {
        setError('All inputs must be valid numbers');
        setResult(null);
        return;
      }

      const slp = slope(x1Num, y1Num, x2Num, y2Num);
      setResult(slp.toFixed(4));
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Line Slope Calculator</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Point 1 (x₁, y₁)</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="x1"
            value={x1}
            onChangeText={setX1}
            keyboardType="decimal-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="y1"
            value={y1}
            onChangeText={setY1}
            keyboardType="decimal-pad"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Point 2 (x₂, y₂)</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="x2"
            value={x2}
            onChangeText={setX2}
            keyboardType="decimal-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="y2"
            value={y2}
            onChangeText={setY2}
            keyboardType="decimal-pad"
          />
        </View>
      </View>

      <Text
        style={{
          marginTop: 12,
          padding: 12,
          backgroundColor: '#007AFF',
          color: 'white',
          borderRadius: 4,
          textAlign: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        }}
        onPress={handleCalculate}
      >
        Calculate Slope
      </Text>

      {result !== null && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            Slope: {result}
          </Text>
          <Text style={{ fontSize: 12, marginTop: 4, color: '#666' }}>
            Formula: rise / run = ({y2} - {y1}) / ({x2} - {x1})
          </Text>
        </View>
      )}

      {error && (
        <View style={styles.error}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      )}
    </View>
  );
}
