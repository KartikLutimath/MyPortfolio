/* global use, db */
// MongoDB Playground for Portfolio Contact Form
// This script sets up the contacts collection with validation

use('portfolio');

// Create contacts collection with JSON schema validation
db.createCollection('contacts', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'email', 'message', 'timestamp'],
      properties: {
        _id: { bsonType: 'objectId' },
        name: {
          bsonType: 'string',
          minLength: 2,
          maxLength: 100,
          description: 'Sender name'
        },
        email: {
          bsonType: 'string',
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          description: 'Sender email address'
        },
        message: {
          bsonType: 'string',
          minLength: 10,
          maxLength: 5000,
          description: 'Contact message'
        },
        timestamp: {
          bsonType: 'date',
          description: 'When the message was sent'
        },
        read: {
          bsonType: 'bool',
          description: 'Whether the message has been read'
        }
      }
    }
  }
});

console.log('✓ Contacts collection created with validation!');

// Insert a test contact message
db.getCollection('contacts').insertOne({
  name: 'Test Visitor',
  email: 'test@example.com',
  message: 'This is a test message from the contact form. Everything is working properly!',
  timestamp: new Date(),
  read: false
});

console.log('✓ Test message inserted successfully!');

// Show all contacts
console.log('\n📋 All contacts:');
db.getCollection('contacts').find({}).pretty();

// Show count
const count = db.getCollection('contacts').countDocuments({});
console.log(`\nTotal contacts: ${count}`);
