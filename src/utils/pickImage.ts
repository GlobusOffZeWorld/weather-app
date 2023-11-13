export const pickImage = (src: string) => {
  const weatherStates = ['rain', 'snow', 'sunny', 'cloud', 'fog', 'wind', 'clear', 'thunder'];

  for (let i = 0; i < weatherStates.length; i++) {
    if (src.toLowerCase().includes(weatherStates[i])) {
      switch (weatherStates[i]) {
        case 'cloud':
          return 'cloudy';
        case 'mist':
          return 'fog';
      }
      return weatherStates[i];
    }
  }

  return 'defaultImage';
};
