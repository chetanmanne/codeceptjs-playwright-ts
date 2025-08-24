import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
const{devicces} = require('playwright');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();
require('./heal');

export const config: CodeceptJS.MainConfig = {

  tests: './testCases/web/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
     // browser: 'chromium',
      url: 'https://www.southwest.com/',
      show: true
     // emulate: devicces['Iphone 11']
    },
   // LogBrowserHelper: { require: './helpers/LogBrowserHelper.ts' },
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
        browsers: ['firefox'],
      },
      all: {
        browsers: ['chromium', 'firefox', 'webkit'],
      }
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
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    },
    heal: {
      enabled: true,
      outputDir: './output/heal'
    }
  },
    ai: {
      request: async messages => {
      const OpenAI = require('openai')
      const openai = new OpenAI({ apiKey: 'sample' })
      const completion = await openai.chat.completions.create({
        model: 'gpt-5',
        messages,
      });
      return completion?.choices[0]?.message?.content}}
}
