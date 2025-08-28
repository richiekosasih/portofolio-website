import { createContext } from 'react';

export const ThemeContext = createContext();

export const themes = {
  dark: {
    name: 'Dark Mode',
    primary: 'from-[#2C2F4A] to-[#3C3F5A]', // nuansa navy gelap elegan
    secondary: 'from-[#4A4D72] to-[#5A5D82]',
    accent: 'from-[#FBBF24] to-[#F59E0B]', // aksen keemasan hangat
    background: 'from-[#1E2137] via-[#2A2D45] to-[#1B1E32]', // hitam tidak terlalu pekat
    glass: 'rgba(255, 255, 255, 0.05)',
    glow: 'rgba(251,191,36,0.25)', // glow gold lembut
    text: {
      primary: '#F3F4F6',
      secondary: '#D1D5DB',
      muted: '#9CA3AF',
      accent: '#FBBF24',
    },
  },
  light: {
    name: 'Bright Mode',
    primary: 'from-[#3B82F6] to-[#6366F1]', // biru elegan
    secondary: 'from-[#E5E7EB] to-[#F3F4F6]',
    accent: 'from-[#F59E0B] to-[#FBBF24]', // aksen emas lembut
    background: 'from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6]', // putih lembut tidak menyilaukan
    glass: 'rgba(255, 255, 255, 0.85)',
    glow: 'rgba(59,130,246,0.2)',
    text: {
      primary: '#1F2937',
      secondary: '#374151',
      muted: '#6B7280',
      accent: '#2563EB',
    },
  },
};
