import React, { Component } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true });
    // You can log the error here for debugging purposes
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message or loading indicator here
      return <h1 className="f5 red">Something went wrong!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
