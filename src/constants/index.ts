const breakpoints = {
  sm: '360px',
  md: '547px',
  lg: '1658px'
};

export const devices = {
  mobile: `(min-width: ${breakpoints.sm})`,
  tablet: `(min-width: ${breakpoints.md})`,
  desktop: `(min-width: ${breakpoints.lg})`
};

export const FORECAST_LENGTH = 7;
