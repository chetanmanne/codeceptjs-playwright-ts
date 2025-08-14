import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
const{devicces} = require('playwright');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './testCases/api/reqres_test.ts',
  output: './output',
  helpers: {
    Playwright: {
     // browser: 'chromium',
      url: 'https://www.southwest.com/',
      show: true
     // emulate: devicces['Iphone 11']
    },
    REST: {
      endpoint: 'https://jsonplaceholder.typicode.com', // your API base URL
      defaultHeaders: {
        'Content-Type': 'application/json',
      }
    },
    JSONResponse: {} // Helper to handle JSON responses
  },

   multiple: {
      default: {
        browsers: ['chromium'],
      },
      all: {
        browsers: ['chromium', 'firefox', 'webkit'],
      }
      // iphone: {
      //   devices: ['iPhone 11'],
      // },
      // android: {
      //   devices: ['Pixel 5'],
      // }
    },
  include: {
    I: './steps_file.ts'
  },
  name: 'codeceptjs-playwright-ts',

  plugins: {
    pauseOnFail: {
      enabled: false
    },
    retryFailedStep: {
      enabled: true,
      retries: 2
    },
    screenshotOnFail: {
      enabled: true,
      fullPageScreenshots: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    }
  },
    ai: {
      request: async messages => {
      const OpenAI = require('openai')
      const openai = new OpenAI({ apiKey: 'Sample' })
      const completion = await openai.chat.completions.create({
        model: 'gpt-5',
        messages,
      });
      return completion?.choices[0]?.message?.content}}
}
