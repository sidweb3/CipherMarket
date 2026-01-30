import { useState, useCallback } from 'react';
import { useWallet } from '@demox-labs/aleo-wallet-adapter-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { parseCSV, generateZKProof, submitProofToAleo, SAMPLE_CSV_DATA, type ZKProof } from '@/lib/zkProof';
import { Upload, FileText, Shield, Send, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

export function ProofGenerator() {
  const { publicKey, requestTransaction } = useWallet();
  const [file, setFile] = useState<File | null>(null);
  const [proof, setProof] = useState<ZKProof | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<'idle' | 'parsing' | 'generating' | 'submitting' | 'complete'>('idle');
  const [txHash, setTxHash] = useState<string | null>(null);
  const [demoMode, setDemoMode] = useState(false);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      if (!uploadedFile.name.endsWith('.csv')) {
        toast.error('Please upload a CSV file');
        return;
      }
      setFile(uploadedFile);
      setProof(null);
      setTxHash(null);
      setStatus('idle');
      setDemoMode(false);
      toast.success('CSV file loaded successfully');
    }
  }, []);

  const handleGenerateProof = useCallback(async (csvContent?: string) => {
    if (!file && !csvContent) {
      toast.error('No file selected');
      return;
    }

    try {
      setStatus('parsing');
      setProgress(0);

      const content = csvContent || await file!.text();
      const { schema } = parseCSV(content);

      toast.info('CSV parsed successfully. Generating ZK proof...');
      
      setStatus('generating');
      const generatedProof = await generateZKProof(schema, (p) => setProgress(p * 100));

      setProof(generatedProof);
      setStatus('idle');
      toast.success('ZK Proof generated successfully!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Failed to generate proof: ${errorMessage}`);
      setStatus('idle');
      console.error(error);
    }
  }, [file]);

  const handleSubmitProof = useCallback(async () => {
    if (!proof || !publicKey) {
      toast.error('No proof or wallet not connected');
      return;
    }

    try {
      setStatus('submitting');
      toast.info('Submitting proof to Aleo Testnet...');
      
      const hash = await submitProofToAleo(proof, publicKey, requestTransaction);
      setTxHash(hash);
      setStatus('complete');
      toast.success('Proof submitted to Aleo Testnet!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error(`Failed to submit proof: ${errorMessage}`);
      setStatus('idle');
      console.error(error);
    }
  }, [proof, publicKey, requestTransaction]);

  const handleDemoMode = useCallback(async () => {
    setDemoMode(true);
    setFile(null);
    setProof(null);
    setTxHash(null);
    setStatus('idle');
    
    toast.success('Demo mode activated! Using sample employee dataset...');
    
    // Wait a moment for the toast to be visible
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Automatically generate proof with sample data
    await handleGenerateProof(SAMPLE_CSV_DATA);
  }, [handleGenerateProof]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                <CardTitle>Upload Dataset</CardTitle>
                {demoMode && (
                  <Badge variant="secondary" className="ml-2">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Demo Mode
                  </Badge>
                )}
              </div>
            </div>
            <CardDescription>
              Upload a CSV file to generate a Zero-Knowledge proof of its schema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Demo Mode Alert */}
              {demoMode && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Alert className="border-primary/30 bg-primary/5">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <AlertDescription>
                      <strong>Demo Mode Active:</strong> Using a sample employee dataset with 10 rows and 5 columns 
                      (Name, Age, Department, Salary, Years_Experience). This demonstrates how CipherMarket proves 
                      dataset structure without revealing sensitive employee information.
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="csv-upload"
                    disabled={status !== 'idle'}
                  />
                  <label htmlFor="csv-upload" className="flex-1">
                    <Button asChild variant="outline" disabled={status !== 'idle'}>
                      <span className="cursor-pointer">
                        <FileText className="mr-2 h-4 w-4" />
                        Choose CSV File
                      </span>
                    </Button>
                  </label>
                  {file && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-muted-foreground"
                    >
                      {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </motion.span>
                  )}
                </div>

                {/* Demo Button */}
                <Button
                  onClick={handleDemoMode}
                  disabled={status !== 'idle'}
                  variant="secondary"
                  className="gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Try Demo
                </Button>
              </div>

              {(file || demoMode) && !proof && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Button
                    onClick={() => handleGenerateProof()}
                    disabled={status !== 'idle' || !publicKey}
                    className="w-full"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    {status === 'generating' ? 'Generating Proof...' : 'Generate ZK Proof'}
                  </Button>
                </motion.div>
              )}

              {!publicKey && (file || demoMode) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-sm text-amber-500 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20"
                >
                  <AlertCircle className="h-4 w-4" />
                  <span>Connect your wallet to generate proofs</span>
                </motion.div>
              )}

              {publicKey && !file && !demoMode && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-sm text-blue-500 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20"
                >
                  <Info className="h-4 w-4" />
                  <span>Upload a CSV file or try the demo to begin generating Zero-Knowledge proofs</span>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-2 text-xs text-muted-foreground p-3 rounded-lg bg-muted/30"
              >
                <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Your CSV file is processed entirely in your browser. No data is sent to any server.
                </span>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <AnimatePresence>
        {(status === 'generating' || status === 'submitting') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-accent/20">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      {status === 'generating' ? 'Generating ZK Proof...' : 'Submitting to Aleo Testnet...'}
                    </span>
                    <span className="font-mono">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {proof && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Proof Generated
                  {demoMode && (
                    <Badge variant="secondary" className="ml-2">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Demo
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {demoMode && (
                  <Alert className="border-primary/30 bg-primary/5">
                    <Info className="h-4 w-4 text-primary" />
                    <AlertDescription>
                      This proof verifies the dataset has <strong>{proof.publicInputs.columnCount} columns</strong> and{' '}
                      <strong>{proof.publicInputs.rowCount} rows</strong> without revealing any employee names, salaries, 
                      or other sensitive information. Buyers can verify data quality before purchase!
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="text-muted-foreground">Column Count</div>
                    <div className="font-mono text-lg">{proof.publicInputs.columnCount}</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <div className="text-muted-foreground">Row Count</div>
                    <div className="font-mono text-lg">{proof.publicInputs.rowCount}</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="col-span-2"
                  >
                    <div className="text-muted-foreground">Column Types</div>
                    <div className="font-mono text-xs">
                      {proof.publicInputs.columnTypes.join(', ')}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="col-span-2"
                  >
                    <div className="text-muted-foreground">Data Hash</div>
                    <div className="font-mono text-xs break-all">{proof.publicInputs.dataHash}</div>
                  </motion.div>
                </div>

                {!txHash && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      onClick={handleSubmitProof}
                      disabled={status === 'submitting'}
                      className="w-full"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Submit to Aleo Testnet
                    </Button>
                  </motion.div>
                )}

                {txHash && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <div className="text-sm text-green-500 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Successfully submitted to Aleo Testnet!
                    </div>
                    <div className="text-xs">
                      <div className="text-muted-foreground">Transaction Hash:</div>
                      <div className="font-mono break-all">{txHash}</div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}