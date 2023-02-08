export const defaultTheme = {
  colors: {
    white: '#fff',
  
    'gray-100': '#E1E1E6',
    'gray-300': '#C4C4CC',
    'gray-400': '#8D8D99',
    'gray-500': '#7C7C8A',
    'gray-600': '#323238',
    'gray-700': '#29292E',
    'gray-800': '#202024',
    'gray-900': '#121214',
  
    'green-300': '#00B37E',
    'green-500': '#00875F',
    'green-700': '#015F43',
  
    'red-300': '#F75A68',
    'red-500': '#AB222E',
    'red-700': '#7A1921',
  },

  fonts: {
    family: 'Roboto, sans-serif',
    weights: {
      regular: 400,
      bold: 700,
    },
    lineHeight: '160%',
    sizes: {
      14: '0.875rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
    }
  },
  spaces: {
    8: '0.5rem',
    12: '0.75rem',
    14: '0.875rem',
    16: '1rem',
    20: '1.25rem',
    32: '2rem',
  } 
} as const