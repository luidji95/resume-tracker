import React from "react";
import "./authLayout.css"; 


type Props = {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export function AuthLayout({ title, subtitle, children }: Props) {
  return (
    <div className="auth">
      <div className="auth-card">
        <div className="auth-head">
          <div className="auth-badge">🔐 Secure Access</div>
          <h1 className="auth-title">{title}</h1>
          {subtitle ? <p className="auth-subtitle">{subtitle}</p> : null}
        </div>

        <div className="auth-inner">{children}</div>
      </div>
    </div>
  );
}
