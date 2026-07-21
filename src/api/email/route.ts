import { NextRequest, NextResponse } from "next/server";
import { emailValidator, nameValidator } from "@/validators/contact.validators";
import AppError from "@/services/error/error.service";
import { emailService } from "@/services/email/email.service";
import {
  numberRegexPropertiesValidator,
  stringPropertiesValidator,
} from "@/validators/common.validators";
import { PHONE_REGEX } from "@/constants/regex.constants";
import { propertyConstraintsConfig } from "@/config/common.config";
import { responseService } from "@/services/response/response.service";
import { httpStatusConfig } from "@/config/http.config";
import { connectionEmail } from "@/services/email/email.templates";
import { activityService } from "@/services/activity/activity.service";

interface RequestBody {
  name?: string;
  email: string;
  phone?: number;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body: RequestBody = await request.json();

    const { name, email, phone, subject, message } = body;

    const {
      isPropertyValid: isNameValid,
      validatedProperty: validatedName,
      message: nameErrorMessage,
    } = nameValidator(name);

    if (!isNameValid) {
      throw AppError.unprocessable({
        message: nameErrorMessage,
        code: "NAME VALIDATION FAILED",
        details: { name },
      });
    }

    const {
      isPropertyValid: isEmailValid,
      validatedProperty: validatedEmail,
      message: emailErrorMessage,
    } = emailValidator(email);

    if (!isEmailValid) {
      throw AppError.unprocessable({
        message: emailErrorMessage,
        code: "EMAIL VALIDATION FAILED",
        details: { email },
      });
    }

    const {
      isPropertyValid: isPhoneValid,
      validatedProperty: validatedPhone,
      message: phoneErrorMessage,
    } = numberRegexPropertiesValidator("phone", phone, PHONE_REGEX);

    if (!isPhoneValid) {
      throw AppError.unprocessable({
        message: phoneErrorMessage,
        code: "PHONE VALIDATION FAILED",
        details: { phone },
      });
    }

    const {
      isPropertyValid: isSubjectValid,
      validatedProperty: validatedSubject,
      message: subjectErrorMessage,
    } = stringPropertiesValidator(
      "subject",
      subject,
      propertyConstraintsConfig.minStringLength,
      propertyConstraintsConfig.maxStringLength,
    );

    if (!isSubjectValid) {
      throw AppError.unprocessable({
        message: subjectErrorMessage,
        code: "SUBJECT VALIDATION FAILED",
        details: { subject },
      });
    }

    const {
      isPropertyValid: isMessageValid,
      validatedProperty: validatedMessage,
      message: messageErrorMessage,
    } = stringPropertiesValidator(
      "message",
      message,
      propertyConstraintsConfig.minStringLength,
      propertyConstraintsConfig.maxStringLength,
    );

    if (!isMessageValid) {
      throw AppError.unprocessable({
        message: messageErrorMessage,
        code: "MESSAGE VALIDATION FAILED",
        details: { message },
      });
    }

    const result = await emailService.send({
      validatedName,
      validatedEmail,
      validatedSubject,
      validatedPhone,
      validatedMessage,
      template: connectionEmail({
        appName: appConfig.name,
        profileUrl: `${BASE_URL}/profile`,
        userName,
      }),
    });

    await activityService.logActivity({
      user: request.data.userId,
      action: "admin_user_status_changed",
      metadata: { targetUserId: userId, newStatus: status },
      ipAddress: request.ip,
    });

    return responseService.successResponseHandler(request, response, {
      status: "EMAIL SEND SUCCESS",
      statusCode: httpStatusConfig.success.statusCode,
      message: result.message,
      data,
    });
  } catch (error) {
    responseService.errorResponseHandler(error, request, response, next);
  }
}
