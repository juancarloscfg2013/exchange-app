export interface IConfig {
    API_URL: string;
    ACCESS_KEY: string;
  }
  
  const BaseConfig: IConfig = {
    API_URL: "http://api.exchangeratesapi.io/v1",
    ACCESS_KEY: "1202b5803ea50fdfb20316ec74f5bbb3",
  };
  
  export default BaseConfig;