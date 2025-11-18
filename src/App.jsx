import React from "react";
// import Button from "./components/Button";
import SimpleNavbar from "./components/navbars/SimpleNavbar";

// function App() {
//   return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-center h-screen bg-gray-50 gap-4">

//       <h1 className="text-2xl font-semibold text-gray-800 mb-6">
//         Common Button Variants ⚡
//       </h1>
//       <div>
//         <Button text="Primary" variant="primary" />
//         <Button text="Secondary" variant="secondary" />
//         <Button text="Success" variant="success" />
//         <Button text="Warning" variant="warning" />
//         <Button text="Danger" variant="danger" />
//         <Button text="CTA" variant="cta" />
//         <Button text="Dark" variant="dark" />
//         <Button text="Ghost" variant="ghost" />
//         <Button text="Link" variant="link" />
//       </div>
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔥 Switch any Navbar here to test */}
      <SimpleNavbar />
      {/* <CenterNavbar /> */}
      {/* <MobileSidebarNavbar />  */}
      {/* 🧪 Main content area for previewing components */}
      <main className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">Component Preview</h1>
        <p className="text-gray-600 mb-8">
          This is your testing area. Add any component below to preview it.
        </p>

        {/* 🎯 Place your components here to test them */}
        {/* <ProductCard /> */}
        {/* <Modal /> */}
        {/* <Button /> */}
        {/* <Accordion /> */}
      </main>
      {/* 🔥 Test Footer */}
      {/* <SimpleFooter /> */}
    </div>
  );
}
