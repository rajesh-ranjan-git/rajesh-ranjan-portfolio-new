import { PHONE_REGEX } from "@/constants/regex.constants";
import { propertyConstraintsConfig } from "@/config/common.config";
import { FormStateType } from "@/types/types/actions.types";
import { emailValidator, nameValidator } from "@/validators/contact.validators";
import {
  numberRegexPropertiesValidator,
  stringPropertiesValidator,
} from "@/validators/common.validators";
import { api } from "@/lib/api/apiHandler";

export const sendMessage = async (
  prevState: FormStateType,
  formData: FormData,
): Promise<FormStateType> => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const errors: FormStateType["errors"] = {};

  const { validatedProperty: validatedName, message: nameErrorMessage } =
    nameValidator(name);
  errors.name = nameErrorMessage ?? null;

  const { validatedProperty: validatedEmail, message: emailErrorMessage } =
    emailValidator(email);
  errors.email = emailErrorMessage ?? null;

  const { validatedProperty: validatedPhone, message: phoneErrorMessage } =
    numberRegexPropertiesValidator("phone", phone, PHONE_REGEX);
  errors.phone = phoneErrorMessage ?? null;

  const { validatedProperty: validatedSubject, message: subjectErrorMessage } =
    stringPropertiesValidator(
      "subject",
      subject,
      propertyConstraintsConfig.minStringLength,
      propertyConstraintsConfig.maxStringLength,
    );
  errors.subject = subjectErrorMessage ?? null;

  const { validatedProperty: validatedMessage, message: messageErrorMessage } =
    stringPropertiesValidator(
      "message",
      message,
      propertyConstraintsConfig.minStringLength,
      propertyConstraintsConfig.maxStringLength,
    );
  errors.message = subjectErrorMessage ?? null;

  if (Object.values(errors).some((error) => error !== null)) {
    return {
      success: false,
      status: "VALIDATION FAILED",
      code: "SEND EMAIL FAILED",
      statusCode: 422,
      message: "Please provide valid details to update!",
      details: errors,
      timestamp: new Date().toISOString(),
      metadata: null,
      errors,
      inputs: Object.fromEntries(formData),
    };
  }

  try {
    const response = await api.post("email", {
      name: validatedName,
      email: validatedEmail,
      phone: validatedPhone,
      subject: validatedSubject,
      message: validatedMessage,
    });

    return { ...response };
  } catch (error: any) {
    return {
      success: false,
      status: error?.status ?? "VALIDATION FAILED",
      code: error?.code ?? "SEND EMAIL FAILED",
      statusCode: error?.statusCode ?? 500,
      message: error?.message ?? "Unable to send email!",
      details: error?.details ?? null,
      timestamp: new Date().toISOString(),
      metadata: error?.metadata ?? null,
      inputs: Object.fromEntries(formData),
    };
  }
};
