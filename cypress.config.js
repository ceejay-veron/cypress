const { defineConfig } = require('cypress')

// load the environment variables from the local .env file
require('dotenv').config()

module.exports = defineConfig({
  env: {
    'my-var': 'ok',
    //Finanace_user
    'finusername': 'isw.finance@interswitchgroup.com',
    'finPass': 'Password@123',
    //Operations_User
    'Opsusername': 'isw.operations@interswitchgroup.com',
    'OpsPass': 'Password@123',
    //CORPORATE_Admin
    'username1': 'njoku101@yopmail.com',
    'password1': 'Password1234@',
    //fake_user
    'username3': 'VBnjoku101@qa.team',
    'password3': 'Password1@',
    //CORPORATE_USER
    'username4': 'njoku102@yopmail.com',
    'password4': 'Password1234',
    //Verve_Admin User
    'vervAdminUser': 'verve.admin@interswitchgroup.com',
    'verveAdminPass': 'password',
    //'vervAdminUser': 'phoenix.shed-okara@interswitchgroup.com',
    //'verveAdminPass': 'Mixmax$440',

    //Verve_User
    'verveUser': 'verve.user@interswitchgroup.com',
    'verveUserPass': 'password',
    //'verveUser': 'chijioke.njoku@interswitchgroup.com',
    //'verveUserPass': 'Compton2028@',
  },
  fixturesFolder: "cypress/fixtures",
  experimentalShadowDomSupport: true,
  defaultCommandTimeout: 20000,
  e2e: {
    baseUrl: 'https://verve-access-customer.k8.isw.la/corporate/signin',
    //baseUrl: 'https://verve-access-customer.k8.isw.la/corporate/signin',
    supportFile: false,
    watchForFileChanges: false,
    setupNodeEvents (on, config) {
      // we can grab some process environment variables
      // and stick it into config.env before returning the updated config
      config.env = config.env || {}

      // you could extract only specific variables
      // and rename them if necessary
      config.env.FOO = process.env.FOO
      config.env.BAR = process.env.BAR
      config.env.USER_NAME = process.env.USER_NAME
      console.log('extended config.env with process.env.{FOO, BAR, USER_NAME}')

      return config
    },
  
  },

 
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
  reporterEnabled: 'mochawesome',
  mochawesomeReporterOptions:{
    reportDir: 'cypress/reports/mocha',
    mochaFile: 'cypress/reports/results/my-test-output-[hash].xml',
    quite:true,
    overwrite: false,
    html: true,
    json: true
  }
} 



})
      //baseUrl: "https://verve-access-customer.k8.isw.la/corporate/signin"
