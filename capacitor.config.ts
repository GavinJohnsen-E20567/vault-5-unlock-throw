/// <reference types="@capacitor/splash-screen" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'vault-5-unlock-throw',
  webDir: 'dist/vault-5-unlock-throw',
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: '#01A7E1',
      androidScaleType: 'CENTER_CROP'
    }
  }
};

export default config;
