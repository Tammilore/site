export const isValidEmail = (email: string): boolean => /.+@.+/.test(email);

export const formatDate = (date: string): string =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Africa/Lagos',
  }).format(new Date(date));