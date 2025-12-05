import { definePreset } from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';

export const WhiskeyLoungePreset = definePreset(Nora, {
  semantic: {
    // Primary / accent color
    primary: {
      color: '#B08B4F',       // brass (accent)
      contrastText: '#F5EDE2', // ivory text
    },
    // Surface / background tones
    surface: {
      background: '#1B1412',  // espresso / main background
      ground: '#0E0E0E',      // charcoal / app background
      card: '#3F2C23',        // oak / cards
    },
    // Text colors
    text: {
      color: '#F5EDE2',       // ivory
      secondary: '#C7B79F',   // linen / muted text
    },
    // Borders & highlights
    border: {
      color: '#6E4A35',       // barrel
    },
    highlight: {
      background: '#8C5E3C',  // bourbon
      text: '#FFFFFF',
    }
  }
});


