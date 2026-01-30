import { useState, useEffect } from 'react';

// Simplified hook that doesn't rely on WASM
export const useAleoWASM = () => {
  const [aleoInstance, setAleoInstance] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Immediately set as ready - no WASM initialization needed
    setAleoInstance({ ready: true });
    setLoading(false);
    setError(null);
  }, []);

  return { aleoInstance, loading, error };
};

export const sdk = {
  ready: true,
};