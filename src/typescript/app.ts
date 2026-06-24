interface AppConfig {
  name: string;
  version: string;
  environment: string;
}

class Application {
  private config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
  }

  run(): void {
    console.log('finance-notification - TypeScript Application');
    console.log('Config:', JSON.stringify(this.config));
  }
}

const config: AppConfig = {
  name: 'finance-notification',
  version: '1.0.0',
  environment: 'development'
};

const app = new Application(config);
app.run();
