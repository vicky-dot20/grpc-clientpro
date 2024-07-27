// src/client.ts
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

// Load proto file
const protoPath = path.resolve(__dirname, '../proto/enrichment/enrichment.proto');
const packageDefinition = protoLoader.loadSync(protoPath);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;

// Define the package and service
const enrichmentPackage = protoDescriptor.enrichmentPackage;

// Create a gRPC client
const client = new enrichmentPackage.EnrichmentService(
  '127.0.0.1:8000', // Ensure this matches your server address
  grpc.credentials.createInsecure()
);

// Define the request
const request = {};

// Call the Enrich method
client.Enrich(request, (error: grpc.ServiceError | null, response: any) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }
  console.log('Received response:', response);
});
