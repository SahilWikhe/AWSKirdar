const ENV = {
    development: {
      API_URL: 'http://localhost:5001/api',
      WS_URL: 'ws://localhost:5001'
    },
    production: {
      API_URL: 'http://ec2-98-81-208-43.compute-1.amazonaws.com:5001/api',
      WS_URL: 'ws://ec2-98-81-208-43.compute-1.amazonaws.com:5001'
    }
  };
  
  export const getEnvironmentConfig = () => {
    const environment = import.meta.env.VITE_NODE_ENV || 'production';
    return ENV[environment] || ENV.production;
  };
  
  export const config = getEnvironmentConfig();