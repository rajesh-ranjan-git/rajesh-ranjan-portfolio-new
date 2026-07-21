import { appConfig } from "@/config/common.config";
import {
  ContactNotificationEmailPropsType,
  EmailLayoutPropsType,
} from "@/types/types/email.types";

const styles = {
  body: {
    backgroundColor: "#f6f7fb",
    color: "#111827",
    fontFamily:
      "Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    margin: 0,
    padding: "32px 16px",
  },
  container: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    margin: "0 auto",
    maxWidth: "600px",
    padding: "32px",
  },
  eyebrow: {
    color: "#6b7280",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "0",
    margin: "0 0 12px",
    textTransform: "uppercase" as const,
  },
  heading: {
    color: "#111827",
    fontSize: "24px",
    lineHeight: "32px",
    margin: "0 0 16px",
  },
  paragraph: {
    color: "#374151",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "0 0 16px",
    whiteSpace: "pre-wrap" as const,
  },
  muted: {
    color: "#6b7280",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "0",
    margin: "0 0 8px",
    textTransform: "uppercase" as const,
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e5e7eb",
    margin: "24px 0",
  },
  link: {
    color: "#4f46e5",
    wordBreak: "break-all" as const,
  },
  detailsTable: {
    borderCollapse: "collapse" as const,
    margin: "0 0 8px",
    width: "100%",
  },
  detailsLabel: {
    color: "#6b7280",
    fontSize: "13px",
    fontWeight: "700",
    padding: "6px 12px 6px 0",
    verticalAlign: "top" as const,
    whiteSpace: "nowrap" as const,
  },
  detailsValue: {
    color: "#111827",
    fontSize: "14px",
    padding: "6px 0",
    wordBreak: "break-word" as const,
  },
};

const EmailLayout = ({ appName, preview, children }: EmailLayoutPropsType) => {
  return (
    <html>
      <head>
        <title>{preview}</title>
      </head>
      <body style={styles.body}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>{appName}</p>
          {children}
        </div>
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
          <tr>
            <td style={styles.detailsLabel}>Subject</td>
            <td style={styles.detailsValue}>{subject}</td>
          </tr>
        </tbody>
      </table>

      <hr style={styles.divider} />

      <p style={styles.muted}>Message</p>
      <p style={styles.paragraph}>{message}</p>
    </EmailLayout>
  );
};
