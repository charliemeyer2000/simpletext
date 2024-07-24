import {
  SimpleTextClient,
  SimpleTextConfig,
  SendSMSParams,
  RequestOTPParams,
  ValidateOTPParams,
} from "../index";

const config: SimpleTextConfig = {
  secretKey: "your-secret-key",
  appId: "your-app-id",
};

const client = new SimpleTextClient(config);

// Test Send SMS
async function testSendSMS() {
  const smsParams: SendSMSParams = {
    to: "+11234567890",
    message: "Hello, World!",
  };
  try {
    const response = await client.sendSMS(smsParams);
    console.log("SMS Test:", response);
  } catch (error) {
    console.error("SMS Test Error:", error);
  }
}

// Test Request OTP
async function testRequestOTP() {
  const otpParams: RequestOTPParams = { to: "+11234567890", appName: "MyApp" };
  try {
    const response = await client.requestOTP(otpParams);
    console.log("OTP Request Test:", response);
  } catch (error) {
    console.error("OTP Request Test Error:", error);
  }
}

// Test Validate OTP
async function testValidateOTP() {
  const validateParams: ValidateOTPParams = {
    to: "+11234567890",
    referenceId: "ref123",
    otpCode: "123456",
  };
  try {
    const response = await client.validateOTP(validateParams);
    console.log("OTP Validation Test:", response);
  } catch (error) {
    console.error("OTP Validation Test Error:", error);
  }
}

// Run all tests
async function runTests() {
  //   await testSendSMS();
  //   await testRequestOTP();
  //   await testValidateOTP();
}

runTests();
