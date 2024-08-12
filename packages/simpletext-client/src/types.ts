/**
 * Enum representing the source of the request.
 */
export enum RequestSource {
  WebApp = "webapp",
  Package = "package",
  API = "api",
}

/**
 * Enum representing the type of request.
 */
export enum RequestType {
  SMS = "sms",
  OTP = "otp",
}

/**
 * Configuration for the SimpleText client.
 */
export type SimpleTextConfig = {
  /** Secret key for authentication */
  secretKey: string;
  /** Application ID */
  appId: string;
};

/**
 * Parameters for sending an SMS.
 */
export type SendSMSParams = {
  /** Destination phone number */
  to: string;
  /** SMS message content */
  message: string;
};

/**
 * Parameters for requesting an OTP.
 */
export type RequestOTPParams = {
  /** Destination phone number */
  to: string;
  /** Name of the application requesting OTP */
  appName: string;
  /** Optional Params to add extra configuration */

  /** Number in minutes that the OTP code is valid (from 5-60) */
  validityPeriod?: number;
  /** Number of allowed attempts (from 1-5) */
  allowedAttempts?: number;
  /** Length of the OTP Code, (from 5-8) */
  codeLength?: number;
  /** The language, in IETF BCP-47 format, to use when sending the message */
  language?: string;
};

/**
 * Parameters for validating an OTP.
 */
export type ValidateOTPParams = {
  /** Phone number associated with the OTP */
  to: string;
  /** Reference ID received when requesting the OTP */
  referenceId: string;
  /** OTP code to validate */
  otpCode: string;
};

/**
 * Response type for sending an SMS.
 */
export type SendSMSResponse = {
  message: string;
  requests_remaining_today: number | string;
};

/**
 * Response type for requesting an OTP.
 */
export type RequestOTPResponse = {
  message: string;
  reference_id: string;
  requests_remaining_today: number | string;
  to: string;
};

/**
 * Response type for validating an OTP.
 */
export type ValidateOTPResponse = {
  message: string;
  status: boolean;
};

/**
 * Generic API response type.
 */
export type APIResponse<T> = {
  /** Whether the API call was successful */
  success: boolean;
  /** Response data (if successful) */
  data?: T;
  /** Error message (if unsuccessful) */
  error?: string;
};
