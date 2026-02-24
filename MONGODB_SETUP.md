# MongoDB Data API Setup Guide

## Step 1: Create MongoDB Contacts Collection
1. Open `playground-contacts.mongodb.js`
2. Right-click and select "MongoDB: Run Playground"
3. This will create the `contacts` collection with validation

## Step 2: Set Up MongoDB App Services (Data API)
1. Go to **MongoDB Atlas** → **App Services**
2. Click **Create App** and name it something like "portfolio-api"
3. In the App, go to **Build** → **HTTP Endpoints**
4. Click **Create Endpoint** with these settings:
   - **Route**: `/contacts`
   - **HTTP Method**: `POST`
   - **Function**: Create a new function with this code:

```javascript
exports = async function(payload) {
  const db = context.services.get("mongodb-atlas");
  const collection = db.db("portfolio").collection("contacts");
  
  try {
    const result = await collection.insertOne({
      name: payload.name,
      email: payload.email,
      message: payload.message,
      timestamp: new Date(payload.timestamp),
      read: false
    });
    
    return { 
      success: true, 
      insertedId: result.insertedId,
      message: "Contact saved successfully"
    };
  } catch (error) {
    return { 
      success: false, 
      error: error.message 
    };
  }
};
```

## Step 3: Get Your API Credentials
1. In App Services, go to **Settings** → **Access Tokens**
2. Create a new API key
3. Copy the **App ID** from URL: `https://realm.mongodb.com/groups/{groupId}/apps/{APP_ID}/...`
4. Copy the **API Key**

## Step 4: Update .env File
Replace placeholders in `.env`:
```
VITE_MONGODB_API_URL=https://data.mongodb-realm.com/api/client/v2.0/app/YOUR_APP_ID/endpoints/contacts
VITE_MONGODB_API_KEY=your_data_api_key_here
```

## Step 5: Test the Contact Form
1. Run your portfolio: `npm run dev`
2. Fill out the contact form
3. Check MongoDB Atlas → Collections → `portfolio.contacts` to see your messages!

## Troubleshooting
- **401 Unauthorized**: Check your API key
- **404 Not Found**: Check your App ID and endpoint path
- **CORS Error**: Enable CORS in App Services → Settings
- **Validation Error**: Ensure name is 2-100 chars, email is valid, message is 10-5000 chars
