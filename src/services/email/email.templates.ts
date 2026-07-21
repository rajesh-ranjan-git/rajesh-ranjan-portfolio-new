import React from "react";

const e = React.createElement;

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
    textTransform: "uppercase",
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
  },
  muted: {
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: "22px",
    margin: "0 0 16px",
  },
  button: {
    backgroundColor: "#4f46e5",
    borderRadius: "6px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: "700",
    margin: "8px 0 24px",
    padding: "12px 20px",
    textDecoration: "none",
  },
  dangerButton: {
    backgroundColor: "#dc2626",
  },
  successButton: {
    backgroundColor: "#059669",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e5e7eb",
    margin: "24px 0",
  },
  link: {
    color: "#4f46e5",
    wordBreak: "break-all",
  },
};

export const emailLayout = ({ appName, children, preview }) => {
  return e(
    "html",
    null,
    e("head", null, e("title", null, preview)),
    e(
      "body",
      { style: styles.body },
      e(
        "div",
        { style: styles.container },
        e("p", { style: styles.eyebrow }, appName),
        children,
      ),
    ),
  );
};

export const connectionEmail = ({ appName, profileUrl, userName }) => {
  return e(
    emailLayout,
    {
      appName,
      preview: `Welcome to ${appName}`,
    },
    e("h1", { style: styles.heading }, `Welcome to ${appName}`),
    e(
      "p",
      { style: styles.paragraph },
      "Hi ",
      e("strong", null, userName || "there"),
      ",",
    ),
    e(
      "p",
      { style: styles.paragraph },
      "Your account is all set up and ready to go.",
    ),
    e(actionLink, {
      href: profileUrl,
      label: "Go to your profile",
      variant: "success",
    }),
    e(
      "p",
      { style: styles.muted },
      "If you have any questions, feel free to reach out to support.",
    ),
  );
};
