# ALX Coffee Shop App

A delightful mobile application for coffee lovers, built with React Native and Expo. Discover, order, and enjoy premium coffee beverages with a seamless user experience.

## Features

- **Browse Coffee Menu**: Explore a curated selection of premium coffee drinks
- **Detailed Product View**: Get comprehensive information about each coffee item
- **Order Management**: Place and track your coffee orders
- **Delivery Tracking**: Real-time updates on your delivery status
- **User-Friendly Interface**: Beautiful UI with smooth animations and gradients

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Language**: TypeScript
- **State Management**: React Hooks
- **Maps**: React Native Maps with Google Maps provider
- **Icons & Images**: Expo Asset Management, Lucide React Native

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Emulator/SDK (for Android development)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/alx-coffee-shop-app.git
   cd alx-coffee-shop-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install additional packages** (if not already included)

   ```bash
   npx expo install expo-linear-gradient
   npx expo install expo-router
   npx expo install react-native-safe-area-context
   npx expo install react-native-maps
   npx expo install lucide-react-native
   ```

4. **Set up NativeWind**
   ```bash
   npm install nativewind tailwindcss
   npx tailwindcss init
   ```

## Configuration

### Metro Configuration

Ensure your `metro.config.js` is properly configured for NativeWind:

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro-config");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: "./globals.css",
});
```

### Tailwind Configuration

Update your `tailwind.config.js`:

```js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        coffee: "#C67C4E",
        black: "#313131",
        grey: "#E3E3E3",
        lightPink: "#F9F2ED",
        deepPink: "#EDD6C8",
        foundationWhite: "#FFFFFF",
        foundationGrey: "#A2A2A2",
        foundationBlack: "#242424",
        foundationSurface: "#E3E3E3",
        foundationSurfaceNormal: "#D8D8D8",
        shadowColor: "#050505",
        starColor: "#FBBE21",
        green: "#36C07E",
      },
    },
  },
  plugins: [],
};
```

### Global Styles

Import your global CSS in the root layout (`app/_layout.tsx`):

```tsx
import "../globals.css";
```

### Maps Configuration

For the delivery tracking feature, configure Google Maps:

1. **Get a Google Maps API Key** from [Google Cloud Console](https://console.cloud.google.com/)
2. **Enable Maps SDK for Android and iOS**
3. **Add to app.json**:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "android": {
            "compileSdkVersion": 34,
            "targetSdkVersion": 34,
            "buildToolsVersion": "34.0.0"
          },
          "ios": {}
        }
      ]
    ]
  }
}
```

4. **Set environment variables** in `.env` or directly in app.json for the API key

## Running the App

1. **Start the Expo development server**

   ```bash
   npx expo start
   ```

2. **Run on device/emulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## Project Structure

```
alx-coffee-shop-app/
├── app/
│   ├── _layout.tsx          # Root layout
│   ├── index.tsx            # Welcome screen
│   ├── home.tsx             # Home screen with coffee menu
│   ├── delivery.tsx         # Delivery tracking with map
│   ├── order.tsx            # Order placement screen
│   ├── details/
│   │   └── [id].tsx         # Dynamic product details page
│   └── globals.css          # Global styles
├── components/
│   ├── CoffeeCard.tsx       # Coffee item card component
│   ├── CustomButton.tsx     # Reusable button component
│   ├── MapComponent.tsx     # Map placeholder for web
│   └── MapComponent.native.tsx # Interactive map for native platforms
├── assets/
│   └── images/              # App images and icons
├── app.json                 # Expo app configuration
├── package.json
├── tailwind.config.js
├── metro.config.js
├── babel.config.js
├── tsconfig.json
└── README.md
```

## Key Components

### CustomButton

A versatile button component with two variants:

- `coffee`: Coffee-colored background with white text
- `surface`: Light surface background with black text

Usage:

```tsx
<CustomButton
  title="Get Started"
  onPress={() => console.log("Pressed")}
  variant="coffee"
/>
```

### CoffeeCard

Displays coffee items with image, name, price, and rating. Supports navigation to details page.

### MapComponent

Platform-specific map component for delivery tracking:

- **Native**: Interactive Google Maps with markers and polylines showing delivery route
- **Web**: Placeholder view indicating map is not supported on web

Usage:

```tsx
<MapComponent region={region} deliveryRoute={coordinates} />
```

## Troubleshooting

### NativeWind Styles Not Applying

If NativeWind styles aren't working:

1. **Check Metro Configuration**: Ensure `metro.config.js` points to the correct CSS file
2. **Verify Tailwind Content Paths**: Make sure `tailwind.config.js` includes all relevant directories
3. **Import Global CSS**: Confirm `globals.css` is imported in your root layout
4. **Restart Metro**: Clear cache and restart the development server

### Common Commands

```bash
# Clear Metro cache
npx expo start --clear

# Reset project
npm run reset-project

# Install new packages
npx expo install <package-name>
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Built as part of ALX ProDev Frontend program
- UI/UX Design sourced from [Nam Design](https://www.buymeacoffee.com/namdesign)
- Special thanks to the Expo and React Native communities
