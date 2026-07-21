import { appConfig } from "@/config/common.config";
import {
  ContactNotificationEmailPropsType,
  EmailLayoutPropsType,
} from "@/types/types/email.types";
import { toSentenceCase } from "@/utils/common.utils";

const theme = {
  navy: "#0d0f2b",
  secondary: "#4b5563",
  mutedSecondary: "#6b7280",
  bodyBg: "#f4f7ff",
  border: "#e2e5f5",
  accentBlue: "#3f82d9",
  accentPurple: "#8b5cf6",
  accentPink: "#f54568",
};

const fontFamily =
  "'Poppins', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const styles = {
  body: {
    backgroundColor: theme.bodyBg,
    color: theme.navy,
    fontFamily,
    margin: 0,
    padding: "32px 16px",
  },
  card: {
    backgroundColor: "#ffffff",
    border: `1px solid ${theme.border}`,
    borderRadius: "16px",
    margin: "0 auto",
    maxWidth: "600px",
    overflow: "hidden",
  },
  accentBar: {
    background: `linear-gradient(90deg, ${theme.accentBlue}, ${theme.accentPurple}, ${theme.accentPink})`,
    height: "4px",
  },
  container: {
    padding: "32px",
  },
  eyebrow: {
    color: theme.accentBlue,
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "0.06em",
    margin: "0 0 12px",
    textTransform: "uppercase" as const,
  },
  heading: {
    color: theme.navy,
    fontSize: "24px",
    fontWeight: "800",
    lineHeight: "32px",
    margin: "0 0 16px",
  },
  subject: {
    color: theme.accentPurple,
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "32px",
    margin: "0 0 16px",
  },
  paragraph: {
    color: theme.secondary,
    fontSize: "16px",
    lineHeight: "24px",
    margin: "0 0 16px",
    whiteSpace: "pre-wrap" as const,
  },
  muted: {
    color: theme.mutedSecondary,
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "0.06em",
    margin: "0 0 8px",
    textTransform: "uppercase" as const,
  },
  divider: {
    border: "none",
    borderTop: `1px solid ${theme.border}`,
    margin: "24px 0",
  },
  link: {
    color: theme.accentBlue,
    wordBreak: "break-all" as const,
  },
  detailsTable: {
    borderCollapse: "collapse" as const,
    margin: "0 0 8px",
    width: "100%",
  },
  detailsLabel: {
    color: theme.mutedSecondary,
    fontSize: "13px",
    fontWeight: "700",
    padding: "6px 12px 6px 0",
    verticalAlign: "top" as const,
    whiteSpace: "nowrap" as const,
  },
  detailsValue: {
    color: theme.navy,
    fontSize: "14px",
    padding: "6px 0",
    wordBreak: "break-word" as const,
  },
  footer: {
    color: theme.mutedSecondary,
    fontSize: "12px",
    lineHeight: "18px",
    margin: "20px auto 0",
    maxWidth: "600px",
    padding: "0 32px",
    textAlign: "center" as const,
  },
};

const EmailLayout = ({ appName, preview, children }: EmailLayoutPropsType) => {
  return (
    <html>
      <head>
        <title>{preview}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={styles.body}>
        <div style={styles.card}>
          <div style={styles.accentBar} />
          <div style={styles.container}>
            <p style={styles.eyebrow}>{appName}</p>
            {children}
          </div>
        </div>
        <p style={styles.footer}>
          This message was sent from the {appName} contact form.
        </p>
      </body>
    </html>
  );
};

export const contactNotificationEmail = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactNotificationEmailPropsType) => {
  return (
    <EmailLayout
      appName={appConfig.name}
      preview={`New portfolio contact message from ${name ?? email}`}
    >
      <h1 style={styles.heading}>New Contact Message</h1>

      <p style={styles.paragraph}>
        Someone has just contacted you through your portfolio.
      </p>

      <table style={styles.detailsTable}>
        <tbody>
          <tr>
            <td style={styles.detailsLabel}>Name</td>
            <td style={styles.detailsValue}>{name ?? "Not provided"}</td>
          </tr>
          <tr>
            <td style={styles.detailsLabel}>Email</td>
            <td style={styles.detailsValue}>
              <a href={`mailto:${email}`} style={styles.link}>
                {email}
              </a>
            </td>
          </tr>
          <tr>
            <td style={styles.detailsLabel}>Phone</td>
            <td style={styles.detailsValue}>{phone ?? "Not provided"}</td>
          </tr>
        </tbody>
      </table>

      <hr style={styles.divider} />

      <h2 style={styles.subject}>{toSentenceCase(subject)}</h2>

      <p style={styles.muted}>Message</p>
      <p style={styles.paragraph}>{toSentenceCase(message)}</p>
    </EmailLayout>
  );
};
