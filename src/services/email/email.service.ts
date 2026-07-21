import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { render } from "@react-email/render";
import {
  MODE,
  AWS_EMAIL_FROM,
  AWS_DEV_EMAIL_OVERRIDE,
  AWS_SES_REGION,
  AWS_SES_ACCESS_KEY_ID,
  AWS_SES_SECRET_ACCESS_KEY,
} from "@/constants/env.constants.js";
import { httpStatusConfig } from "@/config/http.config.js";
import AppError from "@/services/error/error.service.js";

class EmailService {
  constructor() {
    this.client = new SESClient({
      region: AWS_SES_REGION,
      credentials: {
        accessKeyId: AWS_SES_ACCESS_KEY_ID,
        secretAccessKey: AWS_SES_SECRET_ACCESS_KEY,
      },
    });
  }

  normalizeRecipients(recipients) {
    if (Array.isArray(recipients)) {
      return recipients
        .map((recipient) => recipient?.trim().toLowerCase())
        .filter(Boolean);
    }

    return recipients
      ?.split(",")
      .map((recipient) => recipient.trim().toLowerCase())
      .filter(Boolean);
  }

  getRecipients(to) {
    if (MODE !== "production" && AWS_DEV_EMAIL_OVERRIDE) {
      return this.normalizeRecipients(AWS_DEV_EMAIL_OVERRIDE);
    }

    return this.normalizeRecipients(to);
  }

  async send({ to, subject, template }) {
    try {
      const recipients = this.getRecipients(to);

      if (!AWS_EMAIL_FROM || !recipients?.length) {
        throw new AppError({
          message: "Email Service is not configured!",
          code: "EMAIL SERVICE FAILED",
          statusCode: httpStatusConfig.serviceUnavailable.statusCode,
        });
      }

      const html = await render(template);

      const text = await render(template, { plainText: true });

      const command = new SendEmailCommand({
        Source: AWS_EMAIL_FROM,
        Destination: {
          ToAddresses: recipients,
        },
        Message: {
          Subject: {
            Data: subject,
            Charset: "UTF-8",
          },
          Body: {
            Html: {
              Data: html,
              Charset: "UTF-8",
            },
            Text: {
              Data: text,
              Charset: "UTF-8",
            },
          },
        },
      });

      return await this.client.send(command);
    } catch (error) {
      logger.error("[EmailService] Failed to send email:", error);
      return null;
    }
  }
}

export const emailService = new EmailService();
