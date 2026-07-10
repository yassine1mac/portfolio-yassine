import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex items-center justify-center px-6"
          style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}
        >
          <div className="max-w-md w-full text-left">
            <div className="eyebrow mb-4" style={{ color: "#F87171" }}>
              [ ERROR · UNCAUGHT ]
            </div>
            <h1 className="h-section mb-4">Something broke.</h1>
            <p className="mb-6" style={{ color: "var(--fg-muted)" }}>
              An uncaught error interrupted rendering. You can try again or reload the page.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={this.handleReset}
                className="px-5 py-3 rounded-chip font-mono text-xs uppercase tracking-widest"
                style={{ backgroundColor: "var(--accent)", color: "#FFFFFF" }}
              >
                Try again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-3 rounded-chip border font-mono text-xs uppercase tracking-widest"
                style={{ borderColor: "var(--hairline-strong)", color: "var(--fg)" }}
              >
                Reload page
              </button>
            </div>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-8">
                <summary className="cursor-pointer font-mono text-xs uppercase tracking-widest" style={{ color: "var(--fg-muted)" }}>
                  Show error details
                </summary>
                <pre
                  className="mt-3 p-4 rounded-chip font-mono text-xs overflow-auto max-h-52"
                  style={{ backgroundColor: "var(--surface-alt)", color: "#F87171" }}
                >
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
