/**
 * @File simpletext.ts
 */

import type {
  SendSMSParams,
  RequestOTPParams,
  ValidateOTPParams,
  SendSMSResponse,
  RequestOTPResponse,
  APIResponse,
  ValidateOTPResponse,
  SimpleTextConfig,
} from "./types";

/**
 * SimpleText client for interacting with the SimpleText API.
 * @example
 * const config: SimpleTextConfig = {
 *   secretKey: 'your-secret-key',
 *   appId: 'your-app-id'
 * };
 * const client = new SimpleTextClient(config);
 */
export class SimpleTextClient {
  private config: SimpleTextConfig;
  private baseURL = "https://api.simpletext.dev";

  /**
   * Creates a new SimpleText client.
   * @param config - The configuration for the client.
   */
  constructor(config: SimpleTextConfig) {
    this.config = config;
  }

  private async makeRequest<T>(
    endpoint: string,
    data: any
  ): Promise<APIResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          SIMPLETEXT_SECRET: this.config.secretKey,
          SIMPLETEXT_APP_ID: this.config.appId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return {
          success: false,
          error: errorData.message || "An error occurred",
        };
      }

      const responseData = await response.json();
      return { success: true, data: responseData };
    } catch (error) {
      return { success: false, error: "An unexpected error occurred" };
    }
  }

  /**
   * Sends an SMS message.
   * @param params - The parameters for sending the SMS.
   * @returns A promise that resolves to the API response.
   * @example
   * client.sendSMS({ to: '+11234567890', message: 'Hello, World!' })
   *   .then(response => {
   *     if (response.success) {
   *       console.log('SMS sent:', response.data.message);
   *       console.log('Requests remaining today:', response.data.requests_remaining_today);
   *     } else {
   *       console.error('Error sending SMS:', response.error);
   *     }
   *   });
   */
  async sendSMS(params: SendSMSParams): Promise<APIResponse<SendSMSResponse>> {
    return this.makeRequest<SendSMSResponse>("/sms", {
      to: params.to,
      message: params.message,
    });
  }

  /**
   * Requests an OTP (One-Time Password).
   * @param params - The parameters for requesting the OTP.
   * @returns A promise that resolves to the API response.
   * @example
   * client.requestOTP({ to: '+11234567890', appName: 'MyApp' })
   *   .then(response => {
   *     if (response.success) {
   *       console.log('OTP requested:', response.data.message);
   *       console.log('Reference ID:', response.data.reference_id);
   *       console.log('Requests remaining today:', response.data.requests_remaining_today);
   *     } else {
   *       console.error('Error requesting OTP:', response.error);
   *     }
   *   });
   */
  async requestOTP(
    params: RequestOTPParams
  ): Promise<APIResponse<RequestOTPResponse>> {
    return this.makeRequest<RequestOTPResponse>("/request-otp", {
      to: params.to,
      app_name: params.appName,
      validity_period: params.validityPeriod || 20,
      allowed_attempts: params.allowedAttempts || 3,
      code_length: params.codeLength || 6,
      language: params.language || "en-US"
    });
  }

  /**
   * Validates an OTP (One-Time Password).
   * @param params - The parameters for validating the OTP.
   * @returns A promise that resolves to the API response.
   * @example
   * client.validateOTP({ to: '+11234567890', referenceId: 'ref123', otpCode: '123456' })
   *   .then(response => {
   *     if (response.success) {
   *       console.log('OTP validation result:', response.data.message);
   *       console.log('Validation status:', response.data.status);
   *     } else {
   *       console.error('Error validating OTP:', response.error);
   *     }
   *   });
   */
  async validateOTP(
    params: ValidateOTPParams
  ): Promise<APIResponse<ValidateOTPResponse>> {
    return this.makeRequest<ValidateOTPResponse>("/validate-otp", {
      to: params.to,
      reference_id: params.referenceId,
      otp_code: params.otpCode,
    });
  }
}
