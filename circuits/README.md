# CipherMarket Leo Circuits

This directory contains the Leo smart contracts for Zero-Knowledge proof generation and verification.

## Circuit: data_attestation.leo

### Purpose
Generate a Zero-Knowledge proof that attests to a CSV dataset's schema properties without revealing the actual data values.

### Inputs

**Private Inputs** (hidden from verifiers):
- `data: [[u8; 256]; 1000]` - Raw CSV data (up to 1000 rows, 256 bytes per row)

**Public Inputs** (visible to verifiers):
- `column_count: u32` - Number of columns in the dataset
- `row_count: u32` - Number of data rows (excluding header)
- `column_types: [u8; 32]` - Array encoding data types (0=String, 1=Integer, 2=Float)
- `data_hash: field` - Poseidon hash commitment of the dataset

### Circuit Logic

The `attest_schema` function performs the following operations:

1. **Input Validation**
   - Verifies `column_count` is within valid range (1-32 columns)
   - Verifies `row_count` is within valid range (1-1000000 rows)
   - Ensures `data_hash` is a valid field element

2. **Schema Attestation**
   - Attests to the structural properties of the dataset
   - Creates a cryptographic commitment to the schema
   - Returns public outputs that can be verified on-chain

3. **Zero-Knowledge Guarantee**
   - The circuit proves knowledge of data matching the schema
   - Actual cell values remain completely private
   - Only structural metadata is revealed

### Leo Program Code