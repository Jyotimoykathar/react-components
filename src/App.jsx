import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center h-screen bg-gray-50 gap-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Common Button Variants ⚡
      </h1>

      <Button text="Primary" variant="primary" />
      <Button text="Secondary" variant="secondary" />
      <Button text="Success" variant="success" />
      <Button text="Warning" variant="warning" />
      <Button text="Danger" variant="danger" />
      <Button text="CTA" variant="cta" />
      <Button text="Dark" variant="dark" />
      <Button text="Ghost" variant="ghost" />
      <Button text="Link" variant="link" />
    </div>
  );
}

export default App;
